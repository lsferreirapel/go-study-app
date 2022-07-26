import React from "react";
import { useTheme } from "react-native-magnus";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppRoutes } from "@common/config/routes";
import { IntroScreen } from "@src/screens/auth/IntroScreen";

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme?.colors?.white },
      }}
      initialRouteName={AppRoutes.AUTH.INTRO}>
      <Stack.Screen name={AppRoutes.AUTH.INTRO} component={IntroScreen} />
    </Stack.Navigator>
  );
}
