import { View, Text } from "@/components/Themed";
import { TextInput } from "react-native";
import { styles } from "../styles";

interface IClubInputProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function ClubInput({ name, setName}: IClubInputProps) {
    return (
        <View style={{width: '100%'}}>
            <Text
                style={{fontSize: 16, marginBottom: 10}}
            >
                Nome do clube
            </Text>
            <TextInput
                style={styles.name_input}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Nome do clube"
                
            />
        </View>
    )
}