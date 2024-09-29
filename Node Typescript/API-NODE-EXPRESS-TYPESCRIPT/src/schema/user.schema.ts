import { create } from "lodash";
import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "password is required.",
    }).min(6, "Password should be at least 6 character"),

    Email: string({ required_error: "Email is required" }).email(
      "Not a valid email"
    ),
    passwordConfirmation: string({
      required_error: "Password confirmation required.",
    }),
  }).refine(
    (data) => {
      data.password === data.passwordConfirmation;
    },
    {
      message: "password do not match",
      path: ["passwordConfirmation"],
    }
  ),
});

export type createUserInput = TypeOf<typeof createUserSchema>;
