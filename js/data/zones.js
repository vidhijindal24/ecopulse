// EcoPulse Interactive Urban Operations Map Zones Dataset
export const CITY_ZONES = [
  {
    id: "residential",
    name: "Green Valley Residential Sector",
    type: "Residential Zone",
    icon: "home",
    x: 22, // % X on SVG map canvas
    y: 32, // % Y on SVG map canvas
    metrics: {
      aqi: "58 Good",
      waste: "420 t/d",
      energy: "1.85 GWh/d",
      water: "145 L/c/d"
    },
    pattern: "Evening energy spikes (7:00 PM - 10:00 PM) driven by uncoordinated air conditioning and residential water heating.",
    problem: "Inefficient peak power consumption straining grid sub-stations and high organic waste mixed with recyclable plastics.",
    recommendation: "Deploy smart home energy management systems (HEMS), incentivize off-peak appliance usage, and introduce mandatory door-to-door wet/dry waste segregation.",
    badgeColor: "emerald"
  },
  {
    id: "commercial",
    name: "Metropolis Commercial Core",
    type: "Commercial District",
    icon: "building-2",
    x: 48,
    y: 28,
    metrics: {
      aqi: "84 Moderate",
      waste: "680 t/d",
      energy: "3.40 GWh/d",
      water: "210 ML/d"
    },
    pattern: "High daytime HVAC cooling loads and continuous delivery vehicle congestion along commercial avenues.",
    problem: "Substantial building heat island effect, high commercial paper/cardboard waste, and NO2 emissions from diesel delivery trucks.",
    recommendation: "Implement green rooftop gardens, retrofit commercial cooling towers with smart sensors, and restrict delivery trucks to off-peak night hours.",
    badgeColor: "amber"
  },
  {
    id: "industrial",
    name: "East Industrial Corridor",
    type: "Industrial Zone",
    icon: "factory",
    x: 78,
    y: 38,
    metrics: {
      aqi: "132 Unhealthy",
      waste: "1,150 t/d",
      energy: "6.20 GWh/d",
      water: "380 ML/d"
    },
    pattern: "Continuous manufacturing thermal emissions and heavy industrial wastewater discharge during production runs.",
    problem: "Elevated particulate pollution (PM10/PM2.5) and significant industrial water consumption with insufficient closed-loop recycling.",
    recommendation: "Enforce industrial electrostatic precipitator filtration, require mandatory on-site effluent water treatment, and integrate factory solar micro-grids.",
    badgeColor: "rose"
  },
  {
    id: "transit",
    name: "Central Express Mobility Hub",
    type: "Public Transport Hub",
    icon: "bus",
    x: 42,
    y: 58,
    metrics: {
      aqi: "92 Moderate",
      waste: "310 t/d",
      energy: "1.10 GWh/d",
      water: "85 ML/d"
    },
    pattern: "High commuter volume during morning and evening rush hours with frequent idling by private rideshare vehicles.",
    problem: "Localized micro-spikes in exhaust pollution and commuter littering around transit stop entrances.",
    recommendation: "Expand electric bus rapid transit (e-BRT) lanes, install smart EV charger hubs, and add automated smart recycling reverse-vending kiosks.",
    badgeColor: "sky"
  },
  {
    id: "park",
    name: "Eco-Canopy Wetland & Park",
    type: "Green Space & Biodiversity",
    icon: "trees",
    x: 20,
    y: 72,
    metrics: {
      aqi: "35 Optimal",
      waste: "45 t/d",
      energy: "0.20 GWh/d",
      water: "60 ML/d"
    },
    pattern: "Natural micro-climate cooling, carbon absorption, and urban stormwater runoff filtration.",
    problem: "Urban sprawl encroaching on park boundaries and insufficient stormwater capture integration with surrounding streets.",
    recommendation: "Establish protected urban wildlife corridors, expand permeable pavement surrounding the park, and construct rainwater detention basins.",
    badgeColor: "emerald"
  },
  {
    id: "waste_facility",
    name: "Circular Bio-Energy & Recycling Center",
    type: "Waste Collection Point",
    icon: "recycle",
    x: 75,
    y: 75,
    metrics: {
      aqi: "65 Moderate",
      waste: "2,200 t/d processed",
      energy: "1.40 GWh/d generated",
      water: "110 ML/d recycled"
    },
    pattern: "Centralized processing of urban waste streams into compost, biogas energy, and sorted raw materials.",
    problem: "Contamination of recyclable streams due to poor source segregation in residential and commercial sectors.",
    recommendation: "Install AI-guided automated optical sorting arms and expand anaerobic digestion units to convert organic food waste into clean biomethane gas.",
    badgeColor: "lime"
  }
];
