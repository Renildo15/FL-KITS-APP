import React from "react";
import CardMain from "@/components/home/card-main";
import { styles } from "../styles";
import KitsList from "@/components/kits/kits-list";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useClubDetail } from "@/hooks/useClub";
import ErrorMessage from "@/components/error-message";
import LoadingIndicator from "@/components/loading";

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
                <ErrorMessage message="Falha ao carregar clube. Tente novamente!" />
                ) : isLoading ? (
                <LoadingIndicator />
                ) : (
                <CardMain isClickable={false} club={club}/>
                )}
            <KitsList club={club}/>
        </ScrollView>
    )
}