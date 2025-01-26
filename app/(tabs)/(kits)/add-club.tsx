import { View, Text } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import ClubInput from "@/components/add-kits/add-club/club-input";
import ClubEmblemInput from "@/components/add-kits/add-club/club-emblem-input";
import ClubEmblem from "@/components/add-kits/add-club/club-emblem";
import AddClubButton from "@/components/add-kits/add-club/add-club-button";

export default function AddClub() {
    const [image, setImage] = useState<string>('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20, width: '100%'}}>
            <View>
                <Text
                    style={{fontSize: 20, marginBottom: 20}}
                >
                    Adicionar novo clube
                </Text>
            </View>
            <ClubInput/>
            {image ? <ClubEmblem uri={image}/> : <ClubEmblemInput pickImage={pickImage}/>}
           <AddClubButton/>
        </View>
    )
}