import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCity as deleteCityApi } from "../services/cityApi";
import toast from "react-hot-toast";

export function useDeleteCity() {
  const queryClient = useQueryClient();

  const { mutate: deleteCity, isLoading: deletingCity } = useMutation({
    mutationFn: deleteCityApi,
    mutationKey: ["cities"],
    onSuccess: () => {
      toast.success("city successfully deleted!");
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error("city could not be deleted!");
    },
  });
  return { deleteCity, deletingCity };
}
