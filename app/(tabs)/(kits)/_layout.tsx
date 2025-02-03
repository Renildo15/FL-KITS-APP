import { Stack } from "expo-router";
import React from "react";


export default function KitsRootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="add-club" options={{headerShown: false}}/>
            <Stack.Screen name="[uuid]/club-kits" options={{headerShown: false}}/>
            <Stack.Screen name="[uuid]/add-kit" options={{headerShown: false}}/>
        </Stack>
    )
}