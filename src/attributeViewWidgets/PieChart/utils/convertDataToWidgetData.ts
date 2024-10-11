import { PieChartPallette } from "../types";

const isValidDataType = (data: Record<string, any>) => {
  for (const k of Object.keys(data)) {
    if (!parseFloat(data[k] as string)) {
      return false;
    }
  }
  return true
}

export const convertDataToWidgetData = (attribute: string) => {
  try {
    const jsonAttr: Record<string, any> = JSON.parse(attribute);
    const val = Object.values(jsonAttr)[0];
    const data = JSON.parse(val);
    if (!isValidDataType(data)) {
      return [];
    }
    return Object.keys(data).map((key, idx) => ({
      title: key,
      value: parseFloat(data[key]),
      color: PieChartPallette[idx].color
    }));
  } catch (e) {
    return [];
  }
}
