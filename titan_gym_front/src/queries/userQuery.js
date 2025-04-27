import { useQuery } from "@tanstack/react-query";
import { getUserMyApi } from "../apis/userApi";

export const useUserQuery = () => useQuery({
    queryKey: ["userMyQuery"],
    queryFn: getUserMyApi,
    retry: 0,
    staleTime: 1000 * 60 * 20,
    gcTime: 1000 *60 * 20,
});