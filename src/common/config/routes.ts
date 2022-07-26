import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum AuthRoutes {
  NAVIGATOR = "AuthNavigator",

  INTRO = "IntroScreen",
}

export enum PrivateRoutes {
  NAVIGATOR = "PrivateNavigator",

  HOME = "HomeScreen",
}

export const AppRoutes = {
  AUTH: AuthRoutes,
  PRIVATE: PrivateRoutes,
};

// This type is used to defined which props the screen will recieve,
// Example: DetailsScreen: { id: string }
export type RootStackParamList = {
  /** ----- Auth routes ----- **/
  AuthNavigator: undefined;
  IntroScreen: undefined;

  /** ----- Private routes ----- **/
  PrivateNavigator: undefined;
  HomeScreen: undefined;
};

type RouteName = keyof RootStackParamList;

export type ScreenProps<T extends RouteName> = NativeStackScreenProps<
  RootStackParamList,
  T
>;