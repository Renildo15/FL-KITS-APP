import React from "react";
import { View } from "@/components/Themed";
import CardMain from "@/components/home/card-main";
import { styles } from "../styles";
import KitsList from "@/components/kits/kits-list";

export default function Detail() {
    return (
        <View style={styles.container}>
            <CardMain/>
            <KitsList/>
        </View>
    )
}