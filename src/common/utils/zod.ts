import { z, ZodType } from "zod";
import { util } from "zod/lib/helpers/util";

function translateType(type: string) {
  switch (type) {
    case "string":
      return "texto";
    case "number":
      return "número";
    case "boolean":
      return "boleano";
    case "symbol":
      return "símbolo";
    case "undefined":
      return "não definido";
    case "object":
      return "objeto";
    case "function":
      return "função";
    case "map":
      return "mapa";
    case "nan":
      return "não número";
    case "integer":
      return "inteiro";
    case "date":
      return "data";
    case "null":
      return "nulo";
    case "array":
      return "lista";
    case "unknown":
      return "desconhecido";
    default:
      return type;
  }
}

const errorMap = (
  issue: z.ZodIssueOptionalMessage,
  _ctx: any,
): { message: string } => {
  let message: string;
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.received === z.ZodParsedType.undefined) {
        message = `Esse campo é obrigatório`;
      } else {
        message = `Campo inválido, era eperado o tipo ${translateType(
          issue.expected,
        )} e foi recebido o tipo ${translateType(issue.received)}`;
      }
      break;
    case z.ZodIssueCode.invalid_literal:
      message = `Valor literal inválido. Era esperado ${JSON.stringify(
        issue.expected,
        z.jsonStringifyReplacer,
      )}`;
      break;
    case z.ZodIssueCode.unrecognized_keys:
      message = `Valor não reconhecido no objeto: ${util.joinValues(
        issue.keys,
        ", ",
      )}`;
      break;
    case z.ZodIssueCode.invalid_union:
      message = `Valor inválido`;
      break;
    case z.ZodIssueCode.invalid_union_discriminator:
      message = `Valor discriminador inválido. Era esperado ${util.joinValues(
        issue.options,
      )}`;
      break;
    case z.ZodIssueCode.invalid_enum_value:
      message = `ENUM inválido. Era esperado ${util.joinValues(
        issue.options,
      )}, received '${issue.received}'`;
      break;
    case z.ZodIssueCode.invalid_arguments:
      message = `Argumentos inválidos`;
      break;
    case z.ZodIssueCode.invalid_return_type:
      message = `O retorno da função é inválido`;
      break;
    case z.ZodIssueCode.invalid_date:
      message = `Data inválida`;
      break;
    case z.ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("startsWith" in issue.validation) {
          message = `Campo inválido: precisa iniciar com "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Campo inválido: precisa terminar com "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Campo inválido ${issue.validation}`;
      } else {
        message = "Campo inválido";
      }
      break;
    case z.ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `A lista deve conter ${
          issue.inclusive ? `ao menos` : `mais de`
        } ${issue.minimum} elemento(s)`;
      else if (issue.type === "string")
        message = `Esse campo deve conter ${
          issue.inclusive ? `ao menos` : `mais de`
        } ${issue.minimum} caractere(s)`;
      else if (issue.type === "number")
        message = `O número deve ser maior ${
          issue.inclusive ? `ou igual à ` : `que `
        }${issue.minimum}`;
      else if (issue.type === "date")
        message = `A data deve ser maior ${
          issue.inclusive ? `ou igual à ` : `que `
        }${new Date(issue.minimum)}`;
      else message = "Campo inválido";
      break;
    case z.ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `A lista deve conter ${
          issue.inclusive ? `ao menos` : `menos de`
        } ${issue.maximum} elemento(s)`;
      else if (issue.type === "string")
        message = `Esse campo deve conter ${
          issue.inclusive ? `ao menos` : `menos de`
        } ${issue.maximum} caractere(s)`;
      else if (issue.type === "number")
        message = `O número deve ser menor ${
          issue.inclusive ? `ou igual à ` : `que `
        }${issue.maximum}`;
      else if (issue.type === "date")
        message = `A data deve ser menor ${
          issue.inclusive ? `ou igual à ` : `que `
        }${new Date(issue.maximum)}`;
      else message = "Campo inválido";
      break;
    case z.ZodIssueCode.custom:
      message = `Campo inválido`;
      break;
    case z.ZodIssueCode.invalid_intersection_types:
      message = `Os resultados não podem ser unidos`;
      break;
    case z.ZodIssueCode.not_multiple_of:
      message = `O número de ver múltiplo de ${issue.multipleOf}`;
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};

z.setErrorMap(errorMap);

export const zod = z;

export type InferType<T extends ZodType<any, any, any>> = z.infer<T>;
