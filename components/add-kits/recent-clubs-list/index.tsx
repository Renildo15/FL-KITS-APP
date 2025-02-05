import { View, Text } from "@/components/Themed";
import { FlatList, RefreshControl } from "react-native";
import CardClub from "../card-club";
import { styles } from "../styles";
import { useRecentsClubs } from "@/hooks/useRecentsClubs";
import { useState } from "react";
import NoData from "@/components/no-data";
import ErrorMessage from "@/components/error-message";

export default function RecentClubsList() {
    const { resultRecentClubs, refetchRecentClubs, isError, isLoading} = useRecentsClubs();

    const [refreshing, setRefreshing] = useState(false);
    
    const onRefresh = async () => {
        setRefreshing(true);
        await refetchRecentClubs();
        setRefreshing(false);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Clubes recentes</Text>
            { isError ? (
                <ErrorMessage message="Falha ao carregar os clubes. Tente novamente!" />
            ): isLoading ? (
                <Text>Carregando</Text>
            ) : (
                <FlatList
                    style={{width: "100%"}}
                    data={resultRecentClubs.results}
                    renderItem={({item}) => (
                        <CardClub
                            id={item.id}
                            name={item.name}
                            emblem={item.emblem_versions.original}
                            federation={"FCH"}
                            kits={item.kits}
                        />
                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListEmptyComponent={<NoData message="Nenhum clube encontrado"/>}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={['#007bff']}
                        />
                    }
                />
            )}
        </View>
    )
}