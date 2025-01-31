import { View, Text } from "@/components/Themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "../styles";

interface IAddButtonProps extends TouchableOpacityProps{
    title: string;
    onPress: () => void;
}

export default function AddButton({title, onPress, ...props}:IAddButtonProps) {
    return (
        <View style={{width: '100%', marginTop: 20}}>
            <TouchableOpacity
                style={styles.add_club_button}
                onPress={onPress}
                {...props}
            >
                <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
            </TouchableOpacity>
        </View> 
)
}