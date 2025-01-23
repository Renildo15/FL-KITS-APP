import { View } from "@/components/Themed";

interface ICardEmblemProps {
    uri: string;
    width: number;
    height: number;
    name: string;
    federation: string;
    id: string;
    url: string;
}

export default function CardEmblem(props: ICardEmblemProps) {
    return (
        <View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    )
}