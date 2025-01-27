import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Text } from "../Themed";

interface IPickerImageButton {
    pickImage: () => void;
    height: number
}

export default function PickerImageButton({ pickImage, height }: IPickerImageButton) {
    return(
        <TouchableOpacity
                style={{borderWidth: 1, borderColor: 'gray', width: '100%', height:height, borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9'}}
                onPress={pickImage}
            >
                <FontAwesome name="image" size={96} color="#A31C1C" />
                <Text>Selecionar imagem</Text>
            </TouchableOpacity>
    )
}