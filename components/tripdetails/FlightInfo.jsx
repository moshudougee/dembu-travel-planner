import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Colors } from '../../constants/Colors'

const FlightInfo = ({ flightData}) => {
  return (
    <View
        style={{
            marginTop: 20,
            padding: 10,
        }}
        showsHorizontalScrollIndicator={false}
    >
        <Text
            style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
            }}
        >
            ✈ Flights
        </Text>
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                marginTop: 10,
                backgroundColor: Colors.LIGHT_GRAY,
                borderRadius: 15,
                 padding: 10,
                width: 300,
            }}
        >
            <Text style={{ fontFamily: 'outfit', fontSize: 17, }}>
                Airline: {flightData.airline}
            </Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 17, }}>
                Arrival City: {flightData.arrival_city}
            </Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 17, }}>
                Arrival Date & Time: {flightData.arrival_date} at {flightData.arrival_time}
            </Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 17, }}>
                Departure City: {flightData.departure_city}
            </Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 17, }}>
                Departure Date & Time: {flightData.departure_date} at {flightData.departure_time}
            </Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 17, }}>
                Flight No: {flightData.flight_number}
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontFamily: 'outfit', fontSize: 17, }}>
                    Price: {flightData.price}
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                        width: 100,
                        backgroundColor: Colors.PRIMARY,
                        borderRadius: 7,
                        marginTop: 7,
                    }}
                >
                    <Text
                        style={{
                            color: Colors.WHITE,
                            fontFamily: 'outfit',
                            textAlign: 'center'
                        }}
                    >
                        Book Here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default FlightInfo