import { TouchableOpacity } from "react-native";
import CardContent from "../card-content";
import { styles } from "../styles";
import { useRouter } from "expo-router";
import Emblem from "@/components/emblem";


interface ICardNormalProps {
    id: string;
    name: string;
    federation: string;
    uri: string;
}

export default function CardNormal( {name, federation, id, uri}: ICardNormalProps ) {
    const router = useRouter();
    return (
        <TouchableOpacity 
            style={styles.container_card_normal}
            onPress={() => router.push(`/(tabs)/(home)/${id}/detail`)}
        >
            <CardContent name={name} federation={federation}/>
            <Emblem
                uri={uri}
                width={80}
                height={80}
            />
        </TouchableOpacity>
        )
}