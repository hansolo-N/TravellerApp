import { useMutation } from "@tanstack/react-query";
import { getCity as getCityApi } from "../services/cityApi";
import toast from "react-hot-toast";

export function useFetchCity() {
  const { mutate: getCity, isLoading: isLoadingCity } = useMutation({
    mutationFn: getCityApi,
    onError: (err) => {
      console.log("error:", err);
      toast.error("there was an error fetching city");
    },
  });

  return { getCity, isLoadingCity };
}
