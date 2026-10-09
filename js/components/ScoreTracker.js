// EcoPulse Sustainability Score & Progress Tracker Component
import { calculateSimulation, checkMilestones } from '../utils/engine.js';

export function ScoreTracker({ sliders, planCount }) {
  const sim = calculateSimulation(sliders);
  const milestones = checkMilestones(sliders, planCount);

  return React.createElement('section', { id: 'score', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/80' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      
      // Header
      React.createElement('div', { className: 'space-y-2 mb-10' },
        React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
          React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
          React.createElement('span', null, 'QUANTITATIVE METRICS')
        ),
        React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
          'Measure Progress, ',
          React.createElement('span', { className: 'text-emerald-400' }, 'Not Just Problems')
        ),
        React.createElement('p', { className: 'text-slate-400 text-sm max-w-2xl' },
          'Track composite city sustainability index gains alongside dynamic milestone achievements as you tune intervention parameters.'
        )
      ),

      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start' },
        
        // Left Column: Radial Score Gauge & Breakdown
        React.createElement('div', { className: 'lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-800/40 space-y-6 glow-emerald' },
          
          // Radial Score Display
          React.createElement('div', { className: 'relative flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-emerald-900/50' },
            React.createElement('div', { className: 'relative w-44 h-44 flex items-center justify-center' },
              React.createElement('svg', { className: 'w-full h-full transform -rotate-90', viewBox: '0 0 100 100' },
                React.createElement('circle', { cx: '50', cy: '50', r: '40', fill: 'none', stroke: '#0E241B', strokeWidth: '10' }),
                React.createElement('circle', {
                  cx: '50',
                  cy: '50',
                  r: '40',
                  fill: 'none',
                  stroke: '#10B981',
                  strokeWidth: '10',
                  strokeDasharray: '251.2',
                  strokeDashoffset: (251.2 * (100 - sim.improved.score)) / 100,
                  strokeLinecap: 'round',
                  className: 'transition-all duration-700'
                })
              ),
              React.createElement('div', { className: 'absolute inset-0 flex flex-col items-center justify-center text-center' },
                React.createElement('span', { className: 'text-4xl font-black text-white font-mono tracking-tight' }, sim.improved.score),
                React.createElement('span', { className: 'text-[10px] uppercase font-bold text-emerald-400 tracking-wider' }, '/ 100 INDEX')
              )
            ),

            React.createElement('div', { className: 'mt-4 text-center space-y-1' },
              React.createElement('div', { className: 'text-xs text-slate-300 font-bold' }, `Baseline City Score: ${sim.baseline.score} / 100`),
              React.createElement('div', { className: 'text-xs text-emerald-400 font-extrabold font-mono' }, `+${sim.delta.scoreChange} points gained via simulation`)
            )
          ),

          // Contribution Breakdown Progress Bars
          React.createElement('div', { className: 'space-y-3 text-xs' },
            React.createElement('div', { className: 'font-bold text-white uppercase tracking-wider text-[11px]' }, 'Sector Score Contributions'),
            
            [
              { label: 'Transportation Mobility', val: sim.breakdown.transport, color: 'bg-emerald-500' },
              { label: 'Waste Stream Diversion', val: sim.breakdown.waste, color: 'bg-amber-500' },
              { label: 'Clean Energy & Savings', val: sim.breakdown.energy, color: 'bg-sky-500' },
              { label: 'Water Conservation', val: sim.breakdown.water, color: 'bg-indigo-500' },
              { label: 'Green Cover & Ecosystem', val: sim.breakdown.green, color: 'bg-lime-500' }
            ].map(b =>
              React.createElement('div', { key: b.label, className: 'space-y-1' },
                React.createElement('div', { className: 'flex justify-between text-slate-300 font-medium' },
                  React.createElement('span', null, b.label),
                  React.createElement('span', { className: 'font-mono text-emerald-400 font-bold' }, `${b.val}%`)
                ),
                React.createElement('div', { className: 'w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-emerald-900/60' },
                  React.createElement('div', { className: `${b.color} h-full rounded-full transition-all duration-300`, style: { width: `${b.val}%` } })
                )
              )
            )
          )
        ),

        // Right Column: Milestone Tracker List
        React.createElement('div', { className: 'lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-800/40 space-y-6 glow-lime' },
          React.createElement('div', { className: 'flex items-center justify-between pb-4 border-b border-emerald-900/50' },
            React.createElement('h3', { className: 'text-lg font-bold text-white tracking-tight' }, 'Simulation Milestone Progress'),
            React.createElement('span', { className: 'text-xs text-emerald-400 font-mono font-bold' },
              `${milestones.filter(m => m.achieved).length} of 4 Unlocked`
            )
          ),

          React.createElement('div', { className: 'space-y-4' },
            milestones.map((m) =>
              React.createElement('div', {
                key: m.id,
                className: `p-4 rounded-2xl border transition-all flex items-start space-x-4 ${
                  m.achieved
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-white shadow-md'
                    : 'bg-slate-950/40 border-emerald-900/30 text-slate-500 opacity-60'
                }`
              },
                React.createElement('div', { className: 'text-2xl p-2 rounded-xl bg-slate-900 border border-emerald-900/50 shrink-0' }, m.badge),
                React.createElement('div', { className: 'space-y-1 text-xs' },
                  React.createElement('div', { className: 'flex items-center space-x-2' },
                    React.createElement('h4', { className: 'font-extrabold text-sm text-white' }, m.title),
                    m.achieved && React.createElement('span', { className: 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-slate-950' }, 'UNLOCKED')
                  ),
                  React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, m.description)
                )
              )
            )
          ),

          React.createElement('div', { className: 'p-4 rounded-xl bg-slate-950 border border-emerald-900/40 text-xs text-slate-400 space-y-1' },
            React.createElement('div', { className: 'font-bold text-emerald-400' }, 'Educational Milestone Distinction:'),
            React.createElement('p', null, 'Milestones reflect active user progress within the EcoPulse interactive simulation engine.')
          )
        )
      )
    )
  );
}
