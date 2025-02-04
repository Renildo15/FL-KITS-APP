import { View, Text } from "@/components/Themed";
import CardAllKits from "../card-all-kits";
import Emblem from "@/components/emblem";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles";
import { router } from "expo-router";
import { useClubDetail } from "@/hooks/useClub";

interface IClubKitsListProps {
    uuid: string
}

export default function ClubKitsList({ uuid }: IClubKitsListProps) {
    const { club, isError, isLoading, refetch } = useClubDetail(uuid, true)

    if (isLoading) {
        return <Text style={{ padding: 30 }}>Carregando kits...</Text>;
    }

    if (isError) {
        return <Text style={{ padding: 30, color: "red" }}>Erro ao carregar os kits.</Text>;
    }


    return(
        <View style={{alignItems:"center", width:"100%"}}>
            <Emblem
                height={200}
                width={200}
                uri={club?.emblem_versions.original ?? ""}
            />
            <View style={{gap: 10}}>
                {club?.kits && club.kits.length > 0 ? (
                    club.kits.map((kit, index) => (
                        <CardAllKits
                            key={index}
                            id={kit.id}
                            kit_version={kit.kit_version}
                            kit_type={kit.kit_type}
                            home_kit={kit.kit_home_url}
                            away_kit={kit.kit_away_url}
                            goalkeeper_away_kit={kit.kit_goalkeeper_away_url}
                            goalkeeper_home_kit={kit.kit_goalkeeper_home_url}
                            kit_current={kit.kit_current}
                            refetch={refetch}
                        />
                    ))
                ) : (
                    <Text style={{padding:30}}>Nenhum kit disponível</Text>
                )}
            </View>
           <View style={{width:"100%", padding:10}}>
                <TouchableOpacity
                    style={styles.add_kit_button}
                    onPress={() => router.push(`/(tabs)/(kits)/${uuid}/add-kit`)}
                >
                    <FontAwesome color="white" name="plus" size={24}/>
                    <Text style={{color:"white"}}>Novo Kit</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}