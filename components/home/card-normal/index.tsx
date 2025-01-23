import { View } from "@/components/Themed";
import { Image, TouchableOpacity } from "react-native";
import CardContent from "../card-content";
import { styles } from "../styles";


interface ICardNormalProps {
    name: string;
    federation: string;
}

export default function CardNormal( {name, federation}: ICardNormalProps ) {
    return (
        <TouchableOpacity style={styles.container_card_normal}>
            <CardContent name={name} federation={federation}/>
            <Image
                style={{width: 80, height: 80}}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Celtic_FC_crest.svg/1200px-Celtic_FC_crest.svg.png',
                }}
            />
        </TouchableOpacity>
        )
}