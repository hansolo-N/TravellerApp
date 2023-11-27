import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/cityApi";

export function useFetchCity(id) {
  const {
    isLoading,
    data: city,
    error,
  } = useQuery({
    queryKey: ["city"],
    queryFn: () => getCity(id),
    retry: false,
  });
  return { isLoading, error, city };
}
