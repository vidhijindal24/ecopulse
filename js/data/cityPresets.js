// EcoPulse City Archetype Presets Dataset
export const CITY_PRESETS = [
  {
    id: "default",
    name: "Metropolis Core (Default)",
    tagline: "Balanced Urban Baseline",
    icon: "🏙️",
    badge: "Balanced Baseline",
    metrics: {
      score: 54,
      aqi: 88,
      waste: 1420,
      energy: 345,
      water: 98,
      green: 18.5
    },
    sliders: { vehicle: 0, waste: 0, energy: 0, water: 0, green: 0 },
    description: "Standard urban density with mixed commercial and residential corridors."
  },
  {
    id: "copenhagen",
    name: "Copenhagen Archetype",
    tagline: "Eco-Pioneer Capital",
    icon: "🌿",
    badge: "High Sustainability",
    metrics: {
      score: 82,
      aqi: 38,
      waste: 840,
      energy: 210,
      water: 52,
      green: 34.0
    },
    sliders: { vehicle: 35, waste: 80, energy: 25, water: 30, green: 20 },
    description: "Extensive bicycle superhighways, 80%+ waste segregation, and offshore wind power integration."
  },
  {
    id: "industrial",
    name: "Industrial Corridor",
    tagline: "High Emissions & Heavy Logistics",
    icon: "🏭",
    badge: "Critical Challenge",
    metrics: {
      score: 36,
      aqi: 142,
      waste: 2100,
      energy: 580,
      water: 180,
      green: 11.2
    },
    sliders: { vehicle: 5, waste: 15, energy: 5, water: 10, green: 5 },
    description: "Heavy manufacturing reliance, boiler combustion emissions, and high industrial water usage."
  },
  {
    id: "coastal",
    name: "Coastal Smart Metropolis",
    tagline: "Solar & Desalination Focus",
    icon: "🌊",
    badge: "Resilient Tech",
    metrics: {
      score: 68,
      aqi: 65,
      waste: 1200,
      energy: 290,
      water: 140,
      green: 22.5
    },
    sliders: { vehicle: 20, waste: 50, energy: 30, water: 20, green: 15 },
    description: "High rooftop solar capacity, greywater recycling, and EV coastal rapid transit."
  }
];

export const ANOMALY_ALERTS = [
  {
    id: "alt_1",
    type: "Air Quality Alert",
    severity: "warning",
    message: "NO2 pollution spike (+28%) detected along East Arterial Highway due to morning vehicle bottleneck.",
    targetSlider: "vehicle",
    recommendedValue: 30,
    targetSection: "simulator"
  },
  {
    id: "alt_2",
    type: "Resource Wastage Alert",
    severity: "danger",
    message: "Underground main pipe fracture detected in Sector 4 — 42 ML/day water loss estimated.",
    targetSlider: "water",
    recommendedValue: 25,
    targetSection: "simulator"
  },
  {
    id: "alt_3",
    type: "Landfill Pressure Alert",
    severity: "warning",
    message: "Unsegregated organic waste influx threatening North Landfill capacity.",
    targetSlider: "waste",
    recommendedValue: 60,
    targetSection: "simulator"
  },
  {
    id: "alt_4",
    type: "Peak Energy Warning",
    severity: "warning",
    message: "Commercial HVAC afternoon cooling demand triggering peak grid fossil plant activation.",
    targetSlider: "energy",
    recommendedValue: 25,
    targetSection: "simulator"
  }
];
