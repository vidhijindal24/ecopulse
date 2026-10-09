// EcoPulse Simulation Math Engine & Formula Definitions

export const BASELINE_SCENARIO = {
  score: 54,
  co2Emissions: 18450, // tonnes/year
  landfillWaste: 1420,  // tonnes/day
  energyDemand: 345,    // GWh/year
  waterWasted: 98,      // Million Liters/year
  aqiAvg: 88,
  greenCover: 18.5      // %
};

/**
 * Calculates simulated environmental impact metrics from 5 user slider inputs.
 * @param {Object} sliders
 * @param {number} sliders.vehicle - Vehicle trip reduction (0-50%)
 * @param {number} sliders.waste - Waste segregation rate (0-100%)
 * @param {number} sliders.energy - Electricity savings (0-40%)
 * @param {number} sliders.water - Water waste reduction (0-40%)
 * @param {number} sliders.green - Green cover increase (0-30%)
 */
export function calculateSimulation(sliders) {
  const v = Math.min(50, Math.max(0, sliders.vehicle || 0));
  const s = Math.min(100, Math.max(0, sliders.waste || 0));
  const e = Math.min(40, Math.max(0, sliders.energy || 0));
  const w = Math.min(40, Math.max(0, sliders.water || 0));
  const g = Math.min(30, Math.max(0, sliders.green || 0));

  // CO2 reduction (tonnes / year)
  const co2Saved = Math.round(v * 165 + e * 110 + g * 35);
  
  // Landfill waste diverted (tonnes / day)
  const wasteDiverted = Math.round(s * 11.5);
  
  // Electricity saved (GWh / year)
  const energySaved = parseFloat((e * 3.4 + v * 0.45).toFixed(1));
  
  // Water saved (Million Liters / year)
  const waterSaved = parseFloat((w * 1.85 + g * 0.4).toFixed(1));
  
  // Composite Sustainability Score (0-100)
  const scoreIncrease = (v * 0.32) + (s * 0.22) + (e * 0.24) + (w * 0.20) + (g * 0.35);
  const improvedScore = Math.min(100, Math.round(BASELINE_SCENARIO.score + scoreIncrease));
  
  // Improved AQI estimate
  const improvedAQI = Math.max(30, Math.round(BASELINE_SCENARIO.aqiAvg - (v * 0.7 + g * 0.3)));
  
  // Improved Green Cover estimate (%)
  const improvedGreenCover = parseFloat((BASELINE_SCENARIO.greenCover + g).toFixed(1));

  // Sector breakdown score contribution (%)
  const breakdown = {
    transport: Math.min(100, Math.round(v * 2.0)),
    waste: Math.min(100, Math.round(s * 1.0)),
    energy: Math.min(100, Math.round(e * 2.5)),
    water: Math.min(100, Math.round(w * 2.5)),
    green: Math.min(100, Math.round(g * 3.33))
  };

  return {
    baseline: BASELINE_SCENARIO,
    improved: {
      score: improvedScore,
      co2Saved,
      wasteDiverted,
      energySaved,
      waterSaved,
      aqiAvg: improvedAQI,
      greenCover: improvedGreenCover
    },
    delta: {
      scoreChange: improvedScore - BASELINE_SCENARIO.score,
      co2Percent: Math.round((co2Saved / BASELINE_SCENARIO.co2Emissions) * 100),
      wastePercent: Math.round((wasteDiverted / BASELINE_SCENARIO.landfillWaste) * 100),
      energyPercent: Math.round((energySaved / BASELINE_SCENARIO.energyDemand) * 100),
      waterPercent: Math.round((waterSaved / BASELINE_SCENARIO.waterWasted) * 100)
    },
    breakdown
  };
}

/**
 * Checks milestone achievements based on active slider inputs & plan size.
 */
export function checkMilestones(sliders, planItemsCount) {
  const activeCount = Object.values(sliders).filter(val => val > 0).length;
  const is10PercentResourceReduced = (sliders.vehicle >= 10 || sliders.waste >= 10 || sliders.energy >= 10 || sliders.water >= 10);
  const isBalancedPlan = activeCount >= 4 && planItemsCount >= 3;

  return [
    {
      id: "m1",
      title: "First Step Initiated",
      description: "Adjusted at least 1 environmental simulation parameter.",
      achieved: activeCount >= 1,
      badge: "🎯"
    },
    {
      id: "m2",
      title: "Triple Impact Strategy",
      description: "Simulated improvements across 3 or more operational sectors.",
      achieved: activeCount >= 3,
      badge: "⚡"
    },
    {
      id: "m3",
      title: "10%+ Resource Reduction",
      description: "Achieved over 10% illustrative savings in a major resource sector.",
      achieved: is10PercentResourceReduced,
      badge: "🌿"
    },
    {
      id: "m4",
      title: "Master Eco-Plan Built",
      description: "Active simulation in 4+ sectors with 3+ items added to your action plan.",
      achieved: isBalancedPlan,
      badge: "🏆"
    }
  ];
}
