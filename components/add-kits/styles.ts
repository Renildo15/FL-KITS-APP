import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 5,
        height: 1,
        width: '80%',
    },
    add_button: {
        borderWidth: 1,
        borderColor: "gray",
        width:"100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        backgroundColor:"#f0f0f0",
        borderRadius: 5,
    },

    text_button: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    }, 
    card_club: {
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        gap: 10,
        backgroundColor:"#f0f0f0",
        borderRadius: 5,
    },
    club_info: {
        flexDirection: "column",
        gap: 5,
        backgroundColor:"#f0f0f0",
    },
    club_name: {
        fontSize: 16,
        fontWeight: "bold",
    },

    federation: {
        fontSize: 14,
        fontWeight: "bold",
        color: "gray",
    },
    club_kits: {
        backgroundColor:"#f0f0f0",
    },
    club_kits_text: {
        fontSize: 12,
        fontWeight: "bold",
        color: "gray",
    },

    club_info_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "75%",
        alignItems: "center",
        backgroundColor:"#f0f0f0",
    },
    closeButton: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 12,
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    closeButtonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
});
