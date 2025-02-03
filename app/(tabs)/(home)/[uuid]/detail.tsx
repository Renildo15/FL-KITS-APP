import React from "react";
import CardMain from "@/components/home/card-main";
import { styles } from "../styles";
import KitsList from "@/components/kits/kits-list";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useClubDetail } from "@/hooks/useClub";
import { Text } from "@/components/Themed";

export default function Detail() {
    const { uuid } = useLocalSearchParams();

    const {
        club,
        isError,
        isLoading
    } = useClubDetail(uuid as string, false)

    return (
        <ScrollView 
            contentContainerStyle={styles.contentContainer}
        >
             { isError ? (
                <Text>Erro</Text>
                ) : isLoading ? (
                <Text>Carregando</Text>
                ) : (
                <CardMain isClickable={false} club={club}/>
                )}
            <KitsList club={club}/>
        </ScrollView>
    )
}