import React from "react";
import { Text, View } from "@/components/Themed";
import EmblemKit from "../emblem-kit";
import { styles } from "../styles";
import CardKit from "../card-kit";
import { Club } from "@/types/clubs";

interface IKitsListProps {
    club: Club | null
}

export default function KitsList({club}: IKitsListProps) {
    const kits = Array.isArray(club?.kits) ? club.kits : [club?.kits];
    return (
        <View style={styles.container}>
            <EmblemKit
                emblem={club?.emblem_versions.original ?? ""}
            />
            {kits.length > 0 ? (
                kits.map((kit, index) => (
                    kit ? (
                        <View key={index}>
                            <CardKit url={kit.kit_home_url} kit_name="Home Kit" />
                            <CardKit url={kit.kit_away_url} kit_name="Away Kit" />
                            <CardKit url={kit.kit_goalkeeper_home_url} kit_name="Home Goalkeeper Kit" />
                            <CardKit url={kit.kit_goalkeeper_away_url} kit_name="Away Goalkeeper Kit" />
                        </View>
                    ) : null
                ))
            ) : (
                <Text style={{ padding: 30 }}>Nenhum kit disponível</Text>
            )}
        </View>
    )
}