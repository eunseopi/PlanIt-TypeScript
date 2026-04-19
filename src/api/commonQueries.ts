import { useMutation } from "@tanstack/react-query";

import { setLanguage } from "./common";

export const useSetLanguageMutation = () =>
  useMutation({
    mutationFn: setLanguage,
  });
