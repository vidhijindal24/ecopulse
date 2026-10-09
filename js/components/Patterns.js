// EcoPulse Environmental Pattern Analysis Component
import { PATTERNS } from '../data/patterns.js';

export function PatternAnalysis() {
  const [activePatternId, setActivePatternId] = React.useState('traffic_air');
  const [showAfterState, setShowAfterState] = React.useState({});

  const activePattern = PATTERNS.find(p => p.id === activePatternId) || PATTERNS[0];

  const toggleAfter = (id) => {
    setShowAfterState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return React.createElement('section', { id: 'patterns', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/40' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      
      // Header
      React.createElement('div', { className: 'space-y-2 mb-10' },
        React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
          React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
          React.createElement('span', null, 'PATTERN RECOGNITION')
        ),
        React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
          'From Observation to ',
          React.createElement('span', { className: 'text-emerald-400' }, 'Insight')
        ),
        React.createElement('p', { className: 'text-slate-400 text-sm max-w-2xl' },
          'Deconstruct repeated urban operational dynamics into underlying root causes, environmental impacts, and evidence-based interventions.'
        )
      ),

      // Pattern Navigation Tabs
      React.createElement('div', { className: 'flex flex-wrap gap-3 mb-8' },
        PATTERNS.map(pattern =>
          React.createElement('button', {
            key: pattern.id,
            onClick: () => setActivePatternId(pattern.id),
            className: `px-4 py-3 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 border ${
              activePatternId === pattern.id
                ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-950/50'
                : 'glass-panel text-slate-300 hover:text-white border-emerald-900/50 hover:bg-emerald-950/40'
            }`
          },
            React.createElement('span', { className: 'font-mono text-[11px] opacity-80' }, pattern.code),
            React.createElement('span', null, pattern.title.split('&')[0])
          )
        )
      ),

      // Detailed Active Pattern Card with Interactive Comparison
      React.createElement('div', { className: 'glass-panel p-8 rounded-3xl border border-emerald-800/40 space-y-8 animate-fadeIn glow-emerald' },
        
        // Header info
        React.createElement('div', { className: 'flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-emerald-900/50' },
          React.createElement('div', { className: 'space-y-1' },
            React.createElement('span', { className: 'px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/40' }, activePattern.category),
            React.createElement('h3', { className: 'text-2xl font-extrabold text-white tracking-tight pt-1' }, `${activePattern.code}: ${activePattern.title}`)
          ),

          // Interactive Before vs. After State Toggle
          React.createElement('button', {
            onClick: () => toggleAfter(activePattern.id),
            className: `px-5 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center space-x-2 ${
              showAfterState[activePattern.id]
                ? 'bg-emerald-400 text-slate-950 border-emerald-300'
                : 'bg-slate-900 text-emerald-400 border-emerald-500/40 hover:bg-emerald-950/50'
            }`
          },
            React.createElement('span', null, showAfterState[activePattern.id] ? 'Viewing Improved Scenario' : 'View Baseline vs Improved Shift'),
            React.createElement('svg', { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' })
            )
          )
        ),

        // 4 Analysis Columns Grid
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs' },
          
          // Column 1: Observation
          React.createElement('div', { className: 'p-5 rounded-2xl bg-slate-950/80 border border-emerald-900/40 space-y-2' },
            React.createElement('div', { className: 'text-emerald-400 font-extrabold uppercase tracking-wider text-[11px] flex items-center space-x-1.5' },
              React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
              React.createElement('span', null, '1. Observed Pattern')
            ),
            React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, activePattern.observation)
          ),

          // Column 2: Cause & Impact
          React.createElement('div', { className: 'p-5 rounded-2xl bg-slate-950/80 border border-emerald-900/40 space-y-2' },
            React.createElement('div', { className: 'text-amber-400 font-extrabold uppercase tracking-wider text-[11px] flex items-center space-x-1.5' },
              React.createElement('span', { className: 'w-2 h-2 rounded-full bg-amber-400' }),
              React.createElement('span', null, '2. Cause & Impact')
            ),
            React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, activePattern.cause),
            React.createElement('p', { className: 'text-slate-400 italic pt-1 border-t border-slate-900' }, activePattern.impact)
          ),

          // Column 3: Proposed Solution
          React.createElement('div', { className: 'p-5 rounded-2xl bg-slate-950/80 border border-emerald-900/40 space-y-2' },
            React.createElement('div', { className: 'text-sky-400 font-extrabold uppercase tracking-wider text-[11px] flex items-center space-x-1.5' },
              React.createElement('span', { className: 'w-2 h-2 rounded-full bg-sky-400' }),
              React.createElement('span', null, '3. Proposed Fix')
            ),
            React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, activePattern.improvement)
          ),

          // Column 4: Direction of Change
          React.createElement('div', { className: 'p-5 rounded-2xl bg-slate-950/80 border border-emerald-900/40 space-y-2' },
            React.createElement('div', { className: 'text-lime-400 font-extrabold uppercase tracking-wider text-[11px] flex items-center space-x-1.5' },
              React.createElement('span', { className: 'w-2 h-2 rounded-full bg-lime-400' }),
              React.createElement('span', null, '4. Expected Shift')
            ),
            React.createElement('p', { className: 'text-lime-300 font-bold leading-relaxed' }, activePattern.direction)
          )
        ),

        // Visual Metric Shift Card (Baseline vs Improved Data)
        React.createElement('div', { className: 'p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-4' },
          React.createElement('div', { className: 'flex items-center justify-between text-xs' },
            React.createElement('span', { className: 'font-bold text-white uppercase tracking-wider' }, 'Quantitative Metric Comparison'),
            React.createElement('span', { className: 'text-slate-400 font-mono' }, showAfterState[activePattern.id] ? 'Showing Improved Outcome' : 'Showing Baseline State')
          ),

          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono' },
            Object.entries(showAfterState[activePattern.id] ? activePattern.after : activePattern.before).map(([k, val]) =>
              React.createElement('div', { key: k, className: 'p-4 rounded-xl bg-slate-950 border border-emerald-900/50 space-y-1' },
                React.createElement('div', { className: 'text-xs text-slate-400 uppercase font-sans' }, k.replace(/([A-Z])/g, ' $1')),
                React.createElement('div', { className: `text-xl font-extrabold ${showAfterState[activePattern.id] ? 'text-emerald-400' : 'text-amber-400'}` }, val)
              )
            )
          )
        )
      )
    )
  );
}
