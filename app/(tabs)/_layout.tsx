import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { View } from '@/components/Themed';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#A31C1C',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Clubs',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Link href="/search" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="search"
                      size={25}
                      color={'#A31C1C'}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="gear"
                      size={25}
                      color={'#A31C1C'}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(kits)"
        options={{
          title: 'Add Kits',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-circle" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Link href="/search" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="search"
                      size={25}
                      color={'#A31C1C'}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="gear"
                      size={25}
                      color={'#A31C1C'}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
