import { api } from "./config";

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = Record<string, unknown>;

type VerifyEmailPayload = {
  email: string;
  verificationCode: string | number;
};

export const authApi = {
  login: (data: LoginPayload) => api.post("/public/users/login", data),
  registerApp: (data: RegisterPayload) => api.post("/public/users/register/app", data),
  registerGoogle: (data: RegisterPayload) => api.post("/public/users/register/google", data),
  verifyEmail: (data: VerifyEmailPayload) =>
    api.post(
      "/public/users/register/email/verify",
      {},
      {
        params: {
          email: data.email,
          verificationCode: Number.parseInt(String(data.verificationCode), 10),
        },
      }
    ),
  sendEmailCode: (email: string) =>
    api.post(
      "/public/users/email/send",
      {},
      {
        params: { email },
      }
    ),
  resendEmailCode: (email: string) =>
    api.post(
      "/public/users/register/email/resend",
      {},
      {
        params: { email },
      }
    ),
  me: () => api.get("/v1/users/profile/read"),
  logout: () => api.post("/logout"),
  registerFinal: (data: FormData) =>
    api.post("/public/users/register/final", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
};
