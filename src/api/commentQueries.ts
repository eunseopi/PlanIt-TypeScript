import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { commentApi } from "./comment";

export const commentQueryKeys = {
  all: ["comments"] as const,
};

export const useCommentsQuery = () =>
  useQuery({
    queryKey: commentQueryKeys.all,
    queryFn: commentApi.getComments,
  });

export const useAddCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentApi.addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentQueryKeys.all });
    },
  });
};

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentApi.editComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentQueryKeys.all });
    },
  });
};

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentApi.deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentQueryKeys.all });
    },
  });
};
