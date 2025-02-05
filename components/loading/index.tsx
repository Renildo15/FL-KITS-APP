import React from "react";
import { ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { Text, View } from "../Themed";

export default function LoadingIndicator({ message = "Carregando..." }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

