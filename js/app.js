// EcoPulse Main React App Component with Themes & Archetypes
import { Navbar } from './components/Navbar.js';
import { HeroSection } from './components/Hero.js';
import { EnvironmentalDashboard } from './components/Dashboard.js';
import { UrbanMap } from './components/UrbanMap.js';
import { PatternAnalysis } from './components/Patterns.js';
import { SustainabilitySimulator } from './components/Simulator.js';
import { ScenarioComparison } from './components/ScenarioComparison.js';
import { RecommendationEngine, ImprovementPlanDrawer } from './components/Recommendations.js';
import { ScoreTracker } from './components/ScoreTracker.js';
import { EducationalQuiz } from './components/Quiz.js';
import { MethodologySection } from './components/Methodology.js';
import { Footer } from './components/Footer.js';

import { getStoredSliders, saveSliders, DEFAULT_SLIDERS, PRESET_SLIDERS, getStoredPlan, savePlan } from './utils/storage.js';

export function App() {
  const [sliders, setSliders] = React.useState(getStoredSliders);
  const [plan, setPlan] = React.useState(getStoredPlan);
  const [compareModalOpen, setCompareModalOpen] = React.useState(false);
  const [planDrawerOpen, setPlanDrawerOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const [activePresetId, setActivePresetId] = React.useState('default');
  const [theme, setTheme] = React.useState('dark');
  const [toastMessage, setToastMessage] = React.useState(null);

  // Toggle Dark / Light Theme
  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
    showToast(`Switched to ${newTheme === 'dark' ? 'Futuristic Cyber Dark' : 'Clean Modern Light'} Mode!`);
  };

  // Save sliders to localStorage on change
  const handleSliderChange = (key, value) => {
    setSliders(prev => {
      const updated = { ...prev, [key]: value };
      saveSliders(updated);
      return updated;
    });
  };

  // Select City Archetype Preset
  const handleSelectPreset = (preset) => {
    setActivePresetId(preset.id);
    setSliders(preset.sliders);
    saveSliders(preset.sliders);
    showToast(`Loaded ${preset.name} (${preset.tagline}) archetype!`);
  };

  // Trigger Anomaly Alert Intervention
  const handleTriggerAlertIntervention = (alert) => {
    setSliders(prev => {
      const updated = { ...prev, [alert.targetSlider]: alert.recommendedValue };
      saveSliders(updated);
      return updated;
    });
    showToast(`Applied intervention for ${alert.type}!`);
  };

  // Apply preset recommended slider values
  const handleApplyPreset = () => {
    setSliders(PRESET_SLIDERS);
    saveSliders(PRESET_SLIDERS);
    showToast('Applied recommended urban improvement parameters!');
  };

  // Reset sliders to 0
  const handleResetSliders = () => {
    setSliders(DEFAULT_SLIDERS);
    saveSliders(DEFAULT_SLIDERS);
    setActivePresetId('default');
    showToast('Simulation parameters reset to baseline (0%).');
  };
  // Sync Action Plan with MongoDB Atlas Backend
  const syncPlanWithBackend = (updatedPlan) => {
    fetch('/api/plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan: updatedPlan })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log('[EcoPulse] Action plan synced to MongoDB Atlas:', data.count, 'items');
        }
      })
      .catch(err => {
        console.log('[EcoPulse] Running in local offline storage mode:', err.message);
      });
  };

  // Load saved plan from MongoDB on app mount (with localStorage fallback)
  React.useEffect(() => {
    fetch('/api/plan')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.plan) && data.plan.length > 0) {
          setPlan(data.plan);
          savePlan(data.plan);
          console.log('[EcoPulse] Loaded action plan from MongoDB Atlas:', data.plan.length, 'items');
        }
      })
      .catch(err => {
        console.log('[EcoPulse] Local storage mode active:', err.message);
      });
  }, []);

  // Add item to active improvement plan
  const handleAddToPlan = (item) => {
    if (plan.some(p => p.id === item.id)) return;
    const updated = [...plan, item];
    setPlan(updated);
    savePlan(updated);
    syncPlanWithBackend(updated);
    showToast(`Added "${item.title}" to your Action Plan!`);
  };

  // Remove item from plan
  const handleRemoveFromPlan = (id) => {
    const updated = plan.filter(p => p.id !== id);
    setPlan(updated);
    savePlan(updated);
    syncPlanWithBackend(updated);
    showToast('Removed item from your Action Plan.');
  };

  // Clear all items from plan
  const handleClearPlan = () => {
    setPlan([]);
    savePlan([]);
    syncPlanWithBackend([]);
    showToast('Action Plan cleared.');
  };

  // Reset entire app state
  const handleResetStorage = () => {
    localStorage.clear();
    setSliders(DEFAULT_SLIDERS);
    setPlan([]);
    syncPlanWithBackend([]);
    setActivePresetId('default');
    showToast('App state & local storage reset to defaults.');
  };

  // Toast notification helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Active section scroll observer
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['dashboard', 'map', 'patterns', 'simulator', 'recommendations', 'score', 'learn', 'methodology'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.createElement('div', { className: 'min-h-screen bg-dark text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 transition-colors duration-300' },
    
    // Navbar
    React.createElement(Navbar, {
      planCount: plan.length,
      onOpenPlanDrawer: () => setPlanDrawerOpen(true),
      activeSection: activeSection,
      theme: theme,
      onToggleTheme: handleToggleTheme
    }),

    // Main Page Content
    React.createElement('main', { className: 'flex-1' },
      React.createElement(HeroSection, null),
      React.createElement(EnvironmentalDashboard, {
        activePresetId: activePresetId,
        onSelectPreset: handleSelectPreset,
        onTriggerAlertIntervention: handleTriggerAlertIntervention
      }),
      React.createElement(UrbanMap, { onSelectZoneForSimulator: () => {} }),
      React.createElement(PatternAnalysis, null),
      React.createElement(SustainabilitySimulator, {
        sliders: sliders,
        onSliderChange: handleSliderChange,
        onApplyPreset: handleApplyPreset,
        onReset: handleResetSliders,
        onOpenCompareModal: () => setCompareModalOpen(true)
      }),
      React.createElement(RecommendationEngine, {
        plan: plan,
        onAddToPlan: handleAddToPlan,
        onRemoveFromPlan: handleRemoveFromPlan,
        onOpenPlanDrawer: () => setPlanDrawerOpen(true)
      }),
      React.createElement(ScoreTracker, {
        sliders: sliders,
        planCount: plan.length
      }),
      React.createElement(EducationalQuiz, null),
      React.createElement(MethodologySection, null)
    ),

    // Footer
    React.createElement(Footer, {
      planCount: plan.length,
      onResetStorage: handleResetStorage
    }),

    // Scenario Comparison Modal
    React.createElement(ScenarioComparison, {
      sliders: sliders,
      isOpen: compareModalOpen,
      onClose: () => setCompareModalOpen(false)
    }),

    // Improvement Plan Drawer Modal
    React.createElement(ImprovementPlanDrawer, {
      isOpen: planDrawerOpen,
      onClose: () => setPlanDrawerOpen(false),
      plan: plan,
      onRemoveItem: handleRemoveFromPlan,
      onClearAll: handleClearPlan,
      onSyncCloud: () => {
        syncPlanWithBackend(plan);
        showToast('Action Plan synchronized with MongoDB Atlas!');
      }
    }),

    // Toast Notification Banner
    toastMessage && React.createElement('div', { className: 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-emerald-500 text-slate-950 font-extrabold text-xs shadow-2xl flex items-center space-x-2 animate-fadeIn glow-emerald border border-emerald-300' },
      React.createElement('span', null, '⚡'),
      React.createElement('span', null, toastMessage)
    )
  );
}

// React Mounting
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(App, null));
}
