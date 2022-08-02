import { ThemeType } from "react-native-magnus";

export const colors: ThemeType["colors"] = {
  white: "#FFFFFF",
  offwhite: "#E4E4EC",
  black: "#000000",
  transparent: "rgba(0,0,0,0)",

  get primary() {
    return this.blue500;
  },
  get secondary() {
    return this.green500;
  },
  get error() {
    return this.red500;
  },

  get gray1() {
    return this.gray800;
  },
  get gray2() {
    return this.gray700;
  },
  get gray3() {
    return this.gray600;
  },
  get gray4() {
    return this.gray500;
  },

  blue100: "#F7FAFE",
  blue200: "#DFE9FD",
  blue300: "#B8CFFA",
  blue400: "#80A9F5",
  blue500: "#3879F0",
  blue600: "#2D6DE1",
  blue700: "#1952B9",
  blue800: "#283c71",
  blue900: "#1f2a4b",

  green100: "#E9F1EF",
  green200: "#CCEDE4",
  green300: "#9BE4D1",
  green400: "#58DBB8",
  green500: "#00CC96",
  green600: "#02BC8B",
  green700: "#009B72",
  green800: "#57997e",
  green900: "#5e8876",

  gray100: "#F5F8FC",
  gray200: "#EBF1F9",
  gray300: "#DAE3EF",
  gray400: "#C7D0DF",
  gray500: "#ADB7CA",
  gray600: "#717E94",
  gray700: "#444E5F",
  gray800: "#1A2432",
  gray900: "#131B2B",

  red100: "#fff5f5",
  red200: "#fed7d7",
  red300: "#feb2b2",
  red400: "#fc8181",
  red500: "#f56565",
  red600: "#e53e3e",
  red700: "#c53030",
  red800: "#9b2c2c",
  red900: "#742a2a",
};
