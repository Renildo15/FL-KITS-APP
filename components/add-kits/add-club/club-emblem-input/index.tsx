import { View, Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import PickerImageButton from "@/components/picker-image-button";

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
            <PickerImageButton pickImage={pickImage} height={400}/>
        </View>
    )
}