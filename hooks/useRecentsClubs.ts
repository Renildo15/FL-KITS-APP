import { Result } from "@/types/clubs";
import useSWR from "swr";

export function useRecentsClubs() {
    const { data, error, isLoading, isValidating, mutate} = useSWR<Result>("/api/club/recents/");

    return {
        result: data ?? { count: 0, next: "", previous: "", results: [] },
        isLoading,
        isError: error,
        isValidating,
        refetch: mutate
    }
}