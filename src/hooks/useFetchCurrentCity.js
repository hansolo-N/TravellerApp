import { useQuery } from "@tanstack/react-query";
import { getCurrentCity } from "../services/cityApi";

export function useFetchCurrentCity() {
  const { isLoading: isLoadingCurrentCity, data: currentCity } = useQuery({
    queryKey: ["city"],
    queryFn: getCurrentCity,
  });

  return { isLoadingCurrentCity, currentCity };
}
