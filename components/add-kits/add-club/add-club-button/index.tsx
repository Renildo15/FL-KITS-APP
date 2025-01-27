import { View, Text } from "@/components/Themed";
import { TouchableOpacity } from "react-native";
import { styles } from "../styles";

interface IAddButtonProps {
    title: string
}

export default function AddButton({title}:IAddButtonProps) {
    return (
        <View style={{width: '100%', marginTop: 20}}>
            <TouchableOpacity
                style={styles.add_club_button}
            >
                <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
            </TouchableOpacity>
        </View> 
)
}