import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    emblem_content: {
        alignItems: 'center',
        borderWidth: 1, 
        borderColor: 'white', 
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'black',
        backgroundColor: '#d4d4d4',
        borderRadius: 5,
    },
    copy_button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    kit_content: {
        backgroundColor: 'gray', 
        marginBottom: 10
    }
})