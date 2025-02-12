import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import UserTripCard from './UserTripCard'
import { useRouter } from 'expo-router'

const UserTripList = ({ userTrips }) => {
    const latestTrip = JSON.parse(userTrips[0].tripData)
    const [isUrlAccessible, setIsUrlAccessible] = useState(false)
    const router = useRouter()

    const imageUrl = userTrips[0]?.tripPlan?.travel_plan?.image_url

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

  return (
    <View>
        <View
            style={{
                marginTop: 20,
            }}
        >
            {isUrlAccessible ? 
                <Image 
                    source={{uri: imageUrl}}
                    style={{
                        width: '100%',
                        height: 240,
                        borderRadius: 15,
                        objectFit: 'cover',
                    }}
                />
             : 
                <Image 
                source={require('../../assets/images/Travel1.png')}
                style={{
                    width: '100%',
                    height: 240,
                    borderRadius: 15,
                    objectFit: 'cover',
                 }}
                />
            }
            
        </View>
        <View
            style={{
                marginTop: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'outfit-medium',
                }}
            >
                {userTrips[0]?.tripPlan?.travel_plan?.location}
            </Text>
            <View
                style={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'space-between',
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.GRAY,
                    }}
                >
                    {moment(latestTrip.startDate).format('DD MMM yyyy')}
                </Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 17,
                        color: Colors.GRAY,
                    }}
                >
                    🚌 {latestTrip.traveler.title}
                </Text>
            </View>
            <TouchableOpacity
            
                onPress={() => router.push({pathname: '/trip-details', params: {
                    trip: JSON.stringify(userTrips[0]),
                }})}
                style={{
                    backgroundColor: Colors.PRIMARY,
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        color: Colors.WHITE,
                        fontSize: 15,
                        fontFamily: 'outfit-medium',
                        textAlign: 'center',
                    }}
                >
                    See your plan
                </Text>
            </TouchableOpacity>
            
        </View>
        {userTrips.map((trip, index) => {
            return (
                <UserTripCard trip={trip} key={index} />
            )
        })}
    </View>
  )
}

export default UserTripList