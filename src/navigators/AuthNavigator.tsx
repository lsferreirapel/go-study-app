import React from "react";
import { useTheme } from "react-native-magnus";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppRoutes } from "@common/config/routes";
import { IntroScreen } from "@src/screens/auth/IntroScreen";
import { LoginScreen } from "@src/screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme?.colors?.white },
      }}
      initialRouteName={AppRoutes.AUTH.LOGIN}>
      <Stack.Screen name={AppRoutes.AUTH.INTRO} component={IntroScreen} />
      <Stack.Screen name={AppRoutes.AUTH.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
