import { View, Text } from "@/components/Themed";
import { FlatList } from "react-native";
import CardClub from "../card-club";
import { styles } from "../styles";
import { useRecentsClubs } from "@/hooks/useRecentsClubs";

export default function RecentClubsList() {
    const {result, isError, isLoading} = useRecentsClubs();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Clubes recentes</Text>
            { isError ? (
                <Text>Error</Text>
            ): isLoading ? (
                <Text>Carregando</Text>
            ) : (
                <FlatList
                    style={{width: "100%"}}
                    data={result.results}
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
                />
            )}
        </View>
    )
}