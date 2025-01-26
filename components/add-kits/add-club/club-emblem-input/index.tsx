import { View, Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';

interface IClubEmblemInputProps {
    pickImage: () => void;
}

export default function ClubEmblemInput({pickImage}: IClubEmblemInputProps) {

    return(
        <View style={{width: '100%', marginTop: 20}}>
            <Text
                style={{fontSize: 16, marginBottom: 10}}
            >
                Emblema
            </Text>
            <TouchableOpacity
                style={{borderWidth: 1, borderColor: 'gray', width: '100%', height:400, borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9'}}
                onPress={pickImage}
            >
                <FontAwesome name="image" size={96} color="#A31C1C" />
                <Text>Selecionar imagem</Text>
            </TouchableOpacity>
        </View>
    )
}