import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Icon,
  Input as RNMInput,
  InputProps as RNMInputProps,
} from "react-native-magnus";

export type InputProps = {
  invalid?: boolean;
  type?: "text" | "password";
} & RNMInputProps;

export function Input({ type = "text", ...props }: InputProps) {
  const [hideText, setHideText] = useState<boolean>(type === "password");

  function toogleHideText() {
    setHideText(state => !state);
  }

  return (
    <RNMInput
      w="100%"
      bg="transparent"
      fontSize="sm"
      fontWeight="normal"
      color="gray2"
      py="sm"
      px="lg"
      rounded="xl"
      autoCapitalize="none"
      suffix={
        type === "password" ? (
          hideText ? (
            <TouchableOpacity onPress={toogleHideText}>
              <Icon
                name="eye"
                fontFamily="Ionicons"
                fontSize="2xl"
                color="gray2"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toogleHideText}>
              <Icon
                name="eye-off"
                fontFamily="Ionicons"
                fontSize="2xl"
                color="gray2"
              />
            </TouchableOpacity>
          )
        ) : null
      }
      {...props}
      focusBorderColor={props.invalid ? "error" : "secondary"}
      borderColor={props.invalid ? "error" : "gray4"}
      secureTextEntry={hideText}
    />
  );
}
