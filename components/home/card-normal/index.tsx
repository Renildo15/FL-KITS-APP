import { TouchableOpacity } from "react-native";
import CardContent from "../card-content";
import { styles } from "../styles";
import { useRouter } from "expo-router";
import Emblem from "@/components/emblem";


interface ICardNormalProps {
    id: string;
    name: string;
    federation: string;
}

export default function CardNormal( {name, federation, id}: ICardNormalProps ) {
    const router = useRouter();
    return (
        <TouchableOpacity 
            style={styles.container_card_normal}
            onPress={() => router.push(`/(tabs)/(home)/${id}/detail`)}
        >
            <CardContent name={name} federation={federation}/>
            <Emblem
                uri='https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Celtic_FC_crest.svg/1200px-Celtic_FC_crest.svg.png'
                width={80}
                height={80}
            />
        </TouchableOpacity>
        )
}