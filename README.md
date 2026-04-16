# The Pattern Repeats
### An Interactive Environmental Justice Investigation

---

## What Is This?

**The Pattern Repeats** is an interactive documentary game about environmental racism in America. It traces the same Black communities through four successive industrial waves — from the highway bulldozers of the 1950s to the data centers being built today — and makes visible a pattern that has persisted for over 70 years.

You play as an investigative journalist. Your job is to document communities, find the connections, and reveal the system behind them.

---

## The Point

Every few decades, a new industry arrives. Each time, the communities that absorb its burden are the same ones that absorbed the last wave's burden — and the one before that.

This project makes that argument visually and interactively. The game's thesis is simple:

> *The same communities faced industrial burden across generations. This is not coincidence. This is a system.*

The four waves:

| Wave | Era | What Happened |
|------|-----|---------------|
| I | 1950s–60s | The Federal Highway Act routed interstates through Black neighborhoods — cheaper land, less resistance |
| II | 1970s–80s | As regulations tightened in white suburbs, refineries and chemical plants expanded in communities with less political power |
| III | 1990s | Hazardous waste sites, incinerators, and landfills concentrated in Black and low-income communities — a 1987 study confirmed race was the single biggest factor |
| IV | 2010s–Now | Data centers — marketed as "clean" tech — are being sited along the same corridors, with the same logic |

**Memphis, TN appears in all four waves.** The same ZIP codes that were bisected by I-240 in 1965 hosted chemical plants in the 1970s, waste facilities in the 1990s, and now a Microsoft data center on the site of a former coal plant. That is the pattern this game exists to name.

---

## How to Play

### Starting

Open `index.html` in a browser. No server or build step required — it runs as a static file.

You'll see the intro screen. Read it. Click **Begin Investigation**.

### Investigating Communities

Each era presents **5 community cards**, shown face-down with redacted information. Each card represents a real place and a real event.

- **Click any card** to investigate it
- The card flips to reveal the community's name, the key historical fact, its impact, and demographic context
- The map marker for that location lights up
- The era dots at the bottom of each card show which waves that community appears across

### Finding Patterns

Some communities have been targeted more than once. When you investigate a community that appeared in a previous wave, a **connection overlay** appears:

- A gold dashed line is drawn on the map between the two locations
- The overlay tells you which era the community first appeared in
- When Memphis appears for the **fourth time**, the overlay escalates — red-tinted, stark text: *"Four Waves. One Community."*

Click **Acknowledge** to continue.

### Progressing

Once you've investigated all 5 communities in a wave, an **era complete screen** appears showing how many recurring patterns you found. Advance to unlock the next wave.

### The Final Reveal

After completing Wave IV, the full **Pattern Matrix** is revealed — a grid showing all 6 recurring communities across all 4 eras. The map shows every location simultaneously, connected by gold lines.

There is no score. The goal is to see the pattern clearly.

---

## The Communities

The game covers **20 real communities** across **6 recurring patterns**:

| Community | Waves |
|-----------|-------|
| South Memphis, TN | Highways → Refineries → Waste → Data Centers |
| Atlanta, GA (Vine City / South Side) | Highways → Data Centers |
| Richmond, CA | Refineries → Waste |
| Richmond, VA (Jackson Ward) | Highways → Data Centers |
| Houston, TX (Fifth Ward) | Refineries → Waste |
| Cancer Alley, LA | Refineries → Data Centers |

All facts, statistics, and historical events in the game are drawn from documented public record — EPA data, GAO studies, court records, investigative journalism, and the communities' own accounts.

---

## How It's Built

This is a **static single-page application** — no framework, no build step, no backend. It runs directly in the browser from a local file.

### Stack

- **Vanilla JavaScript** — no React, Vue, or Angular
- **Leaflet.js** — interactive map with CartoDB Dark Matter tiles
- **CSS3** — all animations including the card flip use pure CSS transforms
- **HTML5** — semantic structure, no templating engine

### File Structure

```
index.html          ← HTML shell and DOM structure
css/
  style.css         ← All styles: layout, cards, overlays, animations, responsive
js/
  data.js           ← All community and era data (globals: ERAS, RECURRING_COMMUNITIES)
  map.js            ← MapManager — Leaflet initialization, markers, connection lines
  ui.js             ← UIManager — DOM rendering, card flip animation, all overlays
  game.js           ← GameEngine — state machine, game progression logic
```

### Architecture

The three JS modules are IIFE-based singletons that communicate through a clear hierarchy:

```
game.js (GameEngine)
  ├── calls UIManager to render and show overlays
  └── calls MapManager to update the map

ui.js (UIManager)
  └── calls GameEngine for user actions (card clicks, button presses)

map.js (MapManager)
  └── calls GameEngine.getState() for final reveal rendering
```

Script loading order matters — `data.js` first (no dependencies), then `map.js` and `ui.js`, then `game.js` last (boots the application on `DOMContentLoaded`).

### Game State

All game state lives in a single object inside `GameEngine`:

```javascript
{
  currentEraIndex:       0,          // which wave is active (0–3)
  investigatedIds:       Set,        // community IDs already revealed
  discoveredConnections: Set,        // communityKey strings (recurring patterns found)
  firstAppearance:       {},         // communityKey → eraId of first encounter
  communityKeyCount:     {},         // communityKey → number of times encountered
  eraUnlocked:           [true, false, false, false],
  awaitingAck:           false       // blocks input while overlay is open
}
```

### Card Flip Animation

The flip uses a two-phase CSS `scaleX` transform — no 3D perspective tricks:

1. Scale the card to `scaleX(0)` over 220ms (`ease-in`)
2. Swap the HTML content at the zero-width moment
3. Scale back to `scaleX(1)` over 220ms (`ease-out`)

This works with variable-height content and avoids backface-visibility issues.

---

## Running Locally

No installation needed.

```bash
# Option 1: just open the file
open index.html

# Option 2: serve with Python (avoids any browser file:// restrictions)
python3 -m http.server 8000
# then open http://localhost:8000

# Option 3: serve with Node
npx serve .
```

---

## Sources

The historical facts in this game are drawn from:

- U.S. General Accounting Office, *Siting of Hazardous Waste Landfills* (1983)
- United Church of Christ Commission for Racial Justice, *Toxic Wastes and Race in the United States* (1987)
- EPA Environmental Justice Screening Tool (EJScreen)
- ProPublica, *Sacrifice Zones* reporting on Cancer Alley
- Robert Bullard, *Dumping in Dixie: Race, Class, and Environmental Quality* (1990)
- Detroit Historical Society records on Black Bottom / Paradise Valley
- Nashville Metro Archives on the Jefferson Street I-40 rerouting
- Goldman Environmental Prize — Sharon Lavigne, 2021
- Columbia University Center for Environmental Health documentation

---

## Developer

Built by **wmhlanga-code** as an interactive journalism and environmental justice project.

The game is intentionally ungamified in the traditional sense — no points, no timer, no failure state. The only objective is to see what the record shows.
