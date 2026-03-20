import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter valid email"),

  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

export const schemaSignUp = yup.object({
  userName: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter valid email"),

  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),

  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const schemaForgetPassword = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter valid email"),
});
export const schemaVerifyOtp = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter valid email"),

  otp: yup
    .string()
    .trim()
    .required("OTP is required")
    .matches(/^\d+$/, "OTP must be numeric")
    .length(6, "OTP must be 6 digits"),
});
