import { Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, useColorScheme } from "react-native";
import { styles } from "../styles";

interface ISettingsButtonProps{
    isThemed: boolean;
    icon: keyof typeof FontAwesome.glyphMap; 
    text: string;
  }
  
export default function SettingsButton(props: ISettingsButtonProps) {
    let colorScheme = useColorScheme()
    const themed = colorScheme == "dark" ? "escuro" : "claro"
    return (
      <TouchableOpacity
        style={styles.button}
      >
        <FontAwesome name={props.icon} size={30} color={'gray'}/>
        <Text style={{fontWeight:"700", fontSize:20}}>{props.text} { props.isThemed ? <Text style={{fontWeight:"400"}}>:{themed}</Text> : null}</Text>
      </TouchableOpacity>
    )
}