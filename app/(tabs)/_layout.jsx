import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY
        }}
    >
        <Tabs.Screen 
            name='mytrip'
            options={{
                tabBarLabel: 'My Trip',
                tabBarIcon: ({ focused, color }) => (
                    <Ionicons 
                        size={24}
                        color={color}
                        name={focused ? 'location-sharp' : 'location-outline'}
                    />
                )
            }}
        />
        <Tabs.Screen 
            name='discover'
            options={{
                tabBarLabel: 'Discover',
                tabBarIcon: ({ focused, color }) => (
                    <Ionicons 
                        size={24}
                        color={color}
                        name={focused ? 'globe-sharp' : 'globe-outline'}
                    />
                )
            }}
        />
        <Tabs.Screen 
            name='profile'
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused, color }) => (
                    <Ionicons 
                        size={24}
                        color={color}
                        name={focused ? 'people-circle' : 'people-circle-outline'}
                    />
                )
            }}
        />
    </Tabs>
  )

}

export default TabLayout