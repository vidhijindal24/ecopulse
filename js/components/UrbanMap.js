// EcoPulse Interactive Urban Operations Map Component
import { CITY_ZONES } from '../data/zones.js';

export function UrbanMap({ onSelectZoneForSimulator }) {
  const [activeZoneId, setActiveZoneId] = React.useState('residential');
  const [hoveredZoneId, setHoveredZoneId] = React.useState(null);

  const activeZone = CITY_ZONES.find(z => z.id === activeZoneId) || CITY_ZONES[0];

  return React.createElement('section', { id: 'map', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/80' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      
      // Header
      React.createElement('div', { className: 'space-y-2 mb-10' },
        React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
          React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
          React.createElement('span', null, 'GEOSPATIAL INTELLIGENCE')
        ),
        React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
          'Interactive Urban ',
          React.createElement('span', { className: 'text-emerald-400' }, 'Operations Map')
        ),
        React.createElement('p', { className: 'text-slate-400 text-sm max-w-2xl' },
          'Click on key urban sector nodes across the city schematic to inspect localized operational patterns, environmental bottlenecks, and target intervention strategies.'
        )
      ),

      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-start' },
        
        // Left Column: SVG Schematic Map Canvas
        React.createElement('div', { className: 'lg:col-span-7 glass-panel p-6 rounded-3xl border border-emerald-800/40 relative overflow-hidden glow-emerald' },
          
          // Map Header bar
          React.createElement('div', { className: 'flex items-center justify-between pb-4 mb-4 border-b border-emerald-900/50' },
            React.createElement('div', { className: 'flex items-center space-x-2' },
              React.createElement('div', { className: 'w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse' }),
              React.createElement('span', { className: 'text-xs font-bold text-slate-200 tracking-wide uppercase' }, 'Schematic City Grid Vector')
            ),
            React.createElement('div', { className: 'flex items-center space-x-3 text-[11px] text-slate-400 font-medium' },
              React.createElement('span', { className: 'flex items-center' },
                React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400 mr-1.5' }), 'Optimal/Good'
              ),
              React.createElement('span', { className: 'flex items-center' },
                React.createElement('span', { className: 'w-2 h-2 rounded-full bg-amber-400 mr-1.5' }), 'Moderate'
              ),
              React.createElement('span', { className: 'flex items-center' },
                React.createElement('span', { className: 'w-2 h-2 rounded-full bg-rose-400 mr-1.5' }), 'Critical'
              )
            )
          ),

          // Custom Interactive Vector Schematic Canvas
          React.createElement('div', { className: 'relative aspect-[4/3] bg-slate-950 rounded-2xl border border-emerald-900/60 overflow-hidden p-2' },
            React.createElement('svg', { className: 'w-full h-full', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
              
              // Grid overlay lines
              React.createElement('defs', null,
                React.createElement('pattern', { id: 'mapGrid', width: '10', height: '10', patternUnits: 'userSpaceOnUse' },
                  React.createElement('path', { d: 'M 10 0 L 0 0 0 10', fill: 'none', stroke: 'rgba(16, 185, 129, 0.08)', strokeWidth: '0.5' })
                )
              ),
              React.createElement('rect', { width: '100', height: '100', fill: 'url(#mapGrid)' }),

              // Roads / Arterials connecting zones
              React.createElement('path', { d: 'M 22 32 L 48 28 L 78 38 M 48 28 L 42 58 L 75 75 M 20 72 L 42 58', fill: 'none', stroke: '#1B3B2F', strokeWidth: '1.8', strokeDasharray: '2 1' }),
              React.createElement('path', { d: 'M 10 50 Q 50 45 90 60', fill: 'none', stroke: '#0F2A20', strokeWidth: '3' }),

              // Zone Hotspot Pins
              CITY_ZONES.map((zone) => {
                const isSelected = activeZoneId === zone.id;
                const isHovered = hoveredZoneId === zone.id;
                const pinColor = zone.badgeColor === 'emerald' ? '#10B981' : zone.badgeColor === 'amber' ? '#F59E0B' : zone.badgeColor === 'rose' ? '#EF4444' : '#38BDF8';

                return React.createElement('g', {
                  key: zone.id,
                  onClick: () => setActiveZoneId(zone.id),
                  onMouseEnter: () => setHoveredZoneId(zone.id),
                  onMouseLeave: () => setHoveredZoneId(null),
                  className: 'cursor-pointer group'
                },
                  
                  // Pulsing Outer Ripple
                  isSelected && React.createElement('circle', {
                    cx: zone.x,
                    cy: zone.y,
                    r: '7',
                    fill: pinColor,
                    opacity: '0.3',
                    className: 'animate-ping'
                  }),

                  // Outer Circle ring
                  React.createElement('circle', {
                    cx: zone.x,
                    cy: zone.y,
                    r: isSelected || isHovered ? '5' : '4',
                    fill: '#07130E',
                    stroke: pinColor,
                    strokeWidth: isSelected ? '2' : '1.5',
                    className: 'transition-all duration-200'
                  }),

                  // Center Node Dot
                  React.createElement('circle', {
                    cx: zone.x,
                    cy: zone.y,
                    r: '2',
                    fill: pinColor
                  }),

                  // Hotspot Text Tag Label on SVG
                  React.createElement('text', {
                    x: zone.x,
                    y: zone.y - 6,
                    textAnchor: 'middle',
                    fill: isSelected ? '#ffffff' : '#94a3b8',
                    fontSize: '2.8',
                    fontWeight: isSelected ? 'bold' : 'normal',
                    className: 'pointer-events-none transition-all'
                  }, zone.type.split(' ')[0])
                );
              })
            ),

            // Hover Tooltip Box on SVG map
            hoveredZoneId && (() => {
              const hZone = CITY_ZONES.find(z => z.id === hoveredZoneId);
              if (!hZone) return null;
              return React.createElement('div', {
                className: 'absolute z-30 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-emerald-500/40 text-xs text-white shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2',
                style: { left: `${hZone.x}%`, top: `${hZone.y}%` }
              },
                React.createElement('div', { className: 'font-bold text-emerald-300' }, hZone.name),
                React.createElement('div', { className: 'text-[10px] text-slate-400' }, `AQI: ${hZone.metrics.aqi}`)
              );
            })()
          ),

          // Zone Selection Quick Bar below map
          React.createElement('div', { className: 'mt-4 flex flex-wrap gap-2' },
            CITY_ZONES.map(z =>
              React.createElement('button', {
                key: z.id,
                onClick: () => setActiveZoneId(z.id),
                className: `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeZoneId === z.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-emerald-950/60 border border-emerald-900/40'
                }`
              }, z.type)
            )
          )
        ),

        // Right Column: Active Zone Information Panel
        React.createElement('div', { className: 'lg:col-span-5 glass-panel p-6 rounded-3xl border border-emerald-800/40 space-y-6 animate-fadeIn' },
          
          // Zone Header & Badge
          React.createElement('div', { className: 'space-y-2' },
            React.createElement('div', { className: 'flex items-center justify-between' },
              React.createElement('span', { className: 'px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 border border-emerald-500/40 text-emerald-400 uppercase tracking-wider' },
                activeZone.type
              ),
              React.createElement('span', { className: 'text-xs text-slate-400 font-mono' }, `ID: ${activeZone.id}`)
            ),
            React.createElement('h3', { className: 'text-2xl font-extrabold text-white tracking-tight' },
              activeZone.name
            )
          ),

          // Metrics Summary Grid
          React.createElement('div', { className: 'grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-emerald-900/40 text-xs' },
            React.createElement('div', null,
              React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Air Quality'),
              React.createElement('div', { className: 'text-sm font-bold text-emerald-300 font-mono' }, activeZone.metrics.aqi)
            ),
            React.createElement('div', null,
              React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Daily Waste'),
              React.createElement('div', { className: 'text-sm font-bold text-amber-300 font-mono' }, activeZone.metrics.waste)
            ),
            React.createElement('div', null,
              React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Energy Use'),
              React.createElement('div', { className: 'text-sm font-bold text-sky-300 font-mono' }, activeZone.metrics.energy)
            ),
            React.createElement('div', null,
              React.createElement('div', { className: 'text-slate-400 font-medium' }, 'Water Use'),
              React.createElement('div', { className: 'text-sm font-bold text-indigo-300 font-mono' }, activeZone.metrics.water)
            )
          ),

          // Operational Details
          React.createElement('div', { className: 'space-y-4 text-xs' },
            React.createElement('div', { className: 'p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-1' },
              React.createElement('div', { className: 'font-bold text-emerald-400 uppercase tracking-wider text-[10px]' }, 'Observed Operational Pattern'),
              React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, activeZone.pattern)
            ),
            React.createElement('div', { className: 'p-3.5 rounded-xl bg-rose-950/20 border border-rose-800/30 space-y-1' },
              React.createElement('div', { className: 'font-bold text-rose-400 uppercase tracking-wider text-[10px]' }, 'Environmental Problem'),
              React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, activeZone.problem)
            ),
            React.createElement('div', { className: 'p-3.5 rounded-xl bg-sky-950/20 border border-sky-800/30 space-y-1' },
              React.createElement('div', { className: 'font-bold text-sky-400 uppercase tracking-wider text-[10px]' }, 'Recommended Strategy'),
              React.createElement('p', { className: 'text-slate-300 leading-relaxed' }, activeZone.recommendation)
            )
          ),

          // Action Button to Jump to Simulator
          React.createElement('a', {
            href: '#simulator',
            onClick: () => onSelectZoneForSimulator && onSelectZoneForSimulator(activeZone.id),
            className: 'w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-950/60'
          },
            React.createElement('span', null, 'Simulate Intervention for This Zone'),
            React.createElement('svg', { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M14 5l7 7m0 0l-7 7m7-7H3' })
            )
          )
        )
      )
    )
  );
}
