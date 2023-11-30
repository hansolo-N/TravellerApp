import { useQuery } from "@tanstack/react-query";
import { fetchTopCities } from "../services/cityApi";

export function useFetchTopCities() {
  const { data: Cities, isLoading: LoadingCities } = useQuery({
    queryFn: fetchTopCities,
    queryKey: ["topcities"],
  });

  return { Cities, LoadingCities };
}
