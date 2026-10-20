# 🌱 EcoPulse — Smart Urban Sustainability & Improvement System

> **Observe. Understand. Improve.**
> An interactive smart-city dashboard and environmental analytics platform demonstrating data-driven urban sustainability interventions with MongoDB Atlas cloud persistence.

---

## 🌟 Key Features

1. **Urban Pattern Observation Dashboard**: AQI, Waste, Energy, and Water indicators with sparkline charts, status badges, zone filters (Residential, Commercial, Industrial, Mixed), and time filters (Today, 7D, 30D).
2. **Global City Archetype Presets**: Load predefined urban profiles (*Metropolis Core*, *Copenhagen Eco-Pioneer*, *Industrial Corridor*, *Coastal Smart Metropolis*).
3. **Live Anomaly Alert Feed**: Simulated real-time alert ticker featuring an **"⚡ Intervene Now"** CTA that configures the simulator automatically.
4. **Interactive Urban Operations Map**: Custom schematic city vector layout with 6 clickable zone hotspots and an active inspection drawer.
5. **Environmental Pattern Analysis**: 4 real-world patterns (Traffic/Air, Waste Segregation, Peak Energy, Water Leaks) with interactive **Before vs. After** comparison toggles.
6. **Sustainability Improvement Simulator**: 5 responsive sliders recalculating CO2 avoided, landfill waste diverted, electricity saved, water saved, and composite index score in real time.
7. **Scenario Comparison & Projection Chart**: Side-by-side comparative table + 6-month SVG score projection curve visualizer.
8. **EcoAction Recommendation Engine**: Rule-based recommendations with category filters, interactive Action Plan drawer, and **MongoDB Atlas cloud persistence**.
9. **Action Plan Exporter & Cloud Sync**: Save action plans directly to MongoDB Atlas, export as JSON, or synchronize seamlessly with offline `localStorage` fallback.
10. **Sustainability Score & Progress Tracker**: Radial score gauge, sector breakdown, and milestone tracker with 4 dynamic badges.
11. **Learn & Explore Quiz**: 6 educational cards + 5-question quiz with instant rationale, score feedback, and retry option.
12. **Dual Eco-Theme Switcher**: Toggle between **Futuristic Cyber Dark Mode** and **Clean Modern Light Mode**.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, HTML5, Modern CSS3 (Glassmorphism, CSS Variables, Eco-Tech styling)
- **Styling**: Tailwind CSS + Custom Design System (`css/styles.css`)
- **Backend**: Node.js Native HTTP Server (`server.js`)
- **Database**: MongoDB Atlas via official `mongodb` Node.js driver
- **Persistence**: MongoDB Atlas Cloud Database (`action_plans` collection) + browser `localStorage` fallback

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/vidhijindal24/ecopulse.git
cd ecopulse
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and paste your MongoDB Atlas connection string:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/ecopulse?retryWrites=true&w=majority
PORT=3000
```

### 4. Start the server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Render

1. Push your latest code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add MongoDB Atlas persistence"
   git push origin main
   ```
2. Log in to [Render](https://render.com) and click **New +** $\rightarrow$ **Web Service**.
3. Connect your GitHub repository: `vidhijindal24/ecopulse`.
4. Configure the service settings:
   - **Name**: `ecopulse`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. In **Environment Variables**, add:
   - Key: `MONGODB_URI`
   - Value: `your_mongodb_atlas_connection_string`
6. Click **Deploy Web Service**. Render will build and deploy the app with a live HTTPS URL!
