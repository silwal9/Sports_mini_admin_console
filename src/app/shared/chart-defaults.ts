const TEXT_COLOR = 'rgba(255, 255, 255, 0.7)';
const GRID_COLOR = 'rgba(255, 255, 255, 0.1)';

export const DARK_CHART_SCALE = {
  ticks: { color: TEXT_COLOR },
  grid: { color: GRID_COLOR },
} as const;

export const DARK_CHART_LEGEND = {
  labels: { color: TEXT_COLOR },
} as const;
