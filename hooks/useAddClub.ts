import { api } from "@/services/api";
import { CreateClub, Result, Club } from "@/types/clubs";
import { mutate } from "swr";

export async function addClub(newClub: CreateClub) {
    await api.post("/api/club/create/", newClub);

    mutate(
        "/api/club/list/",
        (currentData: Result | undefined): Result => {
            const clubWithDefaults: Club = {
                id: crypto.randomUUID(), // Gera um ID temporário até a API retornar um real
                kits: [],
                emblem_versions: { original: "", "512x512": "" },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                ...newClub, // Sobrescreve com os dados do formulário
            };

            if (!currentData) {
                return { count: 1, next: "", previous: "", results: [clubWithDefaults] };
            }

            return { 
                ...currentData, 
                count: currentData.count + 1,
                results: [...currentData.results, clubWithDefaults] 
            };
        },
        false
    );
}
