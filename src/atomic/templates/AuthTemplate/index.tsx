import React, { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";
import { Div, DivProps, Icon } from "react-native-magnus";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LogoFullColoredIcon } from "@assets/icons";

import { useNavigation } from "@common/hooks/useNavigation";

type AuthTemplateProps = PropsWithChildren<
  { containerProps?: DivProps } & Partial<DivProps>
>;

export function AuthTemplate({
  children,
  containerProps,
  ...props
}: AuthTemplateProps) {
  const navigation = useNavigation();

  const { top, bottom, left, right } = useSafeAreaInsets();

  function handleOnBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <Div
      flex={1}
      w="100%"
      pt={top}
      pb={bottom}
      pl={left + 25}
      pr={right + 25}
      {...props}>
      <Div
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        position="relative">
        <TouchableOpacity
          onPress={handleOnBack}
          style={{ position: "absolute", left: 0 }}>
          <Icon
            name="chevron-left"
            color="gray2"
            fontSize="xl"
            fontFamily="FontAwesome5"
          />
        </TouchableOpacity>
        <LogoFullColoredIcon width={160} />
      </Div>
      <Div flex={1} {...containerProps}>
        {children}
      </Div>
    </Div>
  );
}
