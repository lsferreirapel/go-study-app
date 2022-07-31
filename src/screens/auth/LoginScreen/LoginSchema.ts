import { validateCPF } from "@common/utils/utils";
import { InferType, zod } from "@common/utils/zod";

export const LoginSchema = zod.object({
  cpf: zod
    .string()
    .refine(val => validateCPF(val), { message: "CPF inválido" }),
  password: zod.string().min(6),
});

export type LoginFormValues = InferType<typeof LoginSchema>;
