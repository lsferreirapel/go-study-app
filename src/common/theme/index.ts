import { ThemeType } from "react-native-magnus";

import { colors } from "./colors";
import { Button } from "./components/Button";
import { Text } from "./components/Text";

export const theme: ThemeType = {
  colors,
  components: {
    Button,
    Text,
  },
  fontSize: {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22,
    "2xl": 24,
    "3xl": 26,
    "4xl": 28,
    "5xl": 30,
    "6xl": 40,
  },
  fontFamily: {
    normal: "Poppins-Regular",
    bold: "Poppins-Bold",
    100: "Poppins-Thin",
    200: "Poppins-ExtraLight",
    300: "Poppins-Light",
    400: "Poppins-Regular",
    500: "Poppins-Medium",
    600: "Poppins-SemiBold",
    700: "Poppins-Bold",
    800: "Poppins-ExtraBold",
    900: "Poppins-Black",
  },
  spacing: {
    none: 0,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
    "2xl": 30,
    "3xl": 35,
    "-xs": -5,
    "-sm": -10,
    "-md": -15,
    "-lg": -20,
    "-xl": -25,
    "-2xl": -30,
    "-3xl": -35,
  },
  borderRadius: {
    none: 0,
    xs: 3,
    sm: 5,
    md: 10,
    lg: 25,
    xl: 50,
    circle: 99999,
  },
};
