import Emblem from "@/components/emblem";
import { Text, View } from "@/components/Themed";
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";

interface ICardAllKitsProps {
    home_kit: string
    away_kit: string
    goalkeeper_home_kit: string
    goalkeeper_away_kit: string,
    kit_version: string,
    kit_type: string
}

export default function CardAllKits(props: ICardAllKitsProps) {
    const [isChecked, setChecked] = useState(false);

    return(
        <View>
            <View style={styles.kit_card_header}>
                <Text style={{color:"white", fontWeight:"bold"}}>{props.kit_version}</Text>
                <View style={styles.badge}>
                    <Text style={{fontWeight:"bold"}}>{props.kit_type}</Text>
                </View>
                <Checkbox  style={{margin:8}} value={isChecked} onValueChange={setChecked} />
            </View>
            <TouchableOpacity
                style={{flexDirection:"row", backgroundColor:"gray"}}
            >
                <Emblem
                    height={90}
                    width={90}
                    uri={props.home_kit}
                />
                <Emblem
                    height={90}
                    width={90}
                    uri={props.away_kit}
                />
                <Emblem
                    height={90}
                    width={90}
                    uri={props.goalkeeper_home_kit}
                />
                <Emblem
                    height={90}
                    width={90}
                    uri={props.goalkeeper_away_kit}
                />
            </TouchableOpacity>
        </View>
    )
}