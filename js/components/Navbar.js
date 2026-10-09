// EcoPulse Navbar Component with Theme Switcher
export function Navbar({ planCount, onOpenPlanDrawer, activeSection, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Urban Map", href: "#map" },
    { label: "Patterns", href: "#patterns" },
    { label: "Simulator", href: "#simulator" },
    { label: "Recommendations", href: "#recommendations" },
    { label: "Score & Progress", href: "#score" },
    { label: "Learn & Quiz", href: "#learn" },
    { label: "Methodology", href: "#methodology" }
  ];

  return React.createElement('header', { className: 'sticky top-0 z-50 glass-panel border-b border-emerald-900/40 bg-opacity-90' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between' },
      
      // Brand / Logo
      React.createElement('a', { href: '#', className: 'flex items-center space-x-3 group' },
        React.createElement('div', { className: 'relative w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center glow-emerald group-hover:scale-105 transition-transform' },
          React.createElement('span', { className: 'w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping absolute opacity-75' }),
          React.createElement('span', { className: 'w-3 h-3 rounded-full bg-emerald-400 relative' })
        ),
        React.createElement('div', null,
          React.createElement('div', { className: 'flex items-center space-x-1.5' },
            React.createElement('span', { className: 'text-xl font-extrabold tracking-tight text-white' }, 'Eco'),
            React.createElement('span', { className: 'text-xl font-extrabold tracking-tight text-emerald-400' }, 'Pulse')
          ),
          React.createElement('span', { className: 'text-[10px] uppercase font-semibold text-emerald-300/70 tracking-widest block -mt-1' }, 'Observe • Understand • Improve')
        )
      ),

      // Desktop Nav Links
      React.createElement('nav', { className: 'hidden lg:flex items-center space-x-1 xl:space-x-2' },
        navLinks.map((link) => 
          React.createElement('a', {
            key: link.href,
            href: link.href,
            className: `px-3 py-2 rounded-lg text-xs font-medium transition-colors hover:text-emerald-300 hover:bg-emerald-950/40 ${
              activeSection === link.href.replace('#', '') ? 'text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/50' : 'text-slate-300'
            }`
          }, link.label)
        )
      ),

      // CTA & Plan Drawer Trigger & Theme Switcher
      React.createElement('div', { className: 'flex items-center space-x-2.5' },
        
        // Theme Toggle Switcher Button
        React.createElement('button', {
          onClick: onToggleTheme,
          title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
          className: 'p-2 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-emerald-400 hover:border-emerald-400 transition-all'
        },
          React.createElement('span', { className: 'text-sm' }, theme === 'dark' ? '☀️' : '🌙')
        ),

        // Action Plan Button
        React.createElement('button', {
          onClick: onOpenPlanDrawer,
          className: 'relative flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 hover:border-emerald-400 transition-all glow-emerald'
        },
          React.createElement('svg', { className: 'w-4 h-4 text-emerald-400', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' })
          ),
          React.createElement('span', null, 'My Action Plan'),
          planCount > 0 && React.createElement('span', { className: 'px-1.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black' }, planCount)
        ),

        // Mobile Menu Button
        React.createElement('button', {
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          className: 'lg:hidden p-2 rounded-lg bg-emerald-950 border border-emerald-800 text-slate-300 hover:text-white'
        },
          React.createElement('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' })
          )
        )
      )
    ),

    // Mobile Navigation Drawer
    mobileMenuOpen && React.createElement('div', { className: 'lg:hidden border-t border-emerald-900/60 bg-slate-950/95 px-4 pt-3 pb-6 space-y-2 animate-fadeIn' },
      navLinks.map((link) =>
        React.createElement('a', {
          key: link.href,
          href: link.href,
          onClick: () => setMobileMenuOpen(false),
          className: 'block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-emerald-950 hover:text-emerald-400'
        }, link.label)
      )
    )
  );
}
