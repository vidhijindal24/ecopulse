// EcoPulse LocalStorage Persistence Helper

const PLAN_KEY = "ecopulse_user_plan";
const SLIDERS_KEY = "ecopulse_simulator_sliders";

export const DEFAULT_SLIDERS = {
  vehicle: 0,
  waste: 0,
  energy: 0,
  water: 0,
  green: 0
};

export const PRESET_SLIDERS = {
  vehicle: 25,
  waste: 70,
  energy: 20,
  water: 25,
  green: 15
};

export function getStoredSliders() {
  try {
    const raw = localStorage.getItem(SLIDERS_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_SLIDERS;
  } catch (err) {
    console.warn("Could not load sliders from localStorage:", err);
    return DEFAULT_SLIDERS;
  }
}

export function saveSliders(sliders) {
  try {
    localStorage.setItem(SLIDERS_KEY, JSON.stringify(sliders));
  } catch (err) {
    console.warn("Could not save sliders to localStorage:", err);
  }
}

export function getStoredPlan() {
  try {
    const raw = localStorage.getItem(PLAN_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Could not load plan from localStorage:", err);
    return [];
  }
}

export function savePlan(planItems) {
  try {
    localStorage.setItem(PLAN_KEY, JSON.stringify(planItems));
  } catch (err) {
    console.warn("Could not save plan to localStorage:", err);
  }
}
