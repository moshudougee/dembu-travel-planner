import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PlaceCard from './PlaceCard'

const PlannedTrip = ({ details }) => {
  return (
    <View
        style={{
            marginTop: 10,
        }}
    >
        <Text
            style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
            }}
        >
            🏕️ Plan Details
        </Text>

        {Object.entries(details).map(([day,details]) => {
            return (
                <View key={day}>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                            marginTop: 20,
                        }}
                    >
                        Day {parseInt(day) + 1}
                    </Text>
                    {details.places.map((place,index) => {
                        return (
                            <PlaceCard place={place} key={index} />
                        )
                    })}
                </View>
            )
        })}

    </View>
  )
}

export default PlannedTrip