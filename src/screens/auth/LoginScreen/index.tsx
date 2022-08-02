import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Div } from "react-native-magnus";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LoginFormValues, LoginSchema } from "./LoginSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@src/atomic/molecules/Fields/TextField";

export function LoginScreen() {
  const { top, bottom, left, right } = useSafeAreaInsets();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    mode: "onTouched",
  });

  const { isSubmitting, isValid, isDirty } = form.formState;
  const validating = isSubmitting || !isValid || !isDirty;

  function onSubmit(values: LoginFormValues) {
    console.log("LOGIN VALUES: ", values);
  }

  return (
    <Div pt={top} pb={bottom} pl={left + 25} pr={right + 25}>
      <FormProvider {...form}>
        <TextField
          name="cpf"
          label="CPF"
          placeholder="Seu CPF"
          required
          testID="indentifier-field"
        />
        <TextField
          name="password"
          type="password"
          label="Senha"
          placeholder="Sua senha"
          required
          testID="password-field"
        />
        <Button
          onPress={form.handleSubmit(onSubmit)}
          disabled={validating}
          loading={isSubmitting}
          testID="submit-button">
          Entrar
        </Button>
      </FormProvider>
    </Div>
  );
}
