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
import { addClub } from "@/hooks/useAddClub";
import { UseClubs } from "@/hooks/useClubs";
import { useRecentsClubs } from "@/hooks/useRecentsClubs";
import { federations } from "@/utils";


export default function AddClub() {
    const [image, setImage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [federation, setFederation] = useState('')

    const [errors, setErrors] = useState<IClubErrors>({})

    const { refetch } = UseClubs();
    const { refetchRecentClubs } = useRecentsClubs();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: false,
            aspect: [1, 1],
            quality: 1
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    const validateForm = () => {
        let newErrors: typeof errors = {}

        if (!name.trim()) newErrors.name = "Nome do clube é obrigatório.";
        if (!federation) newErrors.federation = "Selecione um tipo de kit.";
        if (!image) newErrors.image = "Escolha um emblema para o clube.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const cleanFields = () => {
        setName('');
        setFederation('');
        setImage('');
        setErrors({});
    }

    const handleAddClub = async () => {
        if (!validateForm()) return;

        const data = new FormData();

        data.append('name', name);
        data.append('federation', federation);

        const response = await fetch(image)
        const blob = await response.blob();

        const imageName = name.replace(" ", "_").toLowerCase();

        //@ts-ignore
        data.append("emblem",{
            uri: image,
            name: `${imageName}.png`,
            type: blob.type,
         })

        try {
            const response = await addClub(data);
            if (response) {
                Alert.alert("Sucesso", "Clube cadastrado com sucesso!");
                refetch();
                refetchRecentClubs();
                cleanFields();
            } else {
                Alert.alert("Ocorreu um erro ao cadastrar o clube.");
            }

        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Ocorreu um erro ao tentar cadastrar o clube.");
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
            <ClubInput
                name={name}
                setName={setName}
            />
            {errors.name && <Text style={{ color: "red" }}>{errors.name}</Text>}
            <RadioButton
                option={federation}
                setOption={setFederation}
                list={federations}
            />
            {errors.federation && <Text style={{ color: "red" }}>{errors.federation}</Text>}
            {image ? <ClubEmblem uri={image}/> : <ClubEmblemInput pickImage={pickImage}/>}
            {errors.image && <Text style={{ color: "red" }}>{errors.image}</Text>}
           <AddButton title="Adicionar clube" onPress={handleAddClub} disabled={Object.keys(errors).length > 0}/>
        </ScrollView>
    )
}