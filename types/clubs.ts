import { Kit } from "./kits";


export type EmblemVersions = {
    original: string;
    "512x512": string;
  };

export type Club = {
    id: string;
    kits: Kit[];
    name: string,
    federation: string;
    emblem_versions:EmblemVersions;
    createdAt: string;
    updatedAt: string;
}

export type Result = {
    count: number;
    next: string;
    previous: string;
    results: Club[]
}

export type CreateClub = Omit<Club, "id" |"kits" | "emblem_versions" | "createdAt" | "updatedAt"> & {
    emblem: string;
}