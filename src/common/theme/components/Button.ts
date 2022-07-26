import { ButtonProps } from "react-native-magnus";
import { VariantType } from "react-native-magnus/lib/typescript/src/types";

export const Button: VariantType<ButtonProps> = {
  bg: "secondary",
  color: "white",
  p: "sm",
  px: "lg",
  rounded: "circle",
  w: "100%",
  fontSize: "sm",
  fontWeight: "normal",
  variants: {
    primary: {
      bg: "primary",
    },
    outline: {
      bg: "transparent",
      color: "secondary",
      borderWidth: 1,
      borderColor: "secondary",
    },
  },
};
