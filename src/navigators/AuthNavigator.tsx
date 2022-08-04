import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppRoutes } from "@common/config/routes";
import { IntroScreen } from "@src/screens/auth/IntroScreen";
import { LoginScreen } from "@src/screens/auth/LoginScreen";

const Stack = createStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={AppRoutes.AUTH.INTRO}>
      <Stack.Screen name={AppRoutes.AUTH.INTRO} component={IntroScreen} />
      <Stack.Screen name={AppRoutes.AUTH.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
