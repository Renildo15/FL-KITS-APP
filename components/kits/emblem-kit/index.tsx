import Emblem from "@/components/emblem";
import { View, Text } from "@/components/Themed";
import { TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import * as Clipboard from 'expo-clipboard';
import CopyButton from "../copy-button";
import UrlInput from "../url-input";


interface IEmblemKitProps {
    emblem: string;
}

export default function EmblemKit({emblem}: IEmblemKitProps) {
    return (
        <View style={styles.emblem_content}>
            <Emblem
                height={200}
                width={200}
                uri={emblem}
            />
            <UrlInput
                url={emblem}
            />
            <CopyButton
                emblem={emblem}
            />
        </View>   
    )
}