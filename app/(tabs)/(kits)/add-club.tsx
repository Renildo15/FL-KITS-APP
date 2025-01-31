import { View, Text } from "@/components/Themed";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import ClubInput from "@/components/add-kits/add-club/club-input";
import ClubEmblemInput from "@/components/add-kits/add-club/club-emblem-input";
import ClubEmblem from "@/components/add-kits/add-club/club-emblem";
import AddButton from "@/components/add-kits/add-club/add-club-button";
import RadioButton from "@/components/radio-button";
import { ScrollView } from "react-native";

export default function AddClub() {
    const [image, setImage] = useState<string>('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: false,
            aspect: [1, 1],
            quality: 1
        })

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <ScrollView 
            contentContainerStyle={{ backgroundColor:"white", flexGrow: 1,justifyContent: 'flex-start', alignItems: 'center', padding: 20, width: '100%'}}
            keyboardShouldPersistTaps="handled"
        >
            <View>
                <Text
                    style={{fontSize: 20, marginBottom: 20}}
                >
                    Adicionar novo clube
                </Text>
            </View>
            <ClubInput/>
            <RadioButton/>
            {image ? <ClubEmblem uri={image}/> : <ClubEmblemInput pickImage={pickImage}/>}
           <AddButton title="Adicionar clube"/>
        </ScrollView>
    )
}