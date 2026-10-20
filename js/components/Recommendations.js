// EcoPulse EcoAction Recommendation Engine & Exporter Component
import { RECOMMENDATIONS } from '../data/recommendations.js';

export function RecommendationEngine({ plan, onAddToPlan, onRemoveFromPlan, onOpenPlanDrawer }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Transport', 'Waste', 'Energy', 'Water', 'Green Space'];

  const filteredRecs = selectedCategory === 'All'
    ? RECOMMENDATIONS
    : RECOMMENDATIONS.filter(r => r.category === selectedCategory);

  const isItemInPlan = (id) => plan.some(item => item.id === id);

  return React.createElement('section', { id: 'recommendations', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/40' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      
      // Header
      React.createElement('div', { className: 'flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6' },
        React.createElement('div', { className: 'space-y-2' },
          React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
            React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
            React.createElement('span', null, 'ACTIONABLE STRATEGIES')
          ),
          React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
            'EcoAction ',
            React.createElement('span', { className: 'text-emerald-400' }, 'Recommendation Engine')
          ),
          React.createElement('p', { className: 'text-slate-400 text-sm max-w-xl' },
            'Convert observed environmental bottlenecks and simulation outputs into prioritized, high-impact city improvement projects.'
          )
        ),

        // Action Plan Drawer Trigger Button
        React.createElement('button', {
          onClick: onOpenPlanDrawer,
          className: 'px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center space-x-2.5 shadow-lg shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5'
        },
          React.createElement('svg', { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' })
          ),
          React.createElement('span', null, `Active Improvement Plan (${plan.length})`)
        )
      ),

      // Category Filter Bar
      React.createElement('div', { className: 'flex flex-wrap gap-2 mb-8' },
        categories.map(cat =>
          React.createElement('button', {
            key: cat,
            onClick: () => setSelectedCategory(cat),
            className: `px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'glass-panel text-slate-300 hover:text-white border-emerald-900/40 hover:bg-emerald-950/40'
            }`
          }, cat)
        )
      ),

      // Recommendations Cards Grid
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
        filteredRecs.map((rec) => {
          const added = isItemInPlan(rec.id);
          return React.createElement('div', { key: rec.id, className: 'glass-card p-6 rounded-3xl border border-emerald-800/40 flex flex-col justify-between space-y-5 relative overflow-hidden group' },
            
            // Card Header
            React.createElement('div', { className: 'space-y-2' },
              React.createElement('div', { className: 'flex items-center justify-between' },
                React.createElement('span', { className: 'px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-950 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider' }, rec.tag),
                React.createElement('div', { className: 'flex items-center space-x-1.5' },
                  React.createElement('span', { className: `px-2 py-0.5 rounded text-[10px] font-mono font-bold ${rec.priority === 'P1' ? 'bg-rose-950 text-rose-400 border border-rose-800/40' : 'bg-amber-950 text-amber-400 border border-amber-800/40'}` }, rec.priority),
                  React.createElement('span', { className: 'px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-medium' }, `Effort: ${rec.effort}`)
                )
              ),
              React.createElement('h3', { className: 'text-lg font-bold text-white tracking-tight pt-1' }, rec.title)
            ),

            // Card Body (Issue + Action + Benefit)
            React.createElement('div', { className: 'space-y-3 text-xs' },
              React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950/80 border border-emerald-900/40 space-y-1' },
                React.createElement('div', { className: 'font-bold text-rose-400 text-[10px] uppercase tracking-wider' }, 'Identified Issue'),
                React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, rec.issue)
              ),
              React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950/80 border border-emerald-900/40 space-y-1' },
                React.createElement('div', { className: 'font-bold text-emerald-400 text-[10px] uppercase tracking-wider' }, 'Recommended Action'),
                React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, rec.action)
              ),
              React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950/80 border border-emerald-900/40 space-y-1' },
                React.createElement('div', { className: 'font-bold text-sky-400 text-[10px] uppercase tracking-wider' }, 'Expected Benefit'),
                React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, rec.benefit)
              )
            ),

            // Card Footer Button
            React.createElement('button', {
              onClick: () => added ? onRemoveFromPlan(rec.id) : onAddToPlan(rec),
              className: `w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
                added
                  ? 'bg-slate-900 text-emerald-400 border border-emerald-500/40 hover:bg-slate-800'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md'
              }`
            },
              React.createElement('span', null, added ? '✓ Added to Plan' : '+ Add to Improvement Plan')
            )
          );
        })
      )
    )
  );
}

// User Improvement Plan Drawer Modal Component with Export & MongoDB Sync Capabilities
export function ImprovementPlanDrawer({ isOpen, onClose, plan, onRemoveItem, onClearAll, onSyncCloud }) {
  if (!isOpen) return null;

  // Export Plan to Downloadable JSON File
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      title: "EcoPulse Urban Sustainability Action Plan",
      generatedAt: new Date().toISOString(),
      itemCount: plan.length,
      planItems: plan
    }, null, 2));

    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "ecopulse-action-plan.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return React.createElement('div', { className: 'fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fadeIn' },
    React.createElement('div', { className: 'glass-panel w-full max-w-lg h-full p-6 sm:p-8 border-l border-emerald-500/40 flex flex-col justify-between overflow-y-auto space-y-6 glow-emerald' },
      
      // Header
      React.createElement('div', { className: 'space-y-4 border-b border-emerald-900/50 pb-4' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('div', { className: 'flex items-center space-x-2' },
            React.createElement('div', { className: 'w-3 h-3 rounded-full bg-emerald-400 animate-pulse' }),
            React.createElement('h3', { className: 'text-xl font-extrabold text-white tracking-tight' }, 'Personalized Action Plan')
          ),
          React.createElement('button', {
            onClick: onClose,
            className: 'p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-emerald-900/40'
          }, '✕')
        ),
        React.createElement('p', { className: 'text-xs text-slate-400' },
          'Selected sustainability intervention projects synced with MongoDB Atlas & local browser state.'
        )
      ),

      // Item List or Empty State
      React.createElement('div', { className: 'flex-1 space-y-3 overflow-y-auto pr-1' },
        plan.length === 0
          ? React.createElement('div', { className: 'h-64 flex flex-col items-center justify-center text-center space-y-3 p-6 rounded-2xl bg-slate-950/60 border border-dashed border-emerald-900/50' },
              React.createElement('div', { className: 'w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 text-xl' }, '📋'),
              React.createElement('div', { className: 'font-bold text-white text-sm' }, 'Your Improvement Plan is Empty'),
              React.createElement('p', { className: 'text-xs text-slate-400 max-w-xs' }, 'Click "+ Add to Improvement Plan" on any recommendation card to build your custom city action roadmap.')
            )
          : plan.map((item) =>
              React.createElement('div', { key: item.id, className: 'p-4 rounded-2xl bg-slate-950 border border-emerald-900/50 flex items-start justify-between space-x-3 text-xs' },
                React.createElement('div', { className: 'space-y-1' },
                  React.createElement('span', { className: 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/30' }, item.category),
                  React.createElement('h4', { className: 'font-bold text-white pt-0.5' }, item.title),
                  React.createElement('p', { className: 'text-slate-400 leading-relaxed text-[11px]' }, item.action)
                ),
                React.createElement('button', {
                  onClick: () => onRemoveItem(item.id),
                  className: 'p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-950/50 transition-all shrink-0'
                }, '✕')
              )
            )
      ),

      // Footer Bar with Export & Sync Buttons
      plan.length > 0 && React.createElement('div', { className: 'pt-4 border-t border-emerald-900/50 flex flex-col space-y-2.5' },
        React.createElement('div', { className: 'grid grid-cols-2 gap-2' },
          React.createElement('button', {
            onClick: handleExportJSON,
            className: 'py-2.5 rounded-xl bg-slate-900 border border-emerald-900/60 hover:border-emerald-500/50 text-slate-200 font-bold text-xs flex items-center justify-center space-x-1.5 shadow'
          },
            React.createElement('span', null, '📥 Export JSON')
          ),
          React.createElement('button', {
            onClick: onSyncCloud,
            className: 'py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md'
          },
            React.createElement('span', null, '☁️ Sync to Atlas')
          )
        ),
        React.createElement('div', { className: 'flex items-center justify-between text-xs pt-1' },
          React.createElement('button', {
            onClick: onClearAll,
            className: 'text-rose-400 hover:underline font-semibold'
          }, 'Clear All Items'),
          React.createElement('button', {
            onClick: onClose,
            className: 'px-4 py-1.5 rounded-lg bg-slate-900 text-slate-300 font-semibold'
          }, 'Close')
        )
      )
    )
  );
}
