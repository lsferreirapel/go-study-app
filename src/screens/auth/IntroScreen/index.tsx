import React from "react";
import { Div, Text } from "react-native-magnus";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function IntroScreen() {
  const { top, bottom, left, right } = useSafeAreaInsets();

  return (
    <Div pt={top} pb={bottom} pl={left} pr={right}>
      <Text>IntroScreen</Text>
    </Div>
  );
}
