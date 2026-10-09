# 🌱 EcoPulse — Smart Urban Sustainability & Improvement System

> **Observe. Understand. Improve.**
> An interactive smart-city dashboard and environmental analytics platform demonstrating data-driven urban sustainability interventions.

---

## 🌟 Key Features

1. **Urban Pattern Observation Dashboard**: AQI, Waste, Energy, and Water indicators with sparkline charts, status badges, zone filters (Residential, Commercial, Industrial, Mixed), and time filters (Today, 7D, 30D).
2. **Global City Archetype Presets**: Load predefined urban profiles (*Metropolis Core*, *Copenhagen Eco-Pioneer*, *Industrial Corridor*, *Coastal Smart Metropolis*).
3. **Live Anomaly Alert Feed**: Simulated real-time alert ticker featuring an **"⚡ Intervene Now"** CTA that configures the simulator automatically.
4. **Interactive Urban Operations Map**: Custom schematic city vector layout with 6 clickable zone hotspots and an active inspection drawer.
5. **Environmental Pattern Analysis**: 4 real-world patterns (Traffic/Air, Waste Segregation, Peak Energy, Water Leaks) with interactive **Before vs. After** comparison toggles.
6. **Sustainability Improvement Simulator**: 5 responsive sliders recalculating CO2 avoided, landfill waste diverted, electricity saved, water saved, and composite index score in real time.
7. **Scenario Comparison & Projection Chart**: Side-by-side comparative table + 6-month SVG score projection curve visualizer.
8. **EcoAction Recommendation Engine & Exporter**: Rule-based recommendations with category filters, interactive Action Plan drawer, and **JSON report downloader**.
9. **Sustainability Score & Progress Tracker**: Radial score gauge, sector breakdown, and milestone tracker with 4 dynamic badges.
10. **Learn & Explore Quiz**: 6 educational cards + 5-question quiz with instant rationale, score feedback, and retry option.
11. **Dual Eco-Theme Switcher**: Toggle between **Futuristic Cyber Dark Mode** and **Clean Modern Light Mode**.

---

## 🚀 Quick Start (Local Running)

### Running with Node.js
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/ecopulse.git
cd ecopulse

# Start local dev server
node server.js
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, HTML5, Modern CSS3 (Glassmorphism, CSS Variables, Eco-Tech styling)
- **Styling**: Tailwind CSS + Custom Design System (`css/styles.css`)
- **Icons**: Lucide Vector Icons
- **Server**: Node.js HTTP Server (`server.js`)
- **Persistence**: Browser `LocalStorage`
