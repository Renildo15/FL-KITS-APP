import { View, Text } from "@/components/Themed";
import { FlatList } from "react-native";
import CardClub from "../card-club";
import { styles } from "../styles";
import { useRecentsClubs } from "@/hooks/useRecentsClubs";

export default function RecentClubsList() {
    const {result} = useRecentsClubs();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Clubes recentes</Text>
            <FlatList
                style={{width: "100%"}}
                data={result.results}
                renderItem={({item}) => (
                    <CardClub
                        name={item.name}
                        emblem={item.emblem_versions.original}
                        federation={"FCH"}
                        kits={item.kits}
                    />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}