import { useApiGet } from "@/api/core/useApi";

export const useGetList = () =>
  useApiGet<{ id: string; name: string }[]>({
    url: "/list",
  });