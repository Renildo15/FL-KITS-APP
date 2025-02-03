import NewKit from "@/components/add-kits/new-kit";
import { View, Text } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";


export default function AddKit() {
    const { uuid } = useLocalSearchParams();
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20, width: '100%'}}>
            <View>
                <Text
                    style={{fontSize: 20, marginBottom: 20}}
                >
                    Adicionar novo kit
                </Text>
            </View>
            <NewKit clubID={uuid as string}/>
        </View>
    )
}
