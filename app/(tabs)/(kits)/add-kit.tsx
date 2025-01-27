import NewKit from "@/components/add-kits/new-kit";
import { View, Text } from "@/components/Themed";


export default function AddKit() {

    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20, width: '100%'}}>
            <View>
                <Text
                    style={{fontSize: 20, marginBottom: 20}}
                >
                    Adicionar novo kit
                </Text>
            </View>
            <NewKit/>
        </View>
    )
}
