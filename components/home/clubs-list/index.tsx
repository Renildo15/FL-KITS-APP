import { FlatList, RefreshControl } from "react-native";
import CardNormal from "../card-normal";
import { Text, View } from "@/components/Themed";
import { home } from "@/data/home";
import { UseClubs } from "@/hooks/useClubs";
import { useState } from "react";

export default function ClubsList() {
    const {
        result,
        isError,
        isLoading,
        refetch
    } = UseClubs();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
      };
    
    return (
        <View style={{width: '100%'}}>
            { isError ? (
                <Text>{isError.message}</Text>
            ) : isLoading ? (
                <Text>Carregando</Text>
            ) : (
                <FlatList
                    data={result.results}
                    renderItem={({item}) => <CardNormal id={item.id} name={item.name} federation={item.federation} uri={item.emblem_versions.original}/>}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 70 }}
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