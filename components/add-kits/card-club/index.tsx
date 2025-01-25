import Emblem from "@/components/emblem";
import { View, Text } from "@/components/Themed";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";

interface CardClubProps {
    name: string;
    emblem: string;
    federation: string;
    kits: string[];
}

export default function CardClub({name, emblem, federation, kits}: CardClubProps) {
    return(
        <TouchableOpacity
            onPress={() => console.log('Abrir detalhes do clube')}
            style={styles.card_club}
        >
            <Emblem
                height={60}
                width={60}
                uri={emblem}
            />
            <View
                style={styles.club_info_container}
            >
                <View style={styles.club_info}>
                    <Text style={styles.club_name}>{name}</Text>
                    <Text style={styles.federation}>{federation}</Text>
                </View>
                <View style={styles.club_kits}>
                    <Text
                        style={styles.club_kits_text}
                    >
                        {kits.length} kits
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}