import { TextProps } from "react-native-magnus";
import { VariantType } from "react-native-magnus/lib/typescript/src/types";

export const Text: VariantType<TextProps> = {
  color: "gray2",
  variants: {
    label: {
      fontSize: "sm",
    },
    error: {
      color: "error",
      fontSize: "xs",
    },
  },
};
