import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppRoutes } from "@common/config/routes";
import { HomeScreen } from "@src/screens/private/HomeScreen";

const Stack = createStackNavigator();

export function PrivateNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={AppRoutes.PRIVATE.HOME}>
      <Stack.Screen name={AppRoutes.PRIVATE.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}
