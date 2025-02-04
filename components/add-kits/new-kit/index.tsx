import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { Alert, FlatList, ListRenderItem, TextInput } from "react-native";
import PickerImageKit from "../picker-image-kit";
import * as ImagePicker from 'expo-image-picker';
import AddButton from "../add-club/add-club-button";
import { KitType } from "@/types/kits";
import RadioButton from "@/components/radio-button";
import { kTypes } from "@/utils";
import Checkbox from "expo-checkbox";
import { IKitErrors } from "@/types/kit-errors";
import { AddKit } from "@/hooks/useAddKit";
import { useClubs } from "@/hooks/useClubs";
import { useRecentsClubs } from "@/hooks/useRecentsClubs";
import { useClubDetail } from "@/hooks/useClub";
import { FetcherImage } from "@/utils/fetcher-images";

interface INewKitProps {
    clubID: string;
}

export default function NewKit({clubID}: INewKitProps) {
    const [kitVersion, setKitVersion] = useState<string>('');
    const [kitCurrent, setKitCurrent] = useState<boolean>(false);
    const [kitType, setKitType] = useState<KitType>(KitType.FTS);

    const [kitErrors, setKitErrors] = useState<IKitErrors>({});

    const { club } = useClubDetail(clubID, false);
    const { refetch } = useClubs();
    const { refetchRecentClubs } = useRecentsClubs();

    interface Kit {
        id: string;
        title: string;
        imageUri?: string;
    }

    const [kits, setKits] = useState<Kit[]>([
        { id: "1", title: "Home Kit" },
        { id: "2", title: "Away Kit" },
        { id: "3", title: "Goalkeeper Home Kit" },
        { id: "4", title: "Goalkeeper Away Kit" },
    ]);

    const validateForm = () => {
        let newErrors: typeof kitErrors = {}
        if(!kitVersion.trim()) newErrors.kitVersion = "A versão do kit é obrigátoria"

        setKitErrors(newErrors);

        return Object.keys(newErrors).length === 0
    }

    const cleanFields = () => {
        setKitCurrent(false);
        setKitVersion("");
    }

    const handleAddKit = async () => {
        if (!validateForm()) return;

        const data = new FormData();

        data.append("club", clubID)

        await FetcherImage("kit_home", kits[0].imageUri || "", `kit_home_${club?.name}`, data)
        await FetcherImage("kit_away", kits[1].imageUri || "", `kit_away_${club?.name}`, data)
        await FetcherImage("kit_goalkeeper_home", kits[2].imageUri || "", `kit_goalkeeper_home_${club?.name}`, data)
        await FetcherImage("kit_goalkeeper_away", kits[3].imageUri || "", `kit_goalkeeper_away_${club?.name}`, data)
    
        data.append("kit_version", kitVersion);
        data.append("kit_current", String(kitCurrent));
        data.append("kit_type", kitType);

        console.log(data)

        try {
            const response = await AddKit(data);
            if (response) {
                Alert.alert("Sucesso", "Kit adicionado com sucesso!");
                refetch();
                refetchRecentClubs();
                cleanFields();
            } else {
                Alert.alert("Ocorreu um erro ao cadastrar o kit.");
            }
        } catch (error) {
            console.error("Erro ao adicionar o kit:", error);
            Alert.alert("Erro", "Não foi possível adicionar o kit.");
        }
    }

     const pickImage = async (id: string) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: false,
            aspect: [1, 1],
            quality: 1
        })

        console.log(result);

        if (!result.canceled) {
            // Atualiza o estado do kit com a nova imagem
            const updatedKits = kits.map((kit) =>
                kit.id === id ? { ...kit, imageUri: result.assets[0].uri } : kit
            );
            setKits(updatedKits);
        }
    }

    const removeImage = (id: string) => {
        Alert.alert(
            "Remover Imagem",
            "Tem certeza de que deseja remover esta imagem?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Remover",
                    style: "destructive",
                    onPress: () => {
                        const updatedKits = kits.map((kit) =>
                            kit.id === id ? { ...kit, imageUri: undefined } : kit
                        );
                        setKits(updatedKits);
                    },
                }
            ]
        )
    }

    const renderItem: ListRenderItem<Kit> = ({ item }) => (
        <PickerImageKit
            title={item.title}
            pickImage={() => pickImage(item.id)}
            imageUri={item.imageUri}
            removeImage={() => removeImage(item.id)}
        />
    );
    return (
        <View style={{width:"100%"}}>
            <RadioButton
                option={kitType}
                setOption={setKitType}
                list={kTypes}
            />
            <TextInput
                placeholder="Versão"
                value={kitVersion}
                onChangeText={setKitVersion}
                style={{borderWidth:1, outline:"none", borderRadius:5, padding: 10, marginBottom: 5}}
            />
            {kitErrors.kitVersion && <Text style={{ color: "red" }}>{kitErrors.kitVersion}</Text>}
            <View style={{flexDirection:"row", gap: 10, paddingVertical:10}}>
                <Text style={{fontSize:14, fontWeight: "bold"}}>Atual</Text>
                <Checkbox value={kitCurrent} onValueChange={setKitCurrent}/>
            </View>
            <FlatList
                data={kits}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{width:"100%", paddingBottom: 180}}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<AddButton title="Adicionar kit" onPress={handleAddKit} disabled={Object.keys(kitErrors).length > 0}/>}
            />
        </View>
    )
}