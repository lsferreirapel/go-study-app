import { TextProps } from "react-native-magnus";
import { VariantType } from "react-native-magnus/lib/typescript/src/types";

export const Text: VariantType<TextProps> = {
  color: "gray2",
  variants: {
    title: {
      fontSize: "3xl",
      color: "gray1",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "md",
      color: "gray3",
    },
    link: {
      fontSize: "xs",
      color: "primary",
      textDecorLine: "underline",
    },
    label: {
      fontSize: "sm",
    },
    error: {
      color: "error",
      fontSize: "xs",
    },
  },
};
