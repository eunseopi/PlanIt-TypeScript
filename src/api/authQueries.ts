import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { authApi } from "./auth";

export const authQueryKeys = {
  me: ["auth", "me"] as const,
};

export const useMeQuery = () =>
  useQuery({
    queryKey: authQueryKeys.me,
    queryFn: async () => {
      const response = await authApi.me();
      return response?.data ?? response;
    },
  });

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { email: string; password: string }) => {
      await authApi.login(payload);
      const response = await authApi.me();
      return response?.data ?? response;
    },
    onSuccess: (user) => {
      queryClient.setQueryData(authQueryKeys.me, user);
    },
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSettled: () => {
      queryClient.removeQueries({ queryKey: authQueryKeys.me });
    },
  });
};

export const useRegisterAppMutation = () =>
  useMutation({
    mutationFn: authApi.registerApp,
  });

export const useSendEmailCodeMutation = () =>
  useMutation({
    mutationFn: authApi.sendEmailCode,
  });

export const useVerifyEmailMutation = () =>
  useMutation({
    mutationFn: authApi.verifyEmail,
  });

export const useResendEmailCodeMutation = () =>
  useMutation({
    mutationFn: authApi.resendEmailCode,
  });

export const useRegisterFinalMutation = () =>
  useMutation({
    mutationFn: authApi.registerFinal,
  });
