import { View, Text } from "@/components/Themed";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";

export default function AddClubButton() {
    return (
        <View style={{width: '100%', marginTop: 20}}>
            <TouchableOpacity
                style={styles.add_club_button}
            >
                <Text style={{color: 'white', fontSize: 16}}>Adicionar clube</Text>
            </TouchableOpacity>
        </View> 
)
}