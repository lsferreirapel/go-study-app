import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import SplashScreen from "react-native-lottie-splash-screen";
import { Button, ThemeProvider } from "react-native-magnus";

import { theme } from "./common/theme";

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
      <SafeAreaView>
        <Text>TELA INCIAL</Text>
        <Button>Teste</Button>
      </SafeAreaView>
    </ThemeProvider>
  );
};
export default App;
