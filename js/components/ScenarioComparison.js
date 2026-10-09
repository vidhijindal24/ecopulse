// EcoPulse Scenario Comparison Modal Component with Visualizer
import { calculateSimulation } from '../utils/engine.js';

export function ScenarioComparison({ sliders, isOpen, onClose }) {
  if (!isOpen) return null;

  const sim = calculateSimulation(sliders);
  const [activeChartMetric, setActiveChartMetric] = React.useState('score');

  const comparisonRows = [
    {
      key: 'score',
      metric: "Sustainability Score Index",
      baseline: `${sim.baseline.score} / 100`,
      improved: `${sim.improved.score} / 100`,
      change: `+${sim.delta.scoreChange} pts`,
      positive: true
    },
    {
      key: 'co2',
      metric: "Citywide CO2 Emissions",
      baseline: `${sim.baseline.co2Emissions.toLocaleString()} t/yr`,
      improved: `${(sim.baseline.co2Emissions - sim.improved.co2Saved).toLocaleString()} t/yr`,
      change: `-${sim.improved.co2Saved.toLocaleString()} t/yr (-${sim.delta.co2Percent}%)`,
      positive: true
    },
    {
      key: 'waste',
      metric: "Daily Landfill Waste",
      baseline: `${sim.baseline.landfillWaste.toLocaleString()} t/day`,
      improved: `${(sim.baseline.landfillWaste - sim.improved.wasteDiverted).toLocaleString()} t/day`,
      change: `-${sim.improved.wasteDiverted.toLocaleString()} t/day (-${sim.delta.wastePercent}%)`,
      positive: true
    },
    {
      key: 'energy',
      metric: "Annual Electricity Demand",
      baseline: `${sim.baseline.energyDemand} GWh/yr`,
      improved: `${(sim.baseline.energyDemand - sim.improved.energySaved).toFixed(1)} GWh/yr`,
      change: `-${sim.improved.energySaved} GWh/yr (-${sim.delta.energyPercent}%)`,
      positive: true
    },
    {
      key: 'water',
      metric: "Annual Water Wastage",
      baseline: `${sim.baseline.waterWasted} ML/yr`,
      improved: `${(sim.baseline.waterWasted - sim.improved.waterSaved).toFixed(1)} ML/yr`,
      change: `-${sim.improved.waterSaved} ML/yr (-${sim.delta.waterPercent}%)`,
      positive: true
    },
    {
      key: 'green',
      metric: "Urban Canopy Green Cover",
      baseline: `${sim.baseline.greenCover}%`,
      improved: `${sim.improved.greenCover}%`,
      change: `+${sliders.green || 0}%`,
      positive: true
    }
  ];

  // Projection Curves Generator
  const generateProjectionCurve = () => {
    const points = [];
    const baselineVal = 54;
    const targetVal = sim.improved.score;
    for (let i = 0; i <= 6; i++) {
      const step = baselineVal + ((targetVal - baselineVal) * (i / 6));
      points.push(Math.round(step));
    }
    return points;
  };

  const curvePoints = generateProjectionCurve();

  return React.createElement('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn' },
    React.createElement('div', { className: 'glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/40 max-w-3xl w-full space-y-6 max-h-[90vh] overflow-y-auto glow-emerald' },
      
      // Modal Header
      React.createElement('div', { className: 'flex items-center justify-between border-b border-emerald-900/50 pb-4' },
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('div', { className: 'text-xs font-bold text-emerald-400 uppercase tracking-widest' }, 'SCENARIO ANALYSIS & PROJECTION'),
          React.createElement('h3', { className: 'text-2xl font-extrabold text-white tracking-tight' }, 'Baseline vs. Improved Scenario Comparison')
        ),
        React.createElement('button', {
          onClick: onClose,
          className: 'p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-emerald-900/40'
        }, '✕')
      ),

      // Comparison Table
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('div', { className: 'grid grid-cols-12 gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 px-3 border-b border-slate-800' },
          React.createElement('div', { className: 'col-span-4' }, 'Metric'),
          React.createElement('div', { className: 'col-span-3 text-center' }, 'Baseline State'),
          React.createElement('div', { className: 'col-span-3 text-center' }, 'Simulated Improved'),
          React.createElement('div', { className: 'col-span-2 text-right' }, 'Net Impact')
        ),

        comparisonRows.map((row, idx) =>
          React.createElement('div', { key: idx, className: 'grid grid-cols-12 gap-2 text-xs items-center p-3 rounded-xl bg-slate-950/80 border border-emerald-900/40 hover:border-emerald-500/30 font-mono transition-all' },
            React.createElement('div', { className: 'col-span-4 font-sans font-bold text-slate-200' }, row.metric),
            React.createElement('div', { className: 'col-span-3 text-center text-amber-400 font-semibold' }, row.baseline),
            React.createElement('div', { className: 'col-span-3 text-center text-emerald-300 font-bold' }, row.improved),
            React.createElement('div', { className: 'col-span-2 text-right text-emerald-400 font-black' }, row.change)
          )
        )
      ),

      // Interactive Projection Curve SVG Chart
      React.createElement('div', { className: 'p-5 rounded-2xl bg-slate-950 border border-emerald-900/50 space-y-3' },
        React.createElement('div', { className: 'flex items-center justify-between text-xs' },
          React.createElement('span', { className: 'font-bold text-white uppercase tracking-wider' }, 'Sustainability Index Projection Curve (6-Month Horizon)'),
          React.createElement('span', { className: 'text-emerald-400 font-mono font-bold' }, `Target: ${sim.improved.score} pts`)
        ),

        React.createElement('div', { className: 'h-32 w-full flex items-end justify-between px-2 pt-4 relative border-b border-emerald-900/40' },
          curvePoints.map((pt, i) =>
            React.createElement('div', { key: i, className: 'flex flex-col items-center space-y-1 flex-1' },
              React.createElement('span', { className: 'text-[10px] font-mono text-emerald-400 font-bold' }, pt),
              React.createElement('div', {
                className: 'w-4 bg-gradient-to-t from-emerald-950 to-emerald-400 rounded-t transition-all duration-500',
                style: { height: `${(pt / 100) * 80}px` }
              }),
              React.createElement('span', { className: 'text-[9px] text-slate-500 uppercase' }, `M${i}`)
            )
          )
        )
      ),

      React.createElement('div', { className: 'flex justify-end pt-2' },
        React.createElement('button', {
          onClick: onClose,
          className: 'px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs'
        }, 'Close Comparison')
      )
    )
  );
}
