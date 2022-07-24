/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import SplashScreen from 'react-native-lottie-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <Text>TELA INCIAL</Text>
    </SafeAreaView>
  );
};
export default App;
