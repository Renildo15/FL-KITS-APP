import { View, Text } from "@/components/Themed";
import { Image } from "react-native";

interface IClubEmblemProps {
    uri: string;
}

export default function ClubEmblem({ uri }: IClubEmblemProps) {
    return(
        <View style={{width: '100%'}}>
            <Text
                style={{fontSize: 16, marginBottom: 10}}
            >
               Emblema
            </Text>
            <Image 
                source={{ uri: uri }} 
                style={{
                    width: "100%",
                    height: 400,
                    borderRadius: 5
                }} 
            />
        </View>
    )
}

