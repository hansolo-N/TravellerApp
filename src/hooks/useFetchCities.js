import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/cityApi";

// export function useFetchCities() {
//   const { data: cities, isLoading } = useQuery({
//     queryFn: getCities,
//     queryKey: ["cities"],
//   });

//   return { cities, isLoading };
// }

export function useFetchCities() {
  const {
    isLoading,
    data: cities,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  return { isLoading, cities };
}
