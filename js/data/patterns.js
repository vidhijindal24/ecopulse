// EcoPulse Environmental Pattern Analysis Dataset
export const PATTERNS = [
  {
    id: "traffic_air",
    code: "Pattern A",
    title: "Traffic Congestion & PM2.5 / NO2 Spikes",
    category: "Mobility & Air Quality",
    icon: "car",
    observation: "Air Quality Index (AQI) spikes during peak morning (8–10 AM) and evening (5–7 PM) commute windows along main urban arterial roads.",
    cause: "High reliance on private fossil-fuel combustion vehicles, stop-and-go traffic jams, and insufficient dedicated public transit lanes.",
    impact: "Elevated particulate pollution ($PM_{2.5}$) and Nitrogen Dioxide ($NO_2$), worsening respiratory health and increasing urban heat retention.",
    improvement: "Expand Electric Bus Rapid Transit (e-BRT), construct protected bike networks, and implement smart adaptive traffic signals.",
    direction: "Decrease in AQI pollution levels (-25% to -40%)",
    before: { aqi: 115, status: "Unhealthy for Sensitive Groups", emissions: "4,850 t/day" },
    after: { aqi: 62, status: "Moderate / Good", emissions: "2,910 t/day" }
  },
  {
    id: "waste_segregation",
    code: "Pattern B",
    title: "Unsegregated Municipal Waste Stream",
    category: "Circular Economy",
    icon: "trash-2",
    observation: "Over 65% of municipal solid waste sent to landfills consists of compostable organic matter and recoverable recyclable plastics.",
    cause: "Lack of dual-stream collection infrastructure at household level and inadequate public awareness regarding source segregation.",
    impact: "Rapid landfill saturation, anaerobic methane gas emissions ($CH_4$), leachate soil contamination, and lost economic value.",
    improvement: "Mandate source segregation (organic vs dry recyclable), launch community composting hubs, and deploy smart bin fill sensors.",
    direction: "Increase in landfill waste diversion (+50% to +80%)",
    before: { diversion: "18%", methane: "14,200 m³/day", landfillLife: "4.2 Years remaining" },
    after: { diversion: "72%", methane: "4,100 m³/day", landfillLife: "18.5 Years remaining" }
  },
  {
    id: "energy_peak",
    code: "Pattern C",
    title: "Peak Hour Energy Demand Spikes",
    category: "Energy Management",
    icon: "zap",
    observation: "Commercial and residential electricity demand peaks concurrently from 2:00 PM to 6:00 PM on hot summer afternoons.",
    cause: "Inefficient commercial HVAC chiller systems, lack of automated building insulation, and peak cooling demand.",
    impact: "Grid instability requiring activation of dirty fossil-fuel peaking power plants, raising carbon emissions per kWh.",
    improvement: "Install smart microgrid rooftop solar, promote thermal energy storage, retrofitting commercial LEDs, and smart thermostat scheduling.",
    direction: "Reduction in peak grid demand (-20% to -35%)",
    before: { peakDemand: "4.82 GW", carbonIntensity: "680 g CO2/kWh", cost: "\$0.24 / kWh" },
    after: { peakDemand: "3.28 GW", carbonIntensity: "410 g CO2/kWh", cost: "\$0.15 / kWh" }
  },
  {
    id: "water_loss",
    code: "Pattern D",
    title: "Municipal Water Network Leakage & Overuse",
    category: "Resource Conservation",
    icon: "droplet",
    observation: "Up to 32% of treated potable water is lost as Non-Revenue Water (NRW) before reaching end consumers, alongside excessive landscape irrigation.",
    cause: "Aging underground pipe infrastructure, undetected underground line fractures, and inefficient overhead spray irrigation in public parks.",
    impact: "Depletion of local groundwater aquifers, excessive electricity wasted pumping lost water, and water scarcity during dry seasons.",
    improvement: "Deploy acoustic smart leak detection sensors, replace aging main pipes, and switch public parks to smart drip irrigation using recycled greywater.",
    direction: "Decrease in municipal water loss (-50% to -75%)",
    before: { nrwLoss: "32%", dailyWasted: "128 ML/day", aquiferDepletion: "High" },
    after: { nrwLoss: "8%", dailyWasted: "32 ML/day", aquiferDepletion: "Stable" }
  }
];
