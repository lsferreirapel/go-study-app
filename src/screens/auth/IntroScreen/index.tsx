import React from "react";
import { Button, Div, Text } from "react-native-magnus";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LogoFullColoredIcon } from "@assets/icons";

import { AppRoutes, ScreenProps } from "@common/config/routes";

export function IntroScreen({ navigation }: ScreenProps<"IntroScreen">) {
  const { bottom, left, right } = useSafeAreaInsets();

  return (
    <Div w="100%" flex={1} pb={bottom}>
      <Div
        h={300}
        w="100%"
        pl={left}
        pr={right}
        alignItems="center"
        justifyContent="center"
        bgImg={require("@assets/images/intro-header-bg.png")}
        bgMode="stretch">
        <LogoFullColoredIcon width="60%" />
      </Div>
      <Div mt="10%" flex={1} alignItems="center">
        <Text
          variant="title"
          fontSize="6xl"
          lineHeight={50}
          textAlign="center"
          mb="sm">
          Bem vindo!
        </Text>
        <Text variant="subtitle" textAlign="center">
          Como você gostaria{"\n"}de entrar na plataforma?
        </Text>
        <Div pr={right} w="70%" mt="3xl">
          <Button
            onPress={() =>
              navigation.navigate(AppRoutes.AUTH.LOGIN, {
                type: "user",
              })
            }>
            Entrar como estudante
          </Button>
          <Button
            mt="md"
            variant="outline"
            onPress={() =>
              navigation.navigate(AppRoutes.AUTH.LOGIN, {
                type: "admin",
              })
            }>
            Entrar como docente
          </Button>
        </Div>
      </Div>
    </Div>
  );
}
