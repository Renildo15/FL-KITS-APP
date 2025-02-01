import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed"

interface IRadioButtonProps {
    federation: string;
    setFederation: React.Dispatch<React.SetStateAction<string>>;
}

export default function RadioButton({federation, setFederation}: IRadioButtonProps) {
    const federations = ["FCH", "FCR", "FCM"];
    return(
        <View style={{width:"100%", paddingVertical:10}}>
            <View style={styles.wrapper}>
                { federations.map(type => (
                    <View key={type} style={styles.type}>
                        <Text style={styles.option}>{type}</Text>
                        <TouchableOpacity
                            onPress={() => setFederation(type)}
                            style={styles.outter}
                        >
                            { federation === type && <View style={styles.inner}/>}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outter: {
        width: 20,
        height: 20,
        borderWidth:1,
        borderRadius:15,
        justifyContent: "center",
        alignItems:"center"

    },
    inner: {
        width: 12,
        height: 12,
        backgroundColor: "#A31C1C",
        borderRadius: 10
    },
    wrapper: {
        flexDirection: "row",
        justifyContent:"flex-start",
        gap:10
    },
    type: {
        width: "22%",
        alignItems: "center",
        flexDirection:"row",
        gap: 5
    },
    option: {
        fontSize: 16,
    }
})