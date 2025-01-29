import { View } from "@/components/Themed";
import { Image} from "react-native";
import CardContent from "../card-content";
import { styles } from "../styles";
import { Club } from "@/types/clubs";

interface ICardMainProps {
    isClickable: boolean;
    club: Club | null
}

export default function CardMain({isClickable, club}: ICardMainProps) {
    return (
        <View style={{width: '100%', borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
            <View style={styles.container_image}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: club?.emblem_versions.original,
                    }}
                    resizeMode="cover"
                />
            </View>
            <CardContent 
                name={club?.name} 
                federation={club?.federation}
                isClickable={isClickable}
            />
        </View>
    )
}
