import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-lottie-splash-screen";
import { ThemeProvider } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";

import { theme } from "@common/theme";
import { AppNavigator } from "@navigators/AppNavigator";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default App;
