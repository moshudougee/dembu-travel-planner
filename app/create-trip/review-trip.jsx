import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
//import { Ionicons } from '@expo/vector-icons'
import { useTripContext } from '../../context/CreateTripContext'
import moment from 'moment'
import { TouchableOpacity } from 'react-native'

const ReviewTrip = () => {
    const { tripData } = useTripContext()
    const navigation = useNavigation()
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }, [])

  return (
    <View
        style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}
    >
        <Text
            style={{
                fontSize: 35,
                fontFamily: 'outfit-bold',
                marginTop: 20,
                textAlign: 'center',
            }}
        >
            Review Your Trip
        </Text>
        <View
            style={{
                marginTop: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'outfit-medium',
                }}
            >
                Before generating your trip please review your selection
            </Text>
            {/** Destination Info */}
            <View
                style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                    }}
                >
                    📍
                </Text>
                <View>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}
                    >
                        Destination
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}
                    >
                        {tripData?.locationInfo.name}
                    </Text>
                </View>
            </View>
            {/** Travel Date Info */}
            <View
                style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                    }}
                >
                    📅
                </Text>
                <View>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}
                    >
                        Travel Date
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}
                    >
                        {moment(tripData?.startDate).format('DD MMM') + " To " +
                         moment(tripData?.endDate).format('DD MMM') + "   "
                        }
                        ({tripData?.totalNoOfDays} days)
                    </Text>
                </View>
            </View>
            {/** Travelers Info */}
            <View
                style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                    }}
                >
                    🚌
                </Text>
                <View>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}
                    >
                        Who is Traveling
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}
                    >
                        {tripData?.traveler?.title}
                    </Text>
                </View>
            </View>
            {/** Budget Info */}
            <View
                style={{
                    marginTop: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                    }}
                >
                    💰
                </Text>
                <View>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 20,
                            color: Colors.GRAY,
                        }}
                    >
                        Budget
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 20,
                        }}
                    >
                        {tripData?.budget?.title}
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity
            style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 30,
            }}
            onPress={() => router.replace('/create-trip/generate-trip')}
        >
            <Text
                style={{
                    color: Colors.WHITE,
                    fontSize: 20,
                    fontFamily: 'outfit-medium',
                    textAlign: 'center',
                }}
            >
                Build My Trip
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ReviewTrip