// EcoPulse EcoAction Recommendation Engine Catalog
export const RECOMMENDATIONS = [
  {
    id: "rec_1",
    category: "Transport",
    title: "Dedicated Electric Bus Rapid Transit (e-BRT) Lanes",
    issue: "High private vehicle reliance causing morning NO2/PM2.5 pollution spikes and transit delay.",
    action: "Convert outer road lanes into dedicated e-BRT bus corridors with priority traffic signals.",
    benefit: "Reduces commuting vehicle trips by 25% and lowers transportation greenhouse gas emissions.",
    effort: "Medium",
    priority: "P1",
    tag: "Mobility"
  },
  {
    id: "rec_2",
    category: "Waste",
    title: "Mandatory Dual-Stream Source Segregation & Community Composting",
    issue: "65% of municipal solid waste sent to landfills consists of unsegregated organic material.",
    action: "Distribute dual color-coded bins (Green Organic / Blue Recyclable) to households and commercial stores.",
    benefit: "Diverts up to 600 tonnes/day of organic waste from landfills into bio-fertilizer.",
    effort: "Low",
    priority: "P1",
    tag: "Circular Economy"
  },
  {
    id: "rec_3",
    category: "Energy",
    title: "Commercial Rooftop Solar & Smart LED Retrofits",
    issue: "Commercial cooling and lighting peak demand strains city grid between 2 PM and 6 PM.",
    action: "Mandate rooftop solar PV arrays on commercial buildings over 1,000 sq.m and replace fluorescent fixtures with LEDs.",
    benefit: "Saves up to 1.2 GWh/day of electricity and reduces peak electricity costs.",
    effort: "Medium",
    priority: "P2",
    tag: "Clean Power"
  },
  {
    id: "rec_4",
    category: "Water",
    title: "Acoustic IoT Leak Detection & District Metering",
    issue: "32% of treated potable water lost underground due to pipe fractures and line leaks.",
    action: "Install acoustic IoT pipe sensors and district metered area (DMA) pressure regulators across city zones.",
    benefit: "Recovers up to 45 Million Liters/day of clean treated water and reduces pumping electricity.",
    effort: "Medium",
    priority: "P1",
    tag: "Water Security"
  },
  {
    id: "rec_5",
    category: "Green Space",
    title: "Urban Canopy Preservation & Permeable Paving",
    issue: "Concrete urban heat island effect raising localized temperatures by 3.5°C.",
    action: "Plant 20,000 native shade trees along avenues and replace solid concrete sidewalks with permeable pavers.",
    benefit: "Lowers ambient temperature by 1.8°C and filters stormwater runoff directly into aquifers.",
    effort: "High",
    priority: "P2",
    tag: "Biodiversity"
  },
  {
    id: "rec_6",
    category: "Energy",
    title: "Demand-Response Smart Thermostats in Corporate Towers",
    issue: "Over-cooling of unoccupied office space during peak summer afternoons.",
    action: "Deploy automated smart thermostats linked to utility demand-response signals.",
    benefit: "Cuts commercial cooling energy use by 18% during peak price windows.",
    effort: "Low",
    priority: "P3",
    tag: "Smart Grid"
  }
];
