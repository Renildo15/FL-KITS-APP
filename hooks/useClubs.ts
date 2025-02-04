import { Result } from "@/types/clubs";
import useSWR from "swr";


export function useClubs(search?:string) {
    let url = "/api/club/list/"
    if (search  !== undefined) {
        url += `?search=${search}`
    }

    const { data, error, isLoading, isValidating, mutate} = useSWR<Result>(url);

    return {
        result: data ?? { count: 0, next: "", previous: "", results: [] },
        isLoading,
        isError: error,
        isValidating,
        refetch: mutate
    }
    
}