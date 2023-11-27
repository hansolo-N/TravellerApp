import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/cityApi";

export function useFetchCities() {
  const { isLoading, data: cities } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  return { isLoading, cities };
}
