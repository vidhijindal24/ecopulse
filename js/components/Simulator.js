// EcoPulse Interactive Sustainability Improvement Simulator Component
import { calculateSimulation } from '../utils/engine.js';

export function SustainabilitySimulator({ sliders, onSliderChange, onApplyPreset, onReset, onOpenCompareModal }) {
  const sim = calculateSimulation(sliders);
  const [showFormulaModal, setShowFormulaModal] = React.useState(false);

  const sliderControls = [
    {
      key: 'vehicle',
      label: 'Reduce Private Vehicle Trips',
      min: 0,
      max: 50,
      step: 1,
      unit: '%',
      icon: 'car',
      color: 'accent-emerald-500',
      description: 'Shifts commuters to electric bus rapid transit, walking, and bike lanes.'
    },
    {
      key: 'waste',
      label: 'Improve Source Waste Segregation',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      icon: 'trash-2',
      color: 'accent-amber-500',
      description: 'Separates organic food waste from dry recyclables at household level.'
    },
    {
      key: 'energy',
      label: 'Reduce Unnecessary Electricity Use',
      min: 0,
      max: 40,
      step: 1,
      unit: '%',
      icon: 'zap',
      color: 'accent-sky-500',
      description: 'Installs LED retrofits, commercial solar arrays, and smart thermostats.'
    },
    {
      key: 'water',
      label: 'Reduce Municipal Water Wastage',
      min: 0,
      max: 40,
      step: 1,
      unit: '%',
      icon: 'droplet',
      color: 'accent-indigo-500',
      description: 'Fixes underground line leaks and installs low-flow water fixtures.'
    },
    {
      key: 'green',
      label: 'Increase Urban Green Coverage',
      min: 0,
      max: 30,
      step: 1,
      unit: '%',
      icon: 'trees',
      color: 'accent-lime-500',
      description: 'Plants native canopy shade trees and establishes rooftop garden belts.'
    }
  ];

  return React.createElement('section', { id: 'simulator', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/80' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      
      // Section Title
      React.createElement('div', { className: 'flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6' },
        React.createElement('div', { className: 'space-y-2' },
          React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
            React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
            React.createElement('span', null, 'DATA-DRIVEN EXPERIMENTATION')
          ),
          React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
            'What If We ',
            React.createElement('span', { className: 'text-emerald-400' }, 'Changed One Thing?')
          ),
          React.createElement('p', { className: 'text-slate-400 text-sm max-w-xl' },
            'Adjust slider controls below to test urban sustainability interventions and calculate real-time estimated resource savings.'
          )
        ),

        // Action Buttons Bar
        React.createElement('div', { className: 'flex flex-wrap items-center gap-3' },
          React.createElement('button', {
            onClick: onApplyPreset,
            className: 'px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5'
          }, 'Apply Recommended Improvements'),
          React.createElement('button', {
            onClick: onReset,
            className: 'px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-emerald-900/60 font-semibold text-xs transition-all'
          }, 'Reset Simulation'),
          React.createElement('button', {
            onClick: onOpenCompareModal,
            className: 'px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 font-bold text-xs transition-all'
          }, 'Compare Scenarios')
        )
      ),

      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start' },
        
        // Left Column: 5 Interactive Sliders
        React.createElement('div', { className: 'lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-800/40 space-y-6 glow-emerald' },
          React.createElement('div', { className: 'flex items-center justify-between pb-4 border-b border-emerald-900/50' },
            React.createElement('h3', { className: 'text-lg font-bold text-white tracking-tight' }, 'Intervention Controls'),
            React.createElement('button', {
              onClick: () => setShowFormulaModal(true),
              className: 'text-xs text-emerald-400 hover:underline font-semibold flex items-center space-x-1'
            },
              React.createElement('span', null, 'Transparent Math Formulas'),
              React.createElement('svg', { className: 'w-3.5 h-3.5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
              )
            )
          ),

          sliderControls.map((ctl) =>
            React.createElement('div', { key: ctl.key, className: 'space-y-2 p-4 rounded-2xl bg-slate-950/70 border border-emerald-900/40' },
              React.createElement('div', { className: 'flex items-center justify-between' },
                React.createElement('label', { className: 'text-xs font-bold text-white flex items-center space-x-2' },
                  React.createElement('span', { className: 'text-emerald-400 font-mono text-sm' }, `+${sliders[ctl.key] || 0}${ctl.unit}`),
                  React.createElement('span', null, ctl.label)
                ),
                React.createElement('span', { className: 'text-xs text-slate-400 font-mono' }, `Range: ${ctl.min}-${ctl.max}${ctl.unit}`)
              ),
              React.createElement('input', {
                type: 'range',
                min: ctl.min,
                max: ctl.max,
                step: ctl.step,
                value: sliders[ctl.key] || 0,
                onChange: (e) => onSliderChange(ctl.key, Number(e.target.value)),
                className: `w-full cursor-pointer ${ctl.color}`
              }),
              React.createElement('p', { className: 'text-[11px] text-slate-400 leading-snug' }, ctl.description)
            )
          )
        ),

        // Right Column: Live Output Metrics & Score Card
        React.createElement('div', { className: 'lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-800/40 space-y-6 glow-lime animate-fadeIn' },
          
          // Composite Score Gauge Header
          React.createElement('div', { className: 'p-6 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-950 border border-emerald-500/40 text-center space-y-2 relative overflow-hidden' },
            React.createElement('div', { className: 'text-xs font-bold text-emerald-400 uppercase tracking-widest' }, 'Simulated Sustainability Index'),
            
            React.createElement('div', { className: 'flex items-center justify-center space-x-3 my-2' },
              React.createElement('div', { className: 'text-5xl font-black text-white font-mono tracking-tight' }, sim.improved.score),
              React.createElement('div', { className: 'text-left' },
                React.createElement('div', { className: 'text-xs text-emerald-400 font-bold' }, `+${sim.delta.scoreChange} pts`),
                React.createElement('div', { className: 'text-[10px] text-slate-400' }, `Baseline: ${sim.baseline.score}/100`)
              )
            ),

            // Progress Bar
            React.createElement('div', { className: 'w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-emerald-900/60' },
              React.createElement('div', {
                className: 'bg-gradient-to-r from-emerald-500 to-lime-400 h-full rounded-full transition-all duration-300',
                style: { width: `${sim.improved.score}%` }
              })
            )
          ),

          // 4 Output Metrics List
          React.createElement('div', { className: 'space-y-3 text-xs' },
            
            // Output 1: CO2 Emissions Reduced
            React.createElement('div', { className: 'p-4 rounded-xl bg-slate-950 border border-emerald-900/50 flex items-center justify-between' },
              React.createElement('div', null,
                React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Estimated CO2 Emissions Avoided'),
                React.createElement('div', { className: 'text-lg font-extrabold text-emerald-300 font-mono' }, `${sim.improved.co2Saved.toLocaleString()} tonnes/yr`)
              ),
              React.createElement('span', { className: 'px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-bold font-mono' },
                `-${sim.delta.co2Percent}%`
              )
            ),

            // Output 2: Landfill Waste Diverted
            React.createElement('div', { className: 'p-4 rounded-xl bg-slate-950 border border-amber-900/40 flex items-center justify-between' },
              React.createElement('div', null,
                React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Landfill Waste Diverted'),
                React.createElement('div', { className: 'text-lg font-extrabold text-amber-300 font-mono' }, `${sim.improved.wasteDiverted.toLocaleString()} tonnes/day`)
              ),
              React.createElement('span', { className: 'px-2.5 py-1 rounded-full bg-amber-950 border border-amber-500/30 text-amber-400 font-bold font-mono' },
                `-${sim.delta.wastePercent}%`
              )
            ),

            // Output 3: Electricity Saved
            React.createElement('div', { className: 'p-4 rounded-xl bg-slate-950 border border-sky-900/40 flex items-center justify-between' },
              React.createElement('div', null,
                React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Electricity Conserved'),
                React.createElement('div', { className: 'text-lg font-extrabold text-sky-300 font-mono' }, `${sim.improved.energySaved} GWh/yr`)
              ),
              React.createElement('span', { className: 'px-2.5 py-1 rounded-full bg-sky-950 border border-sky-500/30 text-sky-400 font-bold font-mono' },
                `-${sim.delta.energyPercent}%`
              )
            ),

            // Output 4: Water Saved
            React.createElement('div', { className: 'p-4 rounded-xl bg-slate-950 border border-indigo-900/40 flex items-center justify-between' },
              React.createElement('div', null,
                React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Potable Water Conserved'),
                React.createElement('div', { className: 'text-lg font-extrabold text-indigo-300 font-mono' }, `${sim.improved.waterSaved} ML/yr`)
              ),
              React.createElement('span', { className: 'px-2.5 py-1 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-400 font-bold font-mono' },
                `-${sim.delta.waterPercent}%`
              )
            )
          ),

          // Scientific Formula Disclaimer Notice
          React.createElement('div', { className: 'p-3 rounded-xl bg-slate-900/80 border border-emerald-900/40 text-[11px] text-slate-400 space-y-1' },
            React.createElement('div', { className: 'font-bold text-slate-300' }, 'Formula Assumption Note:'),
            React.createElement('p', null, 'Educational estimates based on transparent mathematical scaling formulas. Results illustrate comparative scenario trends rather than empirical municipal forecasts.')
          )
        )
      )
    ),

    // Math Formula Modal Popup
    showFormulaModal && React.createElement('div', { className: 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn' },
      React.createElement('div', { className: 'glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/40 max-w-lg w-full space-y-6 glow-emerald' },
        React.createElement('div', { className: 'flex items-center justify-between border-b border-emerald-900/50 pb-4' },
          React.createElement('h3', { className: 'text-xl font-extrabold text-white tracking-tight' }, 'Transparent Calculation Formulas'),
          React.createElement('button', {
            onClick: () => setShowFormulaModal(false),
            className: 'p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white'
          }, '✕')
        ),

        React.createElement('div', { className: 'space-y-3 text-xs text-slate-300 font-mono leading-relaxed' },
          React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950 border border-emerald-900/50' },
            React.createElement('div', { className: 'font-bold text-emerald-400 font-sans' }, 'Sustainability Score Formula:'),
            React.createElement('p', null, 'Score = 54 + (Vehicles% × 0.32) + (Waste% × 0.22) + (Energy% × 0.24) + (Water% × 0.20) + (Green% × 0.35)')
          ),
          React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950 border border-emerald-900/50' },
            React.createElement('div', { className: 'font-bold text-emerald-400 font-sans' }, 'CO2 Saved (tonnes/yr):'),
            React.createElement('p', null, 'CO2 = (Vehicles% × 165) + (Energy% × 110) + (Green% × 35)')
          ),
          React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950 border border-emerald-900/50' },
            React.createElement('div', { className: 'font-bold text-emerald-400 font-sans' }, 'Landfill Diverted (tonnes/day):'),
            React.createElement('p', null, 'Waste = WasteSegregation% × 11.5')
          )
        ),

        React.createElement('button', {
          onClick: () => setShowFormulaModal(false),
          className: 'w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs'
        }, 'Close Window')
      )
    )
  );
}
