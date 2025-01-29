import { Text, View } from "@/components/Themed";
import EmblemKit from "../emblem-kit";
import { styles } from "../styles";
import CardKit from "../card-kit";
import { Club } from "@/types/clubs";

interface IKitsListProps {
    club: Club | null
}

export default function KitsList({club}: IKitsListProps) {

    return (
        <View style={styles.container}>
            <EmblemKit
                emblem={club?.emblem_versions.original ?? ""}
            />
            {club?.kits && club.kits.length > 0 ? (
                club.kits.map((kit, index) => (
                    <View key={index}>
                        <CardKit url={kit.kit_home_url} kit_name="Home Kit" />
                        <CardKit url={kit.kit_away_url} kit_name="Away Kit" />
                        <CardKit url={kit.kit_goalkeeper_home_url} kit_name="Home Goalkeeper Kit" />
                        <CardKit url={kit.kit_goalkeeper_away_url} kit_name="Away Goalkeeper Kit" />
                    </View>
                ))
            ) : (
                <Text style={{padding:30}}>Nenhum kit disponível</Text>
            )}
        </View>
    )
}