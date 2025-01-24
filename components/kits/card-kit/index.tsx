import { View, Text } from "@/components/Themed";
import { styles } from "../styles";
import Emblem from "@/components/emblem";
import UrlInput from "../url-input";
import CopyButton from "../copy-button";

interface ICardKitProps {
    url: string;
    kit_name: string;
}

export default function CardKit({url, kit_name}: ICardKitProps) {
    return (
        <View style={styles.emblem_content}>
            <View style={{alignItems: 'center', marginBottom: 10}}>
                <Text
                    style={{fontSize: 15, fontWeight: 'bold'}}
                >
                    {kit_name}
                </Text>
            </View>
            <View style={styles.kit_content}>
                <Emblem
                    height={200}
                    width={200}
                    uri={url}
                />
            </View>
            <UrlInput
                url={url}
            />
            <CopyButton
                emblem={url}
            />
        </View>   
    )
}