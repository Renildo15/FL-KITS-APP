import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "../Themed";
import { styles } from "./styles";

interface IErrorMessage {
    message: string
}

export default function ErrorMessage ({ message = "Erro ao carregar os dados" }: IErrorMessage) {
    return (
        <View style={styles.container}>
            <FontAwesome name="exclamation-circle" size={50} color="red" />
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};
  