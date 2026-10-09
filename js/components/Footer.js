// EcoPulse Footer Component
export function Footer({ planCount, onResetStorage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return React.createElement('footer', { className: 'border-t border-emerald-900/40 bg-slate-950 py-12 relative z-10' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8' },
      
      React.createElement('div', { className: 'flex flex-col md:flex-row md:items-center justify-between gap-6' },
        
        // Brand Info
        React.createElement('div', { className: 'space-y-2' },
          React.createElement('div', { className: 'flex items-center space-x-2' },
            React.createElement('div', { className: 'w-3 h-3 rounded-full bg-emerald-400 animate-pulse' }),
            React.createElement('span', { className: 'text-xl font-extrabold text-white tracking-tight' }, 'EcoPulse'),
            React.createElement('span', { className: 'text-xs text-emerald-400 font-mono' }, 'v1.0')
          ),
          React.createElement('p', { className: 'text-xs text-slate-400 max-w-sm' },
            'Observe. Understand. Improve. Demonstrating data-driven urban sustainability systems.'
          )
        ),

        // Quick Links
        React.createElement('div', { className: 'flex flex-wrap gap-4 text-xs font-medium text-slate-300' },
          React.createElement('a', { href: '#dashboard', className: 'hover:text-emerald-400 transition-colors' }, 'Dashboard'),
          React.createElement('a', { href: '#map', className: 'hover:text-emerald-400 transition-colors' }, 'Urban Map'),
          React.createElement('a', { href: '#patterns', className: 'hover:text-emerald-400 transition-colors' }, 'Patterns'),
          React.createElement('a', { href: '#simulator', className: 'hover:text-emerald-400 transition-colors' }, 'Simulator'),
          React.createElement('a', { href: '#recommendations', className: 'hover:text-emerald-400 transition-colors' }, 'Recommendations'),
          React.createElement('a', { href: '#score', className: 'hover:text-emerald-400 transition-colors' }, 'Score'),
          React.createElement('a', { href: '#learn', className: 'hover:text-emerald-400 transition-colors' }, 'Learn & Quiz'),
          React.createElement('a', { href: '#methodology', className: 'hover:text-emerald-400 transition-colors' }, 'Methodology')
        ),

        // Back to Top Button
        React.createElement('button', {
          onClick: scrollToTop,
          className: 'px-4 py-2.5 rounded-xl bg-slate-900 border border-emerald-900/60 text-slate-300 hover:text-white hover:border-emerald-500/40 text-xs font-bold transition-all flex items-center space-x-2 self-start md:self-auto'
        },
          React.createElement('span', null, 'Back to Top'),
          React.createElement('svg', { className: 'w-4 h-4 text-emerald-400', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M5 10l7-7m0 0l7 7m-7-7v18' })
          )
        )
      ),

      React.createElement('div', { className: 'pt-6 border-t border-emerald-900/30 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4' },
        React.createElement('div', null,
          `© ${new Date().getFullYear()} EcoPulse — Smart Urban Sustainability & Improvement System. All rights reserved.`
        ),

        React.createElement('div', { className: 'flex items-center space-x-4' },
          React.createElement('span', { className: 'text-slate-400 font-mono' },
            `Local Storage: ${planCount} item(s) saved`
          ),
          React.createElement('button', {
            onClick: onResetStorage,
            className: 'text-rose-400 hover:underline font-semibold'
          }, 'Reset App State')
        )
      )
    )
  );
}
