import { PieChartPallette } from "../types";

const isValidDataType = (data: Record<string, any>) => {
  for (const k of Object.keys(data)) {
    if (!parseFloat(data[k] as string)) {
      return false;
    }
  }
  return true
}

export const convertDataToWidgetData = (attribute: Record<string, string>) => {
  const data = JSON.parse(Object.values(attribute)[0]);
  if (!isValidDataType(data)) {
    return [];
  }
  return Object.keys(data).map((key, idx) => ({
    title: key,
    value: parseFloat(data[key]),
    color: PieChartPallette[idx].color
  }))
}
