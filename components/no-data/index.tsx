import { FontAwesome } from "@expo/vector-icons"
import { View, Text } from "../Themed"
import { styles } from "./styles"

interface INoDataProps {
    message: string
}

export default function NoData ({message="Nenhum dado disponível"}: INoDataProps) {
    return (
        <View style={styles.container}>
            <FontAwesome name="exclamation-triangle" size={50} color={"#999"}/>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}   