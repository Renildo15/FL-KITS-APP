import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Text } from "@/components/Themed";
import { styles } from "../styles";
import { router } from "expo-router";

export default function AddButton() {
    return(
        <TouchableOpacity
            style={styles.add_button}
            onPress={() => router.push('/(tabs)/(kits)/add-club')}
        >
            <FontAwesome name="plus" size={24} color="#A31C1C" />
            <Text style={styles.text_button}>Adicionar novo clube</Text>
        </TouchableOpacity>
    )
}