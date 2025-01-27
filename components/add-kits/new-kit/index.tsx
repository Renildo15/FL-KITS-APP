import { View } from "@/components/Themed";
import React, { useState } from "react";
import { Alert, FlatList, ListRenderItem } from "react-native";
import PickerImageKit from "../picker-image-kit";
import * as ImagePicker from 'expo-image-picker';
import AddButton from "../add-club/add-club-button";

export default function NewKit() {
    const [image, setImage] = useState<string>('');
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
            <FlatList
                data={kits}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{width:"100%", paddingBottom: 50}}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<AddButton title="Adicionar kit"/>}
            />
        </View>
    )
}