import { Club } from "@/types/clubs";
import useSWR from "swr";


export function useClubDetail(id: string, all_kits: boolean) {

    let url = `/api/club/detail/${id}/`
    if (all_kits) {
        url += '?all_kits=true';
    }

    const { data, error, isLoading, isValidating, mutate} = useSWR<Club>(url);

    return {
        club: data ?? null,
        isError: error,
        isLoading,
        isValidating,
        refetch: mutate
    }
}