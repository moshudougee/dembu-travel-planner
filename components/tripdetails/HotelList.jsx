import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import HotelCard from './HotelCard'

const HotelList = ({ hotelList }) => {
  return (
    <View
        style={{
            marginTop: 20,
        }}
    >
        <Text
            style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
            }}
        >
            🏨 Hotel Recommendation
        </Text>
        <FlatList 
            data={hotelList}
            renderItem={({item}) => (
                <HotelCard item={item} />
            )}
            keyExtractor={(item, index) => `${item.name} - ${index}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default HotelList