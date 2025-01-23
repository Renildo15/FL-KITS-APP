import { Stack } from "expo-router";
import React from "react";


export default function HomeRootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="[uuid]/detail" options={{headerShown: false}}/>
        </Stack>
    )
}