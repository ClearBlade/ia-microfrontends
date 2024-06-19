import { defaultAttributeColor } from "../constants";
import { AttributeProp } from "../types";

export const getColorForAttributeValue = (
  prop: AttributeProp | undefined,
  value?: string | number | boolean | null,
  defaultColor = defaultAttributeColor
) => {
  const colors = prop?.color ? prop.color : defaultColor;
  return value ? colors.on : colors.off;
};
