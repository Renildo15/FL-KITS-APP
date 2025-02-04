import { Result } from "@/types/clubs";
import useSWR from "swr";


export function useClubs(search?:string, option?: string) {
    let url = "/api/club/list/"
    const params = new URLSearchParams();

    if (search) {
        params.append("search", search);
    }

    if (option && option !== "Tudo") {
        params.append("federation", option);
    }

    if (params.toString()) {
        url += `?${params.toString()}`;
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