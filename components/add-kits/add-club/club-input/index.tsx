import { View, Text } from "@/components/Themed";
import { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../styles";
export default function ClubInput() {
    const [name, setName] = useState('');
    return (
        <View style={{width: '100%'}}>
            <Text
                style={{fontSize: 16, marginBottom: 10}}
            >
                Nome do clube
            </Text>
            <TextInput
                style={styles.name_input}
                onChangeText={setName}
                value={name}
                placeholder="Nome do clube"
                
            />
        </View>
    )
}