// EcoPulse Methodology & Project Explanation Component
export function MethodologySection() {
  const steps = [
    { num: '01', title: 'Observe', desc: 'Monitor urban environmental metrics across key city sectors.' },
    { num: '02', title: 'Analyze', desc: 'Identify repeated operational bottlenecks and root causes.' },
    { num: '03', title: 'Target', desc: 'Establish evidence-based targets for AQI, waste, energy & water.' },
    { num: '04', title: 'Simulate', desc: 'Adjust mathematical intervention sliders to estimate shifts.' },
    { num: '05', title: 'Compare', desc: 'Evaluate baseline state versus improved scenario side-by-side.' },
    { num: '06', title: 'Action', desc: 'Build a custom action plan of prioritized EcoAction recommendations.' }
  ];

  return React.createElement('section', { id: 'methodology', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/80' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16' },
      
      // Header
      React.createElement('div', { className: 'space-y-2' },
        React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
          React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
          React.createElement('span', null, 'SYSTEM ARCHITECTURE')
        ),
        React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
          'Methodology & ',
          React.createElement('span', { className: 'text-emerald-400' }, 'Project Framework')
        ),
        React.createElement('p', { className: 'text-slate-400 text-sm max-w-2xl' },
          'Understanding the cyclical data pipeline connecting empirical observation, mathematical simulation, and practical urban sustainability action.'
        )
      ),

      // Process Flow Diagram Cards
      React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4' },
        steps.map(s =>
          React.createElement('div', { key: s.num, className: 'glass-card p-5 rounded-2xl border border-emerald-800/40 space-y-2 relative group hover:border-emerald-500/50' },
            React.createElement('div', { className: 'text-2xl font-black text-emerald-400 font-mono' }, s.num),
            React.createElement('h3', { className: 'text-base font-bold text-white tracking-tight' }, s.title),
            React.createElement('p', { className: 'text-xs text-slate-400 leading-relaxed' }, s.desc)
          )
        )
      ),

      // Data Category Comparison Matrix Table
      React.createElement('div', { className: 'glass-panel p-8 rounded-3xl border border-emerald-800/40 space-y-6 glow-emerald' },
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('span', { className: 'text-xs font-bold text-emerald-400 uppercase tracking-widest' }, 'DATA CLASSIFICATION MATRIX'),
          React.createElement('h3', { className: 'text-xl font-extrabold text-white' }, 'Distinguishing Data Origins in EcoPulse')
        ),

        React.createElement('div', { className: 'overflow-x-auto' },
          React.createElement('table', { className: 'w-full text-left text-xs' },
            React.createElement('thead', null,
              React.createElement('tr', { className: 'border-b border-emerald-900/60 text-emerald-400 font-bold uppercase tracking-wider' },
                React.createElement('th', { className: 'py-3 px-4' }, 'Data Category'),
                React.createElement('th', { className: 'py-3 px-4' }, 'Definition'),
                React.createElement('th', { className: 'py-3 px-4' }, 'EcoPulse Implementation'),
                React.createElement('th', { className: 'py-3 px-4' }, 'Production Pipeline')
              )
            ),
            React.createElement('tbody', { className: 'divide-y divide-emerald-900/30 text-slate-300 font-medium' },
              React.createElement('tr', { className: 'hover:bg-emerald-950/20' },
                React.createElement('td', { className: 'py-4 px-4 font-bold text-white' }, 'Observed Data'),
                React.createElement('td', { className: 'py-4 px-4' }, 'Empirical readings collected from physical sensor networks.'),
                React.createElement('td', { className: 'py-4 px-4 text-emerald-300 font-mono' }, 'Simulated baseline dataset'),
                React.createElement('td', { className: 'py-4 px-4 text-slate-400' }, 'IoT Sensor Stream / Municipal API')
              ),
              React.createElement('tr', { className: 'hover:bg-emerald-950/20' },
                React.createElement('td', { className: 'py-4 px-4 font-bold text-white' }, 'Simulated Data'),
                React.createElement('td', { className: 'py-4 px-4' }, 'Illustrative baseline scenario models for testing.'),
                React.createElement('td', { className: 'py-4 px-4 text-emerald-300 font-mono' }, '5 Interactive Sliders'),
                React.createElement('td', { className: 'py-4 px-4 text-slate-400' }, 'Digital Twin Physics Models')
              ),
              React.createElement('tr', { className: 'hover:bg-emerald-950/20' },
                React.createElement('td', { className: 'py-4 px-4 font-bold text-white' }, 'Estimated Outcomes'),
                React.createElement('td', { className: 'py-4 px-4' }, 'Calculated resource shifts based on transparent formulas.'),
                React.createElement('td', { className: 'py-4 px-4 text-emerald-300 font-mono' }, 'Real-time Math Engine'),
                React.createElement('td', { className: 'py-4 px-4 text-slate-400' }, 'Machine Learning Predictive AI')
              )
            )
          )
        )
      ),

      // Project Disclaimer Card
      React.createElement('div', { className: 'p-6 rounded-2xl bg-slate-950 border border-emerald-900/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs' },
        React.createElement('div', { className: 'space-y-1' },
          React.createElement('div', { className: 'font-bold text-emerald-400 uppercase tracking-wider text-[11px]' }, 'Academic Demonstration Disclaimer'),
          React.createElement('p', { className: 'text-slate-300 leading-relaxed max-w-3xl' },
            'EcoPulse is an educational web application prototype created to demonstrate the core principles of observing urban operational patterns and applying data-driven sustainability interventions. It is not connected to live municipal sensors.'
          )
        ),
        React.createElement('div', { className: 'px-4 py-2 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-mono font-bold shrink-0' },
          'EcoPulse v1.0 Prototype'
        )
      )
    )
  );
}
