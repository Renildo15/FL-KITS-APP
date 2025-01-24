import { View } from "@/components/Themed";
import { Image} from "react-native";
import { home } from "@/data/home";
import CardContent from "../card-content";
import { styles } from "../styles";

interface ICardMainProps {
    isClickable: boolean;
}

export default function CardMain({isClickable}: ICardMainProps) {
    return (
        <View style={{width: '100%', borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
            <View style={styles.container_image}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Celtic_FC_crest.svg/1200px-Celtic_FC_crest.svg.png',
                    }}
                    resizeMode="cover"
                />
            </View>
            <CardContent 
                name={home[0].name} 
                federation={home[0].federation}
                isClickable={isClickable}
            />
        </View>
    )
}
