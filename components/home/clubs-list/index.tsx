import { FlatList, RefreshControl } from "react-native";
import CardNormal from "../card-normal";
import { Text, View } from "@/components/Themed";
import { useClubs } from "@/hooks/useClubs";
import { useState } from "react";
import NoData from "@/components/no-data";
import ErrorMessage from "@/components/error-message";


interface IClubListProps{
    searchTerm?: string;
    option?: string;
}

export default function ClubsList({searchTerm, option}:IClubListProps) {
    const {
        result,
        isError,
        isLoading,
        refetch
    } = useClubs(searchTerm ?? undefined, option ?? undefined);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
      };
    
    return (
        <View style={{flex: 1}}>
            { isError ? (
                <ErrorMessage message="Falha ao carregar os clubes. Tente novamente!" />
            ) : isLoading ? (
                <Text>Carregando</Text>
            ) : (
                <FlatList
                    data={result.results}
                    renderItem={({item}) => <CardNormal id={item.id} name={item.name} federation={item.federation} uri={item.emblem_versions.original}/>}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 70 }}
                    showsVerticalScrollIndicator={false}
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