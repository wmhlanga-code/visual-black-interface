# The Pattern Repeats
### An Interactive Environmental Justice Investigation

---

## What Is This?

**The Pattern Repeats** is an interactive documentary game about environmental racism. It traces how the same communities — predominantly Black and low-income — have absorbed the burden of every industrial wave their governments permitted: highways, refineries, waste sites, and now data centers.

You play as an investigative journalist. Your job is to document communities, find the recurring patterns, and reveal the system behind them.

The game covers **three countries** — the United States, the United Kingdom, and South Africa — each with its own industrial timeline and its own version of the same story.

---

## The Point

Every few decades, a new industry arrives. Each time, the communities that absorb its burden are the same ones that absorbed the last wave's burden — and the one before that.

> *The same communities faced industrial burden across generations. This is not coincidence. This is a system.*

### United States — 4 Waves

| Wave | Era | What Happened |
|------|-----|---------------|
| I | 1950s–60s | The Federal Highway Act routed interstates through Black neighborhoods — cheaper land, less resistance |
| II | 1970s–80s | As regulations tightened in white suburbs, refineries and chemical plants expanded in communities with less political power |
| III | 1990s | Hazardous waste sites, incinerators, and landfills concentrated in Black and low-income communities |
| IV | 2010s–Now | Data centers — marketed as "clean" tech — are being sited along the same corridors, with the same logic |

Memphis, TN appears in all four waves. The same ZIP codes bisected by I-240 in 1965 hosted chemical plants in the 1970s, waste facilities in the 1990s, and now a Microsoft data center on the site of a former coal plant.

### United Kingdom — 3 Waves

| Wave | Era | What Happened |
|------|-----|---------------|
| I | 1950s–70s | Industrial zoning directed factories and power stations toward immigrant and working-class communities in East London and the Midlands |
| II | 1980s–90s | Incinerators and waste transfer stations were sited in Newham, Lewisham, and other majority-minority boroughs |
| III | 2000s–Now | Illegal levels of air pollution concentrated in the same areas — Ella Adoo-Kissi-Debrah, age 9, became the first person in the UK to have air pollution listed as a cause of death |

### South Africa — 4 Waves

| Wave | Era | What Happened |
|------|-----|---------------|
| I | 1913–50s | The Natives Land Act and Group Areas Act used industrial zoning as a tool of forced displacement — Sophiatown demolished, residents moved to Soweto |
| II | 1960s–70s | Buffer zones of industry were built between white and Black residential areas, concentrating pollution in Black communities by design |
| III | 1980s–90s | South Durban became one of the most polluted industrial corridors on the continent, with refineries and chemical plants encircling Black and Indian townships |
| IV | 2000s–Now | Mining runoff, acid mine drainage, and ongoing industrial expansion continue to burden the same communities |

---

## How to Play

### Starting

Open `index.html` in a browser. No server or build step required.

The first screen is the **Country Selection**. Choose which investigation to begin — US, UK, or South Africa. Each has its own communities, patterns, and win condition.

After selecting a country, read the intro and click **Begin Investigation**.

### Investigating Communities

Each era presents community cards shown face-down with redacted information. Each card represents a real place and a real event.

- **Click any card** to investigate it — earns **10 points**
- The card flips to reveal the community's name, key historical fact, impact, and demographic context
- The map marker for that location lights up
- Era dots at the bottom of each card show which waves that community appears across
- Cards marked **⚑ Key Evidence** are central to the investigation — in the UK, this is Ella's story

### Finding Patterns

Some communities have been targeted more than once. When you investigate a community that appeared in a previous wave, a **connection overlay** appears:

- A gold dashed line is drawn on the map between the two locations
- The overlay tells you which era the community first appeared in
- When a community appears for the final time across all waves, the overlay escalates — stark text: *"[N] Waves. One Community."*
- **Recurring appearances earn bonus points**: 2nd appearance = 50 pts, 3rd = 100 pts, 4th = 200 pts

Click **Acknowledge** to continue.

### Progressing

Once you've investigated all communities in a wave, an **era complete screen** shows how many recurring patterns you found. Click to take the **Field Examination quiz** — questions drawn from the era's real history.

### Win Conditions

Each country has a specific goal:

| Country | Win Condition |
|---------|--------------|
| 🇺🇸 United States | Identify all 6 recurring patterns |
| 🇬🇧 United Kingdom | Document 3 connection events and find Ella's story |
| 🇿🇦 South Africa | Identify both recurring patterns (Soweto and South Durban) |

### The Final Reveal

After the last wave, the full **Pattern Matrix** is displayed — a grid of all recurring communities across all waves. The map shows every location simultaneously, connected by gold lines.

Your **Journalist Rating** is calculated from your final score as a percentage of the maximum possible:

| Rating | Score Threshold | Meaning |
|--------|----------------|---------|
| Exposé | ≥ 85% | Exceptional field work. The full architecture of harm uncovered. |
| Investigator | 60–84% | Strong documentation. Most key patterns identified. |
| Correspondent | < 60% | The story is filed. More digging would have revealed the full picture. |

Best scores are saved per country using `localStorage` and shown on the country selection screen.

---

## The Communities

### United States — 20 communities, 6 patterns

| Community | Waves |
|-----------|-------|
| South Memphis, TN | Highways → Refineries → Waste → Data Centers |
| Atlanta, GA (Vine City / South Side) | Highways → Data Centers |
| Richmond, CA | Refineries → Waste |
| Richmond, VA (Jackson Ward) | Highways → Data Centers |
| Houston, TX (Fifth Ward) | Refineries → Waste |
| Cancer Alley, LA | Refineries → Data Centers |

### United Kingdom — 9 communities, 2 patterns

| Community | Waves |
|-----------|-------|
| Newham, East London | Industrial Zoning → Incinerators → Air Pollution |
| Lewisham, South London | Incinerators → Air Pollution ⚑ |

### South Africa — 12 communities, 2 patterns

| Community | Waves |
|-----------|-------|
| Sophiatown → Soweto, Johannesburg | Land Acts → Buffer Zones → Petrochemicals → Mining |
| South Durban | Buffer Zones → Petrochemicals → Mining |

All facts, statistics, and historical events are drawn from documented public record — EPA data, GAO studies, court records, government reports, and the communities' own accounts.

---

## How It's Built

This is a **static single-page application** — no framework, no build step, no backend. It runs directly in the browser from a local file.

### Stack

- **Vanilla JavaScript** — no React, Vue, or Angular
- **Leaflet.js** — interactive map with CartoDB Dark Matter tiles
- **CSS3** — all animations including the card flip use pure CSS transforms
- **HTML5** — semantic structure, no templating engine
- **localStorage** — best score persistence per country, no server required

### File Structure

```
index.html          ← HTML shell and DOM structure
css/
  style.css         ← All styles: layout, cards, overlays, animations, responsive
js/
  data.js           ← All country/era/community data; COUNTRY_CONFIG; setCountryData()
  map.js            ← MapManager — Leaflet initialization, markers, connection lines
  ui.js             ← UIManager — DOM rendering, card flip, all overlays, country select
  game.js           ← GameEngine — state machine, points, win conditions, progression
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

### Multi-Country Data Architecture

All US data is stored as `US_ERAS`, `US_RECURRING`, `US_QUIZZES`. UK and South Africa equivalents follow the same pattern. Active references (`ERAS`, `RECURRING_COMMUNITIES`, `QUIZZES`) are `let` globals reassigned by `setCountryData(code)` when a country is selected. All existing game logic reads the active globals without modification.

```javascript
// data.js
let ERAS = US_ERAS;
let RECURRING_COMMUNITIES = US_RECURRING;
let QUIZZES = US_QUIZZES;

function setCountryData(code) { /* reassigns all three */ }
```

`COUNTRY_CONFIG` holds per-country metadata: map center, zoom level, community/pattern counts, max score, win condition type, and win screen copy.

### Game State

All game state lives in a single object inside `GameEngine`:

```javascript
{
  country:               'us',       // active country code
  currentEraIndex:       0,          // which wave is active
  investigatedIds:       Set,        // community IDs already revealed
  discoveredConnections: Set,        // recurring patterns found (communityKey strings)
  firstAppearance:       {},         // communityKey → eraId of first encounter
  communityKeyCount:     {},         // communityKey → times encountered
  eraUnlocked:           [...],      // boolean per era
  awaitingAck:           false,      // blocks input while overlay is open
  score:                 0,          // current session points
  totalConnectionEvents: 0,          // number of recurring appearances triggered
  quiz:                  { ... }     // quiz state
}
```

### Points System

| Action | Points |
|--------|--------|
| Investigate a community card | 10 |
| 2nd appearance of a recurring community | 50 |
| 3rd appearance | 100 |
| 4th appearance | 200 |

Maximum scores: US = 800 pts, UK = 290 pts, ZA = 620 pts.

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

### United States
- U.S. General Accounting Office, *Siting of Hazardous Waste Landfills* (1983)
- United Church of Christ Commission for Racial Justice, *Toxic Wastes and Race in the United States* (1987)
- EPA Environmental Justice Screening Tool (EJScreen)
- ProPublica, *Sacrifice Zones* reporting on Cancer Alley
- Robert Bullard, *Dumping in Dixie: Race, Class, and Environmental Quality* (1990)
- Detroit Historical Society records on Black Bottom / Paradise Valley
- Nashville Metro Archives on the Jefferson Street I-40 rerouting
- Goldman Environmental Prize — Sharon Lavigne, 2021

### United Kingdom
- Coroner's inquest findings — Ella Adoo-Kissi-Debrah (2020)
- Clean Air in London / ClientEarth air quality litigation records
- UK Environment Agency pollution monitoring data
- Rosamund Adoo-Kissi-Debrah, testimony and public advocacy

### South Africa
- Natives Land Act (1913) and Group Areas Act (1950) — parliamentary records
- South Durban Community Environmental Alliance (SDCEA) documentation
- groundWork / Friends of the Earth South Africa reports
- South African Human Rights Commission environmental justice hearings

---

## Developer

Built by **wmhlanga-code** as an interactive journalism and environmental justice project.
