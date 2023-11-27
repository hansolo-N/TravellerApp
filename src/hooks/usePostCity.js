import toast from "react-hot-toast";
import { postCity as postCityApi } from "../services/cityApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePostCity() {
  const queryClient = useQueryClient();

  const { isLoading: postingCity, mutate: postCity } = useMutation({
    mutationFn: (newCity) => postCityApi(newCity),
    onSuccess: () => {
      toast.success("city added successfully");
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { postingCity, postCity };
}
