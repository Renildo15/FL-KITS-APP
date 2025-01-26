import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    kit_card_header: {
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-between", 
        backgroundColor:"#A31C1C", 
        padding:5,
        borderTopEndRadius:5,
        borderTopStartRadius:5
    },
    badge: {
        width:50, 
        alignItems: "center", 
        borderRadius: 5
    },
    add_kit_button: {
        width:"100%", 
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"center", 
        height:50, 
        gap:10, 
        borderRadius:5, 
        backgroundColor:"#A31C1C"
    }
})