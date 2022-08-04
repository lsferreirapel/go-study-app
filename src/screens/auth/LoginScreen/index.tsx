import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Text } from "react-native-magnus";

import { LoginFormValues, LoginSchema } from "./LoginSchema";

import { ScreenProps } from "@common/config/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@src/atomic/atoms/Link";
import { TextField } from "@src/atomic/molecules/Fields/TextField";
import { AuthTemplate } from "@src/atomic/templates/AuthTemplate";

export function LoginScreen({ route }: ScreenProps<"LoginScreen">) {
  const type = route?.params?.type ?? "user";

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
    <AuthTemplate containerProps={{ mt: "20%" }}>
      <Text variant="title">
        Olá, {type === "user" ? "estudante" : "docente"}!
      </Text>
      <Text variant="subtitle" mb="xl">
        Digite seu CPF e senha{"\n"}para fazer login
      </Text>
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
        <Link mb="3xl">Esqueceu sua senha? Clique aqui</Link>
        <Button
          onPress={form.handleSubmit(onSubmit)}
          disabled={validating}
          loading={isSubmitting}
          testID="submit-button">
          Entrar
        </Button>
      </FormProvider>
    </AuthTemplate>
  );
}
