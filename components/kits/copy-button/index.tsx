import { View, Text } from "@/components/Themed";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";
import * as Clipboard from 'expo-clipboard';

interface ICopyButtonProps {
    emblem: string;
}

export default function CopyButton({emblem}: ICopyButtonProps) {
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(emblem);
    }
    return (
        <View>
            <TouchableOpacity
                style={styles.copy_button}
                activeOpacity={0.8}
                onPress={copyToClipboard}
            >
                <Text
                    style={{color: 'white'}}
                >
                    Copiar url
                </Text>
            </TouchableOpacity>
        </View>
    )
}