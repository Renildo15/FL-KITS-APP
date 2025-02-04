import { Result } from "@/types/clubs";
import useSWR from "swr";


export function useClubs() {
    const { data, error, isLoading, isValidating, mutate} = useSWR<Result>("/api/club/list/");

    return {
        result: data ?? { count: 0, next: "", previous: "", results: [] },
        isLoading,
        isError: error,
        isValidating,
        refetch: mutate
    }
    
}