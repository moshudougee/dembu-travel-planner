import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const StartNewTripCard = () => {
    const router = useRouter()

  return (
    <View
        style={{
            padding: 20,
            marginTop: 50,
            display: 'flex',
            alignItems: 'center',
            gap: 25,
        }}
    >
        <Ionicons name='location-sharp' color={Colors.PRIMARY} size={30} />
        <Text
            style={{
                fontSize: 25,
                fontWeight: 'outfit-medium',
            }}
        >
            No trips planned yet
        </Text>
        <Text
            style={{
                fontSize: 20,
                fontWeight: 'outfit',
                textAlign: 'center',
                color: Colors.GRAY,
            }}
        >
            Looks like its time to plan a new travel experience! Get Started below
        </Text>
        <TouchableOpacity
            style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                paddingHorizontal: 30,
            }}
            onPress={() => router.push('/create-trip/search-place')}
        >
            <Text
                style={{
                    color: Colors.WHITE,
                    fontFamily: 'outfit-medium',
                    fontSize: 17,
                }}
            >
                Start a new trip
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default StartNewTripCard