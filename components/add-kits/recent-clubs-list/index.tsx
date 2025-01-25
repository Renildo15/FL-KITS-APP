import { View, Text } from "@/components/Themed";
import { FlatList } from "react-native";
import CardClub from "../card-club";
import { clubs } from "@/data/clubs";
import { styles } from "../styles";

export default function RecentClubsList() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Clubes recentes</Text>
            <FlatList
                style={{width: "100%"}}
                data={clubs}
                renderItem={({item}) => (
                    <CardClub
                        name={item.name}
                        emblem={item.emblem}
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