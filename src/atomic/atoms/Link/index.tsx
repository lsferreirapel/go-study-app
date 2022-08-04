import React, { PropsWithChildren } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text, TextProps } from "react-native-magnus";

type LinkProps = PropsWithChildren<
  { onPress?: TouchableOpacityProps["onPress"] } & TextProps
>;

export function Link({ children, onPress, ...props }: LinkProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text variant="link" {...props}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
