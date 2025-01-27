import PickerImageButton from "@/components/picker-image-button";
import { View, Text } from "@/components/Themed";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";

interface IPickerImageKitProps {
    pickImage: () => void;
    removeImage: () => void;
    title: string
    imageUri?: string
}


export default function PickerImageKit({pickImage, title, imageUri, removeImage}: IPickerImageKitProps) {
    return (
        <View style={{width:"100%"}}>
            <Text style={{fontSize: 16, marginBottom: 10, fontWeight:"700"}}>{title}</Text>
            { imageUri ? (
                <View>
                    <Image
                       source={{ uri: imageUri }}
                       style={{
                           width: "100%",
                           height: 400,
                           borderRadius: 8,
                           marginBottom: 8,
                       }}
                   />
                    <TouchableOpacity style={styles.closeButton} onPress={removeImage}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            ):(
                <PickerImageButton height={400} pickImage={pickImage}/>
            )}
        </View>
    )
}