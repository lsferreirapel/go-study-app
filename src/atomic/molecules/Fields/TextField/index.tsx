import React from "react";
import { useController } from "react-hook-form";
import { Div, DivProps, Text } from "react-native-magnus";

import { Input, InputProps } from "@src/atomic/atoms/Input";

type TextFieldProps = {
  name: string;
  label?: string;
  containerProps?: DivProps;
  required?: boolean;
} & InputProps;

export function TextField({
  label,
  name,
  containerProps,
  required,
  ...props
}: TextFieldProps) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
  });

  return (
    <Div my="xs" {...containerProps}>
      {label && (
        <Text variant="label">
          {label}{" "}
          {required && (
            <Text color="error" variant="label">
              *
            </Text>
          )}
        </Text>
      )}
      <Input
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        invalid={!!error?.message}
        {...props}
      />
      {!!error?.message && (
        <Text variant="error" testID="error-message">
          {error.message}
        </Text>
      )}
    </Div>
  );
}
