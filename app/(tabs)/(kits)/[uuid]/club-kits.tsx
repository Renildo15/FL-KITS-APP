import ClubKitsList from "@/components/kits/club-kits/club-kits-list";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

export default function ClubKits() {
    const { uuid } = useLocalSearchParams();
    return (
        <ScrollView
            contentContainerStyle={{flex:1,width: '100%', alignItems: 'center'}}
        >
            <View style={{flex:1, width: "100%", alignItems: 'center'}}>
                <Text
                    style={{fontSize: 20, margin: 20, fontWeight:"bold"}}
                >
                    Kits
                </Text>
                <ClubKitsList uuid={uuid as string}/>
            </View>
        </ScrollView>
    )
}