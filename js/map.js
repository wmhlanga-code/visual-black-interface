/* ═══════════════════════════════════════════════════════════
   THE PATTERN REPEATS — map.js
   MapManager: Leaflet map, markers, connection lines
   ═══════════════════════════════════════════════════════════ */

const MapManager = (() => {
  let map = null;
  let markers = new Map();       // communityId → L.circleMarker
  let connectionLines = [];      // L.polyline[]

  // ── Init ──────────────────────────────────────────────────

  function init(containerId) {
    if (map) return; // already initialized
    map = L.map(containerId, { zoomControl: true }).setView([38, -96], 4);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 18
    }).addTo(map);
  }

  // ── Load an era's markers ─────────────────────────────────

  function loadEra(eraData, investigatedIds) {
    // Remove existing markers
    markers.forEach(m => map.removeLayer(m));
    markers.clear();

    const bounds = [];

    eraData.communities.forEach(c => {
      const isInvestigated = investigatedIds.has(c.id);
      const isRecurring = Boolean(c.communityKey);

      const marker = L.circleMarker([c.lat, c.lon], _markerStyle(isInvestigated, isRecurring, eraData.color)).addTo(map);

      if (isInvestigated) {
        marker.bindPopup(_popupHTML(c));
        marker.on('click', () => _onMarkerClick(c, eraData));
      } else {
        marker.on('click', () => GameEngine.investigateCommunity(c.id));
        marker.getElement && marker.getElement()?.style.setProperty('cursor', 'pointer');
      }

      markers.set(c.id, marker);
      bounds.push([c.lat, c.lon]);
    });

    if (bounds.length) {
      map.flyToBounds(bounds, { padding: [60, 60], duration: 0.9, maxZoom: 7 });
    }
  }

  // ── Reveal a marker after investigation ───────────────────

  function revealMarker(communityId, eraData) {
    const marker = markers.get(communityId);
    if (!marker) return;

    const community = eraData.communities.find(c => c.id === communityId);
    if (!community) return;

    const isRecurring = Boolean(community.communityKey);

    // Pulse animation: expand then contract
    marker.setStyle({ radius: 18, fillOpacity: 1 });
    setTimeout(() => {
      marker.setStyle(_markerStyle(true, isRecurring, eraData.color));
      marker.bindPopup(_popupHTML(community));
      marker.on('click', () => _onMarkerClick(community, eraData));
    }, 350);
  }

  // ── Draw a connection line between two points ─────────────

  function drawConnectionLine(fromLatLon, toLatLon, color) {
    const line = L.polyline([fromLatLon, toLatLon], {
      color: '#f5a623',
      weight: 1.5,
      dashArray: '7 5',
      opacity: 0
    }).addTo(map);

    connectionLines.push(line);

    // Fade in
    let op = 0;
    const step = setInterval(() => {
      op = Math.min(op + 0.08, 0.65);
      line.setStyle({ opacity: op });
      if (op >= 0.65) clearInterval(step);
    }, 30);
  }

  // ── Show all connections on final reveal ──────────────────

  function showAllConnections() {
    // Clear previous connection lines
    connectionLines.forEach(l => map.removeLayer(l));
    connectionLines = [];

    // Remove current era markers, then show all investigated markers across all eras
    markers.forEach(m => map.removeLayer(m));
    markers.clear();

    // Collect all investigated communities from all eras
    const state = GameEngine.getState();

    ERAS.forEach(era => {
      era.communities.forEach(c => {
        if (!state.investigatedIds.has(c.id)) return;
        const isRecurring = Boolean(c.communityKey);
        const m = L.circleMarker([c.lat, c.lon], _markerStyle(true, isRecurring, era.color)).addTo(map);
        m.bindPopup(_popupHTML(c));
        markers.set(c.id, m);
      });
    });

    // Draw dashed gold lines between recurring community appearances
    RECURRING_COMMUNITIES.forEach(rc => {
      const points = [];
      ERAS.forEach(era => {
        const c = era.communities.find(x => x.communityKey === rc.key);
        if (c && state.investigatedIds.has(c.id)) {
          points.push([c.lat, c.lon]);
        }
      });

      for (let i = 0; i < points.length - 1; i++) {
        const line = L.polyline([points[i], points[i + 1]], {
          color: '#f5a623',
          weight: 1.5,
          dashArray: '8 5',
          opacity: 0.55
        }).addTo(map);
        connectionLines.push(line);
      }
    });

    map.flyTo([38, -96], 4, { duration: 1.6 });
  }

  // ── Private helpers ───────────────────────────────────────

  function _markerStyle(investigated, recurring, eraColor) {
    if (!investigated) {
      return {
        radius:      6,
        fillColor:   '#1e2d45',
        color:       '#2a4060',
        weight:      1,
        fillOpacity: 0.85
      };
    }
    return {
      radius:      9,
      fillColor:   eraColor,
      color:       recurring ? '#f5a623' : eraColor,
      weight:      recurring ? 2.5 : 1.5,
      fillOpacity: 0.9
    };
  }

  function _popupHTML(community) {
    return `<div class="map-popup-name">${community.name}</div>
            <div class="map-popup-city">${community.city}</div>`;
  }

  function _onMarkerClick(community, eraData) {
    // Highlight the corresponding card
    const card = document.getElementById('card-' + community.id);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      card.style.transition = 'box-shadow 0.3s';
      card.style.boxShadow = '0 0 0 2px #f5a623';
      setTimeout(() => { card.style.boxShadow = ''; }, 1200);
    }
  }

  // ── Public API ────────────────────────────────────────────

  return { init, loadEra, revealMarker, drawConnectionLine, showAllConnections };
})();
