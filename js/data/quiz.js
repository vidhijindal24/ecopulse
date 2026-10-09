// EcoPulse Educational Quiz Dataset
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary cause of Nitrogen Dioxide (NO2) spikes in urban environments during morning peak hours?",
    options: [
      "Natural emissions from urban trees and soil microorganisms",
      "Fossil fuel combustion in private motor vehicles and heavy diesel traffic",
      "Evaporation from municipal wastewater treatment plants",
      "Overuse of residential LED lighting systems"
    ],
    correctIndex: 1,
    explanation: "NO2 is primarily emitted through high-temperature fuel combustion in internal combustion vehicle engines during heavy traffic congestion."
  },
  {
    id: 2,
    question: "Why is source segregation of municipal waste (separating organic from dry recyclable waste) crucial for city sustainability?",
    options: [
      "It makes waste collection trucks travel faster",
      "Organic waste in landfills generates methane gas (CH4), whereas segregated organics can be composted into nutrient-rich soil or biogas",
      "It eliminates the need for municipal waste collectors entirely",
      "Recyclable plastics burn automatically when kept dry"
    ],
    correctIndex: 1,
    explanation: "When organic food waste is buried anaerobically in landfills, it releases methane (a potent greenhouse gas 28x more powerful than CO2). Segregation allows clean composting and biogas energy recovery."
  },
  {
    id: 3,
    question: "How does increasing urban canopy and green park coverage combat the 'Urban Heat Island' effect?",
    options: [
      "Trees reflect all sunlight back into outer space",
      "Plants cool surrounding air through evapotranspiration and provide direct shade over heat-absorbing asphalt and concrete",
      "Green leaves absorb noise pollution which lowers temperature",
      "Park grass generates cold wind currents automatically"
    ],
    correctIndex: 1,
    explanation: "Trees release water vapor through evapotranspiration while shading dark paved surfaces that would otherwise absorb solar heat and radiate it into the city."
  },
  {
    id: 4,
    question: "What is 'Non-Revenue Water' (NRW) in municipal water distribution systems?",
    options: [
      "Water provided free of charge to city fountains",
      "Treated potable water lost before reaching consumers due to pipe leaks, fractures, or unauthorized consumption",
      "Rainwater collected directly from rooftop gutters",
      "Water used exclusively for industrial cooling towers"
    ],
    correctIndex: 1,
    explanation: "Non-Revenue Water refers to clean, treated water that is produced and lost due to hidden pipe fractures and leaks before it reaches utility meters."
  },
  {
    id: 5,
    question: "What is the key benefit of combining rooftop solar PV with battery micro-grids in commercial city districts?",
    options: [
      "It reduces peak daytime power grid demand and provides clean emergency backup power during grid blackouts",
      "It eliminates the need for electrical wiring inside buildings",
      "It guarantees 100% cloudless weather year-round",
      "It replaces the need for municipal waste collection"
    ],
    correctIndex: 0,
    explanation: "Rooftop solar generates clean power right when cooling demand peaks in afternoon hours, taking load off fossil-fuel power plants and increasing city grid resilience."
  }
];

export const EDUCATIONAL_CARDS = [
  {
    icon: "bus",
    title: "Sustainable Urban Mobility",
    summary: "Prioritizing electrified public transit, active walking lanes, and micromobility cuts urban vehicle emissions by up to 45% while reducing traffic bottlenecks."
  },
  {
    icon: "recycle",
    title: "Circular Waste Streams",
    summary: "Diverting organic waste to anaerobic digesters yields clean biomethane gas for city buses and rich compost for urban agriculture."
  },
  {
    icon: "zap",
    title: "Smart Grid Efficiency",
    summary: "Demand-response algorithms automatically dim non-essential commercial lights and adjust HVAC thermostats during peak grid load periods."
  },
  {
    icon: "droplet",
    title: "Smart Water Networks",
    summary: "Acoustic sensors detect micro-leaks underground before pipe bursts occur, saving millions of liters of treated drinking water daily."
  },
  {
    icon: "trees",
    title: "Urban Biodiversity Belts",
    summary: "Continuous green corridors allow native bird and pollinator species to thrive while naturally filtering stormwater runoff and reducing urban ambient temperature."
  },
  {
    icon: "building-2",
    title: "Green Building Retrofits",
    summary: "Installing double-glazed low-emissivity glass, reflective roof coatings, and smart LED systems slashes commercial building energy use by up to 35%."
  }
];
