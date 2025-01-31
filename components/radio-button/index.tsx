import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed"
import { useState } from "react";

interface IRadioButtonProps {
    kitType: string;
    setKitType: React.Dispatch<React.SetStateAction<string>>;
}

export default function RadioButton({kitType, setKitType}: IRadioButtonProps) {
    const kitTypes = ["FTS", "FL"];
    return(
        <View style={{width:"100%", paddingVertical:10}}>
            <View style={styles.wrapper}>
                { kitTypes.map(type => (
                    <View key={type} style={styles.type}>
                        <Text style={styles.option}>{type}</Text>
                        <TouchableOpacity
                            onPress={() => setKitType(type)}
                            style={styles.outter}
                        >
                            { kitType === type && <View style={styles.inner}/>}
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

        alignItems: "center",
        flexDirection:"row",
        gap:10
    },
    option: {
        fontSize: 16,
        textTransform: 'capitalize'
    }
})