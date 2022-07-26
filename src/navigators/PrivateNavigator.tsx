import React from "react";
import { useTheme } from "react-native-magnus";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppRoutes } from "@common/config/routes";
import { HomeScreen } from "@src/screens/private/HomeScreen";

const Stack = createNativeStackNavigator();

export function PrivateNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme?.colors?.white },
      }}
      initialRouteName={AppRoutes.PRIVATE.HOME}>
      <Stack.Screen name={AppRoutes.PRIVATE.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}
