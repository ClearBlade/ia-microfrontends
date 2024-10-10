export interface PieChartData {
  [key: string]: number;
}

export interface PieChartScores {
  name: string;
  percentage: string;
  color: string;
  contrast: string;
  startAngle: number;
  endAngle: number;
}

export enum Contrasts {
  white = "white",
  black = "black",
}

export const PieChartPallette = {
  0: { color: "#2D87BB", contrast: Contrasts.white },
  1: { color: "#64C2A6", contrast: Contrasts.black },
  2: { color: "#E6F69D", contrast: Contrasts.black },
  3: { color: "#F66D44", contrast: Contrasts.black },
  4: { color: "#AADEA7", contrast: Contrasts.black },
  5: { color: "#FEAE65", contrast: Contrasts.black },
  6: { color: "#3C7464", contrast: Contrasts.white },
  7: { color: "#17445E", contrast: Contrasts.white },
  8: { color: "#944129", contrast: Contrasts.white },
  9: { color: "#949886", contrast: Contrasts.black },
  10: { color: "#43158A", contrast: Contrasts.white },
};
