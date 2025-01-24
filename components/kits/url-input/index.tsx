import { View, Text } from "@/components/Themed";
import { TextInput } from "react-native";
import { styles } from "../styles";

interface IUrlInputProps {
    url: string;
}

export default function UrlInput({url}: IUrlInputProps) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Text>URL:</Text>
            <TextInput
                value={url}
                style={styles.input}
                editable={false}
            />
        </View>
    )
}