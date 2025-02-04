import Emblem from "@/components/emblem";
import { Text, View } from "@/components/Themed";
import Checkbox from 'expo-checkbox';
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import { useKitCurrent } from "@/hooks/useKitCurrent";
import { useClubs } from "@/hooks/useClubs";
import { useRecentsClubs } from "@/hooks/useRecentsClubs";

interface ICardAllKitsProps {
    id: string;
    home_kit: string;
    away_kit: string;
    goalkeeper_home_kit: string;
    goalkeeper_away_kit: string;
    kit_version: string;
    kit_type: string;
    kit_current: boolean;
    refetch: () => void;
}

export default function CardAllKits(props: ICardAllKitsProps) {
    const [isChecked, setChecked] = useState<boolean>();
    const { refetch } = useClubs();
    const { refetchRecentClubs } = useRecentsClubs();

    useEffect(() => {
        setChecked(props.kit_current)
    })

    const handleCurrentKit = async () => {
    
        try {
            await useKitCurrent(props.id)
            refetch();
            refetchRecentClubs();
            props.refetch()
            setChecked(true)
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Ocorreu um erro ao tentar alterar kit atual.");
        }

    }

    return(
        <View>
            <View style={styles.kit_card_header}>
                <Text style={{color:"white", fontWeight:"bold"}}>{props.kit_version}</Text>
                <View style={styles.badge}>
                    <Text style={{fontWeight:"bold"}}>{props.kit_type}</Text>
                </View>
                <Checkbox  style={{margin:8}} value={isChecked} onValueChange={handleCurrentKit} />
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