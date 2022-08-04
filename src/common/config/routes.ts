import { StackScreenProps } from "@react-navigation/stack";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum AuthRoutes {
  NAVIGATOR = "AuthNavigator",

  INTRO = "IntroScreen",
  LOGIN = "LoginScreen",
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
  LoginScreen?: {
    type: "user" | "admin";
  };

  /** ----- Private routes ----- **/
  PrivateNavigator: undefined;
  HomeScreen: undefined;
};

type RouteName = keyof RootStackParamList;

export type ScreenProps<T extends RouteName> = StackScreenProps<
  RootStackParamList,
  T
>;
