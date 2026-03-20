export type LoginFormValues = {
  email: string;
  password: string;
};

export type SignUpFormValues = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type ForgetPasswordFormValues = {
  email: string;
};
export type VerifyOtpFormValues = {
  email: string;
  otp: string;
};
