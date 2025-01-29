import { Text, View } from "@/components/Themed";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";

interface ITeamProps {
    name: string | undefined;
    federation: string | undefined;
    isClickable?: boolean;
}

export default function CardContent({ name, federation, isClickable }: ITeamProps) {
    return (
        <TouchableOpacity style={styles.content}
            onPress={() => {
                console.log('Clicou no card');
            }}
            disabled={!isClickable}
        >
            <Text style={styles.team_name}>{name}</Text>
            <View style={styles.badge}>
                <Text style={styles.federation_name}>
                    {federation}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

