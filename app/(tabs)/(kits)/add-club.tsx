import { View, Text } from "@/components/Themed";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import ClubInput from "@/components/add-kits/add-club/club-input";
import ClubEmblemInput from "@/components/add-kits/add-club/club-emblem-input";
import ClubEmblem from "@/components/add-kits/add-club/club-emblem";
import AddButton from "@/components/add-kits/add-club/add-club-button";
import RadioButton from "@/components/radio-button";
import { Alert, ScrollView } from "react-native";
import { IClubErrors } from "@/types/club-errors";


export default function AddClub() {
    const [image, setImage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [kitType, setKitType] = useState('')

    const [errors, setErrors] = useState<IClubErrors>({})

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
            setErrors(prev => ({...prev, image: undefined}));
        }
    }

    const validateForm = () => {
        let newErrors: typeof errors = {}

        if (!name.trim()) newErrors.name = "Nome do clube é obrigatório.";
        if (!kitType) newErrors.kitType = "Selecione um tipo de kit.";
        if (!image) newErrors.image = "Escolha um emblema para o clube.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleAddClub = () => {
        console.log("opa")
        if (!validateForm()) return;

        Alert.alert("Sucesso", "Clube cadastrado com sucesso!");
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
            <ClubInput
                name={name}
                setName={setName}
            />
            {errors.name && <Text style={{ color: "red" }}>{errors.name}</Text>}
            <RadioButton
                kitType={kitType}
                setKitType={setKitType}
            />
            {errors.kitType && <Text style={{ color: "red" }}>{errors.kitType}</Text>}
            {image ? <ClubEmblem uri={image}/> : <ClubEmblemInput pickImage={pickImage}/>}
            {errors.image && <Text style={{ color: "red" }}>{errors.image}</Text>}
           <AddButton title="Adicionar clube" onPress={handleAddClub} disabled={Object.keys(errors).length > 0}/>
        </ScrollView>
    )
}