import { View } from "@/components/Themed";
import { kits } from "@/data/kits";
import EmblemKit from "../emblem-kit";
import { styles } from "../styles";
import CardKit from "../card-kit";

export default function KitsList() {

    return (
        <View style={styles.container}>
            <EmblemKit
                emblem={kits.emblem}
            />
            {kits.kits.map((kit, index) => (
                <View key={index}>
                    <CardKit url={kit.kit_home_url} kit_name="Home kit" />
                    <CardKit url={kit.kit_away_url} kit_name="Away Kit"/>
                    <CardKit url={kit.kit_goalkeeper_home_url} kit_name="Home Goalkeeper Kit" />
                    <CardKit url={kit.kit_goalkeeper_away_url} kit_name="Away Goalkeeper Kit" />
                </View>
            ))}
        </View>
    )
}