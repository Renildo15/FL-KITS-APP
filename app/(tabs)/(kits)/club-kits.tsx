import ClubKitsList from "@/components/kits/club-kits/club-kits-list";
import { Text, View } from "@/components/Themed";
import { ScrollView } from "react-native";

export default function ClubKits() {
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
                <ClubKitsList/>
            </View>
        </ScrollView>
    )
}