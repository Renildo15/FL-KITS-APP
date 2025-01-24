import React from "react";
import CardMain from "@/components/home/card-main";
import { styles } from "../styles";
import KitsList from "@/components/kits/kits-list";
import { ScrollView } from "react-native";

export default function Detail() {
    return (
        <ScrollView 
            contentContainerStyle={styles.contentContainer}
        >
            <CardMain isClickable={false}/>
            <KitsList/>
        </ScrollView>
    )
}