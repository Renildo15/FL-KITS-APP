import { Stack } from "expo-router";
import React from "react";


export default function KitsRootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="add-club" options={{headerShown: false}}/>
            <Stack.Screen name="club-kits" options={{headerShown: false}}/>
            <Stack.Screen name="add-kit" options={{headerShown: false}}/>
        </Stack>
    )
}