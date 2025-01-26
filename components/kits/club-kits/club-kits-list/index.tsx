import { View, Text } from "@/components/Themed";
import CardAllKits from "../card-all-kits";
import { kits } from "@/data/kits";
import Emblem from "@/components/emblem";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles";

export default function ClubKitsList() {
    return(
        <View style={{alignItems:"center", width:"100%"}}>
            <Emblem
                height={200}
                width={200}
                uri={kits.emblem}
            />
            {kits.kits.map((kit, index) => (
                <View key={index}>
                    <CardAllKits
                        kit_version={kit.kit_version}
                        kit_type={kit.kit_type}
                        home_kit={kit.kit_home_url}
                        away_kit={kit.kit_away_url}
                        goalkeeper_away_kit={kit.kit_goalkeeper_away_url}
                        goalkeeper_home_kit={kit.kit_goalkeeper_home_url}
                    />
                </View>
            ))}
           <View style={{width:"100%", padding:10}}>
                <TouchableOpacity
                    style={styles.add_kit_button}
                >
                    <FontAwesome color="white" name="plus" size={24}/>
                    <Text style={{color:"white"}}>Novo Kit</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}