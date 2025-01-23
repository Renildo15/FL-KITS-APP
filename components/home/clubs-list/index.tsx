import { FlatList } from "react-native";
import CardNormal from "../card-normal";
import { View } from "@/components/Themed";
import { home } from "@/data/home";

export default function ClubsList() {
    return (
        <View style={{width: '100%'}}>
            <FlatList
                data={home}
                renderItem={({item}) => <CardNormal id={item.id} name={item.name} federation={item.federation}/>}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 70 }}
            />
        </View>
    )
}