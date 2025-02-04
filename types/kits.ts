export type Kit = {
    id: string;
    kit_home_url: string;
    kit_away_url: string;
    kit_goalkeeper_home_url: string;
    kit_goalkeeper_away_url: string;
    kit_version: string;
    kit_current: boolean;
    kit_type: string;
    created_at: string;
    updated_at: string;
}

export enum KitType {
    FTS = "fts",
    FL = "fl",
    DLS = "dls",
    Other = "other",
}

export type KitCreate = {
    club: string;
    kit_home: string;
    kit_away: string;
    kit_goalkeeper_home: string;
    kit_goalkeeper_away: string;
    kit_version: string;
    kit_current: string;
    kit_type: KitType;
}