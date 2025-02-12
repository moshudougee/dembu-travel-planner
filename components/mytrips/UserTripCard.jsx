import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const UserTripCard = ({ trip }) => {
    const [isUrlAccessible, setIsUrlAccessible] = useState(false)
    const router = useRouter()

    const imageUrl = trip?.tripPlan?.travel_plan?.image_url

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
  return (
    <TouchableOpacity
        style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            width: '100%',
        }}
        onPress={() => router.push({pathname: '/trip-details', params: {
            trip: JSON.stringify(trip),
        }})}
    >
        {isUrlAccessible ?
            <Image 
                source={{uri: imageUrl}}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 15,
                }}
            /> :
            <Image 
                source={require('../../assets/images/Travel2.png')}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 15,
                }}
            />
        }
      
      <View
        style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: '100%',
        }}
      >
        <Text
            style={{
                fontFamily: 'outfit-medium',
                fontSize: 18,
                width: 210,
            }}
        >
            {trip.tripPlan?.travel_plan?.location}
        </Text>
        <Text
            style={{
                fontFamily: 'outfit',
                fontSize: 14,
                color: Colors.GRAY,
            }}
        >
            {moment(formatData(trip.tripData).startDate).format('DD MMM yyyy')}
        </Text>
        <Text
            style={{
                fontFamily: 'outfit',
                fontSize: 14,
                color: Colors.GRAY,
            }}
        >
            Travelling:  {formatData(trip.tripData).traveler.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserTripCard