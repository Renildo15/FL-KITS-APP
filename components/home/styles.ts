import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container_image: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        overflow: 'hidden', // Garante que partes fora do contêiner não sejam exibidas
    },
    tinyLogo: {
        width: '100%', // Aumenta o tamanho da imagem para além do contêiner
        height: '100%', // Aumenta proporcionalmente, garantindo o recorte
    },
    content: {
        padding: 10,
    },
    team_name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    badge: {
        backgroundColor: '#A31C1C',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        width: 50,
        alignItems: 'center',
    },
    federation_name: {
        fontSize: 16,
        color: '#fff',
    },
    container_card_normal: {
        width: '100%', 
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 10
    }
});