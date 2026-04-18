# Samadhan — भारत का नागरिक शिकायत पोर्टल

**Samadhan** is a bilingual (Hindi + English) civic complaint guide for Indian citizens. It aggregates real government helplines, complaint portals, and step-by-step escalation paths for 12 problem categories — from electricity and water to banking, police, and environment.

---

## Features

- **Bilingual UI** — Full Hindi and English support, switchable at any time
- **Location-based helplines** — Detects your state (GPS or manual picker) and shows state-specific DISCOM, Jal Board, and municipal portals
- **12 problem categories** — Electricity, Water, Roads, Sanitation, Banking, Police, Health, Telecom, Transport, Government Services, Environment, Education
- **74+ civic problems** with numbered portal cards, step-by-step screen instructions, copy URL button, and direct call buttons
- **Emergency banner** — Quick-dial 112, 108, 181, 1098 and other national emergency numbers
- **Smart search** — Fuzzy search in both Hindi and English across all problems
- **First-visit location modal** — Animated permission prompt to auto-detect state
- **About / Write to Us** — Feedback form with client-side validation

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Language | JavaScript (ES2022) |
| Styling | Plain CSS with custom properties |
| Icons | Font Awesome 6.5 (CDN) |
| Fonts | Inter + Noto Sans Devanagari (Google Fonts) |
| Geocoding | OpenStreetMap Nominatim (no API key) |
| State | React Context API + localStorage |
| Routing | Single-page (manual `page` state) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repository
git clone https://github.com/your-username/samadhan.git
cd samadhan

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

To access from a phone on the same Wi-Fi network:

```bash
npx vite --host
# Open the Network URL shown (e.g. http://192.168.1.x:5173)
```

### Build for Production

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

---

## Project Structure

```
samadhan/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Root component, page state
│   ├── context/
│   │   ├── LangContext.jsx       # Hindi/English toggle + t() helper
│   │   └── LocationContext.jsx   # GPS detection + state picker state
│   ├── data/
│   │   ├── categories.js         # 12 category definitions (icon, color, label)
│   │   ├── problems.js           # 74 civic problems with escalation steps
│   │   ├── stateServices.js      # State-wise DISCOM / Jal Board helplines (23 states)
│   │   ├── richPortals.js        # Rich portal cards with URLs + how-to steps (14 states)
│   │   ├── emergency.js          # Emergency helpline numbers
│   │   └── chatReplies.js        # Chat assistant keyword replies
│   ├── components/
│   │   ├── Header.jsx            # Top nav with language toggle
│   │   ├── Hero.jsx              # Landing hero with search
│   │   ├── EmergencyBanner.jsx   # Emergency numbers strip
│   │   ├── LocationBanner.jsx    # Location permission / active state bar
│   │   ├── LocationModal.jsx     # First-visit animated location modal
│   │   ├── CategoryGrid.jsx      # Horizontal category filter chips
│   │   ├── ProblemList.jsx       # Filtered list of problems
│   │   ├── ProblemRow.jsx        # Accordion row with portal cards
│   │   ├── ChatAssistant.jsx     # Floating chat help widget
│   │   ├── AboutPage.jsx         # About + contact/feedback form
│   │   ├── Footer.jsx            # Footer with links
│   │   └── BackToTop.jsx         # Scroll-to-top button
│   └── styles/
│       └── globals.css           # All styles (~2000 lines, token-based)
└── dist/                         # Production build output (git-ignored)
```

---

## Data Sources

All helpline numbers and portal URLs are sourced from official government websites:

- **CPGRAMS** — pgportal.gov.in
- **DISCOM portals** — State electricity board official websites
- **Jal Jeevan Mission** — ejalshakti.gov.in
- **Cyber Crime** — cybercrime.gov.in
- **RBI Ombudsman** — cms.rbi.org.in
- **Rail Madad** — railmadad.indianrailways.gov.in
- **NHAI** — onetouch.nhai.gov.in
- **TRAI** — consumerportal.trai.gov.in
- **Sanchar Saathi** — sancharsaathi.gov.in

> **Note:** Helpline numbers and portal URLs are subject to change by government authorities. Please verify on the official website before use.

---

## Deployment

### Vercel / Netlify (recommended)

1. Push to GitHub
2. Import the repository on Vercel or Netlify
3. Build command: `npm run build`
4. Output directory: `dist`
5. No environment variables needed

### GitHub Pages

Update `vite.config.js`:

```js
base: '/samadhan/',   // replace with your repo name
```

Then deploy:

```bash
npm run build
# push the dist/ folder to the gh-pages branch
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-state-portals`
3. Make your changes and commit: `git commit -m "Add portals for Odisha"`
4. Push and open a Pull Request

To add portals for a new state, edit `src/data/richPortals.js` and add an entry under `STATE_PORTALS` following the existing schema.

---

## Disclaimer

Samadhan is an independent civic guide and is **not affiliated** with any government body. Information is provided in good faith for public awareness. Always verify contact details on the official government website before acting.

---

## License

MIT License — see [LICENSE](LICENSE) for details.
