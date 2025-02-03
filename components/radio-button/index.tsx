import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed"

interface IRadioButtonProps {
    option: string;
    setOption: React.Dispatch<React.SetStateAction<any>>;
    list: string[]
}

export default function RadioButton({option, setOption, list}: IRadioButtonProps) {
    return(
        <View style={{width:"100%", paddingVertical:10}}>
            <View style={styles.wrapper}>
                { list.map(type => (
                    <View key={type} style={styles.type}>
                        <Text style={styles.option}>{type.toUpperCase()}</Text>
                        <TouchableOpacity
                            onPress={() => setOption(type)}
                            style={styles.outter}
                        >
                            { option === type && <View style={styles.inner}/>}
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