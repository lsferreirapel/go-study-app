import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppRoutes } from "@common/config/routes";
import { AuthNavigator } from "@navigators/AuthNavigator";
import { PrivateNavigator } from "@navigators/PrivateNavigator";

// This stack navigator reduce app performance but has pretty screen transitions
const Stack = createStackNavigator();

// This stack navigator improves app performance but has ugly screen transitions
// const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
