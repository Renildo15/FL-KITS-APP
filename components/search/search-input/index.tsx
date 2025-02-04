import { View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "../styles";


interface ISearchInputProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}
export default function SearchInput(props: ISearchInputProps) {
    return (
        <View style={styles.input_search_container}>
            <TextInput
                placeholder='Buscar clube'
                style={styles.input_search}
                value={props.searchTerm}
                onChangeText={props.setSearchTerm}
              />
              <FontAwesome name="search" color={"gray"} size={24} />
          </View>
    )
}