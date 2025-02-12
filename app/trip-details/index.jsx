import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import moment from 'moment'
import FlightInfo from '../../components/tripdetails/FlightInfo'
import HotelList from '../../components/tripdetails/HotelList'
import PlannedTrip from '../../components/tripdetails/PlannedTrip'

const TripDetails = () => {
    const [tripDetails, setTripDetails] = useState(null)
    const { trip } = useLocalSearchParams()
    const navigation = useNavigation()
    const [isUrlAccessible, setIsUrlAccessible] = useState(false)
    
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })

        setTripDetails(JSON.parse(trip))
    }, [trip])

    const imageUrl = tripDetails?.tripPlan?.travel_plan?.image_url
    //console.log(tripDetails)

    useEffect(() => {
         // Function to check if the URL is accessible
        const checkImageUrl = async (url) => {
            try {
                const response = await fetch(url);
                if (response.status === 200) {
                    setIsUrlAccessible(true)
                } else {
                    setIsUrlAccessible(false)
                }
            } catch (error) {
                setIsUrlAccessible(false)
            }
        };
        if (imageUrl) {
            checkImageUrl(imageUrl);
        }
    }, [imageUrl]);

    const formatData = (data) => {
        return JSON.parse(data)
    }

    if (!tripDetails) {
        return (
            <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
        )
    }

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
    >
        {isUrlAccessible ? 
                <Image 
                    source={{uri: imageUrl}}
                    style={{
                        width: '100%',
                        height: 330,
                        borderRadius: 15,
                        objectFit: 'cover',
                    }}
                />
             : 
                <Image 
                source={require('../../assets/images/Travel1.png')}
                style={{
                    width: '100%',
                    height: 330,
                    borderRadius: 15,
                    objectFit: 'cover',
                 }}
                />
        }
        <View
            style={{
                padding: 15,
                backgroundColor: Colors.WHITE,
                height: '100%',
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }}
        >
            <Text
                style={{
                    fontSize: 25,
                    fontFamily: 'outfit-bold',
                }}
            >
                {tripDetails?.tripPlan?.travel_plan?.location}
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.GRAY,
                    }}
                >
                    {moment(formatData(tripDetails?.tripData).startDate).format('DD MMM yyyy')}
                </Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.GRAY,
                    }}
                >
                    - {moment(formatData(tripDetails?.tripData).endDate).format('DD MMM yyyy')}
                </Text>
            </View>
            <Text
                style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                    color: Colors.GRAY,
                }}
            >
                🚌 {formatData(tripDetails?.tripData).traveler.title}
            </Text>
            {/** Flight Info */}
            <FlightInfo flightData={tripDetails?.tripPlan?.travel_plan?.flight_details} />
            {/** Hotels List */}
            <HotelList hotelList={tripDetails?.tripPlan?.travel_plan?.hotels} />
            {/** Trip Day Planner Info */}
            <PlannedTrip details={tripDetails?.tripPlan?.travel_plan?.itinerary} />
        </View>
    </ScrollView>
  )
}

export default TripDetails