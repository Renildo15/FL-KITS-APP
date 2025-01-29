import { Club } from "@/types/clubs";
import useSWR from "swr";


export function useClubDetail(id: string) {
    const { data, error, isLoading, isValidating, mutate} = useSWR<Club>(`/api/club/detail/${id}/`);

    return {
        club: data ?? null,
        isError: error,
        isLoading,
        isValidating,
        refetch: mutate
    }
}