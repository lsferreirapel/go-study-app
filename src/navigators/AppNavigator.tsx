import React from "react";
import { useTheme } from "react-native-magnus";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppRoutes } from "@common/config/routes";
import { AuthNavigator } from "@navigators/AuthNavigator";
import { PrivateNavigator } from "@navigators/PrivateNavigator";

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme?.colors?.white },
      }}
      initialRouteName={AppRoutes.AUTH.NAVIGATOR}>
      <Stack.Screen name={AppRoutes.AUTH.NAVIGATOR} component={AuthNavigator} />
      <Stack.Screen
        name={AppRoutes.PRIVATE.NAVIGATOR}
        component={PrivateNavigator}
      />
    </Stack.Navigator>
  );
}
