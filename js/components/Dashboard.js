// EcoPulse Urban Pattern Observation Dashboard Component with Archetypes & Alerts
import { DASHBOARD_METRICS } from '../data/metrics.js';
import { CITY_PRESETS, ANOMALY_ALERTS } from '../data/cityPresets.js';

export function EnvironmentalDashboard({ activePresetId, onSelectPreset, onTriggerAlertIntervention }) {
  const [selectedPeriod, setSelectedPeriod] = React.useState('today');
  const [selectedZone, setSelectedZone] = React.useState('residential');
  const [alertIndex, setAlertIndex] = React.useState(0);

  const zoneData = DASHBOARD_METRICS.zones[selectedZone] || DASHBOARD_METRICS.zones.residential;
  const periodMultiplier = DASHBOARD_METRICS.periods[selectedPeriod]?.multiplier || 1.0;

  const currentAlert = ANOMALY_ALERTS[alertIndex];

  // Rotate alert ticker automatically
  React.useEffect(() => {
    const timer = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % ANOMALY_ALERTS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Helper SVG sparkline generator
  const renderSparkline = (points, color = "#10B981") => {
    if (!points || points.length === 0) return null;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const width = 120;
    const height = 36;

    const pathD = points.map((val, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 8) - 4;
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');

    return React.createElement('svg', { width: width, height: height, className: 'overflow-visible' },
      React.createElement('path', {
        d: pathD,
        fill: 'none',
        stroke: color,
        strokeWidth: '2.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    );
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Optimal':
      case 'Good':
        return 'badge-good';
      case 'Moderate':
        return 'badge-moderate';
      case 'Alert':
      case 'Critical':
        return 'badge-warning';
      default:
        return 'badge-good';
    }
  };

  const indicators = [
    {
      key: 'aqi',
      title: 'Air Quality Index (AQI)',
      icon: 'wind',
      iconBg: 'bg-emerald-950/80 border-emerald-500/30 text-emerald-400',
      data: zoneData.aqi,
      sparkColor: '#34D399',
      calcValue: Math.round(zoneData.aqi.value * periodMultiplier)
    },
    {
      key: 'waste',
      title: 'Daily Waste Generated',
      icon: 'trash-2',
      iconBg: 'bg-amber-950/80 border-amber-500/30 text-amber-400',
      data: zoneData.waste,
      sparkColor: '#FBBF24',
      calcValue: Math.round(zoneData.waste.value * periodMultiplier)
    },
    {
      key: 'energy',
      title: 'Energy Consumption',
      icon: 'zap',
      iconBg: 'bg-sky-950/80 border-sky-500/30 text-sky-400',
      data: zoneData.energy,
      sparkColor: '#38BDF8',
      calcValue: parseFloat((zoneData.energy.value * periodMultiplier).toFixed(2))
    },
    {
      key: 'water',
      title: 'Water Consumption',
      icon: 'droplet',
      iconBg: 'bg-indigo-950/80 border-indigo-500/30 text-indigo-400',
      data: zoneData.water,
      sparkColor: '#818CF8',
      calcValue: Math.round(zoneData.water.value * periodMultiplier)
    }
  ];

  return React.createElement('section', { id: 'dashboard', className: 'py-20 relative border-t border-emerald-900/30 bg-slate-950/40' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10' },
      
      // Live Simulated Anomaly Alert Ticker Banner
      React.createElement('div', { className: 'p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl glow-emerald animate-fadeIn' },
        React.createElement('div', { className: 'flex items-center space-x-3' },
          React.createElement('div', { className: 'w-3 h-3 rounded-full bg-amber-400 animate-ping shrink-0' }),
          React.createElement('div', { className: 'space-y-0.5' },
            React.createElement('div', { className: 'flex items-center space-x-2' },
              React.createElement('span', { className: 'text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800/40 uppercase tracking-wider' }, currentAlert.type),
              React.createElement('span', { className: 'text-xs text-slate-400 font-mono' }, 'LIVE ANOMALY DETECTED')
            ),
            React.createElement('p', { className: 'text-xs text-white font-medium' }, currentAlert.message)
          )
        ),

        React.createElement('a', {
          href: `#${currentAlert.targetSection}`,
          onClick: () => onTriggerAlertIntervention && onTriggerAlertIntervention(currentAlert),
          className: 'px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 shadow transition-all'
        }, '⚡ Intervene Now in Simulator')
      ),

      // Global City Archetype Selector Bar
      React.createElement('div', { className: 'space-y-3' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('div', { className: 'text-xs font-bold text-emerald-400 uppercase tracking-widest' }, 'GLOBAL CITY ARCHETYPE PRESETS'),
          React.createElement('span', { className: 'text-xs text-slate-400' }, 'Load predefined urban profiles into simulation')
        ),

        React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4' },
          CITY_PRESETS.map((preset) => {
            const isSelected = activePresetId === preset.id;
            return React.createElement('div', {
              key: preset.id,
              onClick: () => onSelectPreset && onSelectPreset(preset),
              className: `p-4 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between space-y-2 ${
                isSelected
                  ? 'bg-emerald-950/80 border-emerald-400 shadow-lg glow-emerald'
                  : 'glass-panel border-emerald-900/40 hover:border-emerald-500/40 hover:bg-emerald-950/30'
              }`
            },
              React.createElement('div', { className: 'flex items-center justify-between' },
                React.createElement('span', { className: 'text-2xl' }, preset.icon),
                React.createElement('span', { className: `px-2 py-0.5 rounded text-[10px] font-bold ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-emerald-400'}` }, preset.badge)
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: 'font-bold text-white text-sm' }, preset.name),
                React.createElement('p', { className: 'text-[11px] text-slate-400 leading-snug pt-0.5' }, preset.description)
              )
            );
          })
        )
      ),

      // Header & Title
      React.createElement('div', { className: 'flex flex-col md:flex-row md:items-end justify-between pt-6 border-t border-emerald-900/30 gap-6' },
        React.createElement('div', { className: 'space-y-2' },
          React.createElement('div', { className: 'inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest' },
            React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400' }),
            React.createElement('span', null, 'OBSERVATION SYSTEM')
          ),
          React.createElement('h2', { className: 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' },
            'Understand Your City\'s ',
            React.createElement('span', { className: 'text-emerald-400' }, 'Environmental Pulse')
          ),
          React.createElement('p', { className: 'text-slate-400 text-sm max-w-xl' },
            'Filter observed environmental data metrics by time period and urban sector zone.'
          )
        ),

        // Filter Controls Bar
        React.createElement('div', { className: 'flex flex-wrap items-center gap-3 glass-panel p-2 rounded-2xl border-emerald-800/40' },
          
          // Zone Selector
          React.createElement('div', { className: 'flex items-center space-x-1 bg-slate-900/80 p-1 rounded-xl border border-emerald-900/50' },
            [
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'industrial', label: 'Industrial' },
              { id: 'mixed', label: 'Mixed Use' }
            ].map(zone =>
              React.createElement('button', {
                key: zone.id,
                onClick: () => setSelectedZone(zone.id),
                className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedZone === zone.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`
              }, zone.label)
            )
          ),

          // Period Selector
          React.createElement('div', { className: 'flex items-center space-x-1 bg-slate-900/80 p-1 rounded-xl border border-emerald-900/50' },
            [
              { id: 'today', label: 'Today' },
              { id: '7days', label: '7 Days' },
              { id: '30days', label: '30 Days' }
            ].map(p =>
              React.createElement('button', {
                key: p.id,
                onClick: () => setSelectedPeriod(p.id),
                className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedPeriod === p.id
                    ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`
              }, p.label)
            )
          )
        )
      ),

      // 4 Indicator Cards Grid
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
        indicators.map((ind) =>
          React.createElement('div', { key: ind.key, className: 'glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group' },
            
            // Top Bar: Icon + Status Pill
            React.createElement('div', { className: 'flex items-center justify-between mb-4' },
              React.createElement('div', { className: `w-11 h-11 rounded-xl flex items-center justify-center border ${ind.iconBg}` },
                React.createElement('svg', { className: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                  React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: getIconPath(ind.icon) })
                )
              ),
              React.createElement('span', { className: `px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${getStatusBadgeClass(ind.data.status)}` },
                ind.data.status
              )
            ),

            // Value & Sparkline
            React.createElement('div', { className: 'my-2 flex items-end justify-between' },
              React.createElement('div', null,
                React.createElement('div', { className: 'text-3xl font-extrabold text-white tracking-tight font-mono' },
                  ind.calcValue
                ),
                React.createElement('div', { className: 'text-xs text-slate-400 font-medium' }, ind.data.unit)
              ),
              React.createElement('div', { className: 'pl-2' },
                renderSparkline(ind.data.sparkline, ind.sparkColor)
              )
            ),

            // Trend + Threshold Explanation
            React.createElement('div', { className: 'mt-4 pt-3 border-t border-emerald-900/30 text-xs space-y-1' },
              React.createElement('div', { className: 'flex items-center justify-between text-slate-300 font-medium' },
                React.createElement('span', null, 'Threshold: ', React.createElement('strong', { className: 'text-emerald-300' }, ind.data.threshold)),
                React.createElement('span', { className: `font-bold ${ind.data.trend.startsWith('-') ? 'text-emerald-400' : 'text-amber-400'}` }, ind.data.trend)
              ),
              React.createElement('p', { className: 'text-[11px] text-slate-400 leading-snug pt-1' },
                ind.data.explanation
              )
            )
          )
        )
      )
    )
  );
}

// Icon path helper
function getIconPath(iconName) {
  switch (iconName) {
    case 'wind': return 'M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2';
    case 'trash-2': return 'M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-5v6';
    case 'zap': return 'M13 10V3L4 14h7v7l9-11h-7z';
    case 'droplet': return 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z';
    default: return 'M13 10V3L4 14h7v7l9-11h-7z';
  }
}
