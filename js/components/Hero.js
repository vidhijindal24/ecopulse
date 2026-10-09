// EcoPulse Hero Section Component
export function HeroSection() {
  return React.createElement('section', { className: 'relative min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden bg-grid-pattern' },
    
    // Background Radial Atmospheric Glow
    React.createElement('div', { className: 'absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none' }),

    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full' },
      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-12 items-center' },
        
        // Left Column: Text & CTAs
        React.createElement('div', { className: 'lg:col-span-7 space-y-6 text-left' },
          
          // Small Top Category Label
          React.createElement('div', { className: 'inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase' },
            React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400 animate-ping' }),
            React.createElement('span', null, 'URBAN ENVIRONMENTAL INTELLIGENCE')
          ),

          // Main Headline
          React.createElement('h1', { className: 'text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]' },
            'Cities generate patterns. ',
            React.createElement('span', { className: 'bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-mint-accent to-lime-accent' },
              'We turn them into progress.'
            )
          ),

          // Paragraph
          React.createElement('p', { className: 'text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal' },
            'EcoPulse continuously observes daily urban operational patterns across transportation, waste generation, energy usage, and water consumption — demonstrating practical, data-driven systems for sustainable city improvement.'
          ),

          // CTA Buttons
          React.createElement('div', { className: 'pt-4 flex flex-wrap items-center gap-4' },
            React.createElement('a', {
              href: '#dashboard',
              className: 'inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5'
            },
              React.createElement('span', null, 'Explore the City Dashboard'),
              React.createElement('svg', { className: 'w-4 h-4 ml-2', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M14 5l7 7m0 0l-7 7m7-7H3' })
              )
            ),
            React.createElement('a', {
              href: '#simulator',
              className: 'inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 font-semibold text-sm hover:bg-emerald-950/50 transition-all'
            },
              React.createElement('svg', { className: 'w-4 h-4 mr-2 text-emerald-400', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
              ),
              React.createElement('span', null, 'Run Sustainability Simulation')
            )
          ),

          // Simulation Notice Disclaimer Pill
          React.createElement('div', { className: 'pt-2 flex items-center space-x-2 text-xs text-slate-400 font-medium' },
            React.createElement('svg', { className: 'w-4 h-4 text-emerald-400 shrink-0', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
            ),
            React.createElement('span', null, 'All metric cards display simulated urban data for educational demonstration purposes.')
          )
        ),

        // Right Column: Interactive Animated Smart City Graphic & Floating Cards
        React.createElement('div', { className: 'lg:col-span-5 relative flex justify-center' },
          
          // Container Glass Card with Smart City SVG
          React.createElement('div', { className: 'relative w-full max-w-lg aspect-square rounded-3xl glass-panel border border-emerald-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl glow-emerald' },
            
            // Header bar inside graphic
            React.createElement('div', { className: 'flex items-center justify-between pb-3 border-b border-emerald-900/40 relative z-10' },
              React.createElement('div', { className: 'flex items-center space-x-2' },
                React.createElement('div', { className: 'w-3 h-3 rounded-full bg-emerald-400 animate-ping' }),
                React.createElement('span', { className: 'text-xs font-bold text-emerald-300 tracking-wider uppercase' }, 'Metropolis Smart Grid Live Stream')
              ),
              React.createElement('span', { className: 'text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono border border-emerald-800' }, 'SIMULATED')
            ),

            // Animated Smart City Layered Vector Illustration
            React.createElement('div', { className: 'relative my-4 flex-1 flex items-center justify-center' },
              React.createElement('svg', { className: 'w-full h-full max-h-[300px]', viewBox: '0 0 400 300', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                
                // Background Grids & Atmospheric Lights
                React.createElement('defs', null,
                  React.createElement('linearGradient', { id: 'cityGlow', x1: '0', y1: '0', x2: '0', y2: '1' },
                    React.createElement('stop', { offset: '0%', stopColor: '#10B981', stopOpacity: '0.2' }),
                    React.createElement('stop', { offset: '100%', stopColor: '#07130E', stopOpacity: '0' })
                  )
                ),
                React.createElement('rect', { x: '10', y: '10', width: '380', height: '280', rx: '16', fill: 'url(#cityGlow)' }),

                // Wind Turbines Background
                React.createElement('g', { className: 'opacity-75' },
                  React.createElement('line', { x1: '60', y1: '160', x2: '60', y2: '230', stroke: '#10B981', strokeWidth: '2' }),
                  React.createElement('circle', { cx: '60', cy: '160', r: '4', fill: '#34D399' }),
                  React.createElement('g', { className: 'animate-spin origin-[60px_160px]', style: { animationDuration: '6s' } },
                    React.createElement('line', { x1: '60', y1: '160', x2: '60', y2: '135', stroke: '#34D399', strokeWidth: '2' }),
                    React.createElement('line', { x1: '60', y1: '160', x2: '82', y2: '172', stroke: '#34D399', strokeWidth: '2' }),
                    React.createElement('line', { x1: '60', y1: '160', x2: '38', y2: '172', stroke: '#34D399', strokeWidth: '2' })
                  )
                ),
                React.createElement('g', { className: 'opacity-75' },
                  React.createElement('line', { x1: '340', y1: '150', x2: '340', y2: '230', stroke: '#10B981', strokeWidth: '2' }),
                  React.createElement('circle', { cx: '340', cy: '150', r: '4', fill: '#34D399' }),
                  React.createElement('g', { className: 'animate-spin origin-[340px_150px]', style: { animationDuration: '8s' } },
                    React.createElement('line', { x1: '340', y1: '150', x2: '340', y2: '125', stroke: '#34D399', strokeWidth: '2' }),
                    React.createElement('line', { x1: '340', y1: '150', x2: '362', y2: '162', stroke: '#34D399', strokeWidth: '2' }),
                    React.createElement('line', { x1: '340', y1: '150', x2: '318', y2: '162', stroke: '#34D399', strokeWidth: '2' })
                  )
                ),

                // City Buildings Skyscrapers Outline
                React.createElement('rect', { x: '100', y: '120', width: '45', height: '110', rx: '4', fill: '#0E241B', stroke: '#10B981', strokeWidth: '1.5' }),
                React.createElement('rect', { x: '155', y: '80', width: '55', height: '150', rx: '4', fill: '#122D22', stroke: '#34D399', strokeWidth: '1.5' }),
                React.createElement('rect', { x: '220', y: '100', width: '50', height: '130', rx: '4', fill: '#0E241B', stroke: '#10B981', strokeWidth: '1.5' }),
                React.createElement('rect', { x: '280', y: '140', width: '40', height: '90', rx: '4', fill: '#0B1C15', stroke: '#059669', strokeWidth: '1.5' }),

                // Solar Rooftops
                React.createElement('line', { x1: '155', y1: '78', x2: '210', y2: '78', stroke: '#84CC16', strokeWidth: '4' }),
                React.createElement('line', { x1: '220', y1: '98', x2: '270', y2: '98', stroke: '#84CC16', strokeWidth: '4' }),

                // Windows Lights
                React.createElement('circle', { cx: '170', cy: '100', r: '3', fill: '#A7F3D0' }),
                React.createElement('circle', { cx: '195', cy: '100', r: '3', fill: '#84CC16' }),
                React.createElement('circle', { cx: '170', cy: '130', r: '3', fill: '#A7F3D0' }),
                React.createElement('circle', { cx: '195', cy: '130', r: '3', fill: '#A7F3D0' }),
                React.createElement('circle', { cx: '235', cy: '120', r: '3', fill: '#84CC16' }),
                React.createElement('circle', { cx: '255', cy: '120', r: '3', fill: '#A7F3D0' }),

                // Green Park Canopy Trees
                React.createElement('circle', { cx: '80', cy: '215', r: '18', fill: '#059669', opacity: '0.9' }),
                React.createElement('circle', { cx: '65', cy: '225', r: '14', fill: '#10B981', opacity: '0.9' }),
                React.createElement('circle', { cx: '345', cy: '215', r: '20', fill: '#059669', opacity: '0.9' }),

                // Road & Moving Electric Vehicles Path
                React.createElement('rect', { x: '20', y: '230', width: '360', height: '16', rx: '8', fill: '#07130E', stroke: '#1E3E31' }),
                React.createElement('line', { x1: '30', y1: '238', x2: '370', y2: '238', stroke: '#10B981', strokeWidth: '1.5', strokeDasharray: '8 6' }),

                // Moving Dot (Electric Bus/Vehicle)
                React.createElement('circle', { cx: '120', cy: '238', r: '5', fill: '#84CC16', className: 'animate-pulse' },
                  React.createElement('animate', { attributeName: 'cx', values: '40;360;40', dur: '12s', repeatCount: 'indefinite' })
                )
              )
            ),

            // Floating Live Sample Cards (Overlaid)
            React.createElement('div', { className: 'grid grid-cols-2 gap-3 relative z-20' },
              
              // Floating Card 1: AQI
              React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center space-x-3 backdrop-blur-md animate-float' },
                React.createElement('div', { className: 'w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs' }, 'AQI'),
                React.createElement('div', null,
                  React.createElement('div', { className: 'text-xs text-slate-400 font-medium' }, 'Air Quality'),
                  React.createElement('div', { className: 'text-sm font-extrabold text-emerald-300' }, '58 (Good)')
                )
              ),

              // Floating Card 2: Green Cover
              React.createElement('div', { className: 'p-3 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center space-x-3 backdrop-blur-md animate-float-delayed' },
                React.createElement('div', { className: 'w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-lime-400 font-bold text-xs' }, '🌳'),
                React.createElement('div', null,
                  React.createElement('div', { className: 'text-xs text-slate-400 font-medium' }, 'Green Cover'),
                  React.createElement('div', { className: 'text-sm font-extrabold text-lime-300' }, '24.5% City')
                )
              )
            )
          )
        )
      )
    )
  );
}
