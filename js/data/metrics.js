// EcoPulse Urban Environmental Indicators Mock Dataset
export const DASHBOARD_METRICS = {
  // Base values per zone
  zones: {
    residential: {
      name: "Residential Neighborhoods",
      aqi: { value: 58, unit: "AQI (PM2.5)", status: "Good", threshold: "< 60 Good", sparkline: [52, 55, 60, 58, 54, 56, 58], trend: "-4%", explanation: "Moderate domestic emissions and heating/cooking exhaust." },
      waste: { value: 420, unit: "tonnes/day", status: "Moderate", threshold: "Segregation 42%", sparkline: [410, 415, 430, 425, 418, 422, 420], trend: "+2%", explanation: "High household organic waste and single-use packaging." },
      energy: { value: 1.85, unit: "GWh/day", status: "Optimal", threshold: "Peak 7-9 PM", sparkline: [1.7, 1.8, 1.9, 2.1, 1.85, 1.8, 1.85], trend: "-1.5%", explanation: "HVAC and domestic lighting peak during evening hours." },
      water: { value: 145, unit: "Liters/capita/day", status: "Moderate", threshold: "Target 120 L/c/d", sparkline: [150, 148, 146, 145, 144, 146, 145], trend: "-3.2%", explanation: "Domestic sanitation, lawn watering, and minor line leakages." }
    },
    commercial: {
      name: "Commercial Districts",
      aqi: { value: 84, unit: "AQI (PM2.5)", status: "Moderate", threshold: "< 100 Moderate", sparkline: [78, 82, 90, 88, 85, 83, 84], trend: "+5.1%", explanation: "Heavy delivery traffic, taxi idling, and commercial HVAC exhaust." },
      waste: { value: 680, unit: "tonnes/day", status: "Alert", threshold: "Segregation 28%", sparkline: [620, 650, 710, 690, 680, 670, 680], trend: "+7.4%", explanation: "High paper, cardboard, food service waste, and e-waste." },
      energy: { value: 3.40, unit: "GWh/day", status: "Critical", threshold: "High Daytime Peak", sparkline: [3.1, 3.3, 3.6, 3.5, 3.4, 3.35, 3.40], trend: "+3.8%", explanation: "Continuous corporate office cooling, lighting, and data centers." },
      water: { value: 210, unit: "Million Liters/day", status: "Moderate", threshold: "Commercial Use", sparkline: [200, 205, 215, 212, 208, 209, 210], trend: "+1.2%", explanation: "Cooling towers, commercial restrooms, and restaurant operations." }
    },
    industrial: {
      name: "Industrial Corridor",
      aqi: { value: 132, unit: "AQI (PM2.5)", status: "Critical", threshold: "> 100 Unhealthy", sparkline: [120, 128, 145, 138, 135, 130, 132], trend: "+8.9%", explanation: "Manufacturing emissions, boiler operation, and heavy logistics traffic." },
      waste: { value: 1150, unit: "tonnes/day", status: "Alert", threshold: "Industrial Residuals", sparkline: [1080, 1120, 1200, 1180, 1160, 1140, 1150], trend: "+4.1%", explanation: "Process scrap, packaging material, and industrial solid byproducts." },
      energy: { value: 6.20, unit: "GWh/day", status: "Critical", threshold: "24/7 Heavy Load", sparkline: [5.9, 6.1, 6.4, 6.3, 6.25, 6.18, 6.20], trend: "+2.0%", explanation: "Heavy machinery continuous power, thermal processes, and lighting." },
      water: { value: 380, unit: "Million Liters/day", status: "Alert", threshold: "Process Intensive", sparkline: [360, 372, 395, 388, 382, 378, 380], trend: "+1.8%", explanation: "Industrial process cooling, chemical processing, and washdowns." }
    },
    mixed: {
      name: "Mixed-Use Smart Core",
      aqi: { value: 72, unit: "AQI (PM2.5)", status: "Moderate", threshold: "Urban Baseline", sparkline: [68, 70, 75, 74, 71, 73, 72], trend: "-2.1%", explanation: "Balanced urban density with transit corridor integration." },
      waste: { value: 540, unit: "tonnes/day", status: "Moderate", threshold: "Segregation 52%", sparkline: [530, 535, 550, 545, 538, 542, 540], trend: "-1.0%", explanation: "Combined commercial retail and high-density residential stream." },
      energy: { value: 2.95, unit: "GWh/day", status: "Optimal", threshold: "Microgrid Enabled", sparkline: [2.8, 2.9, 3.1, 3.0, 2.95, 2.92, 2.95], trend: "-4.5%", explanation: "Rooftop solar offset and automated building management systems." },
      water: { value: 175, unit: "Million Liters/day", status: "Optimal", threshold: "Smart Metered", sparkline: [180, 178, 176, 175, 174, 175, 175], trend: "-5.0%", explanation: "Greywater recycling systems and automated leak detection." }
    }
  },

  // Multipliers for time periods
  periods: {
    today: { label: "Today (24h)", sparklineLength: 7, multiplier: 1.0 },
    "7days": { label: "Past 7 Days", sparklineLength: 7, multiplier: 0.96 },
    "30days": { label: "Past 30 Days", sparklineLength: 7, multiplier: 1.04 }
  }
};
