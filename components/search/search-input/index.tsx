import { View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../styles";

export default function SearchInput() {
    const [name, setName] = useState("")
    return (
        <View style={styles.input_search_container}>
            <TextInput
                placeholder='Buscar clube'
                style={styles.input_search}
                value={name}
                onChangeText={setName}
              />
              <FontAwesome name="search" color={"gray"} size={24} />
          </View>
    )
}