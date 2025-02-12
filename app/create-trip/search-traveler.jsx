import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { SelectTravelerList } from '../../constants/Options'
import OptionCard from '../../components/createtrip/OptionCard'
import { TouchableOpacity } from 'react-native'
import { useTripContext } from '../../context/CreateTripContext'

const SearchTraveler = () => {
    const [traveler, setTraveler] = useState(null)
    const { tripData, setTripData } = useTripContext()
    const navigation = useNavigation()
    const router = useRouter()

    useEffect(() => {
        setTripData({...tripData,
            traveler,
        })
        //console.log(tripData) 
    }, [traveler])

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    })
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
                color: Colors.BLACK,
                textAlign: 'center',
                marginBottom: 20,
            }}
        >
            Who's Traveling
        </Text>
        <View
            style={{
                marginTop: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 23,
                    fontFamily: 'outfit-bold',
                }}
            >
                Choose your travelers
            </Text>
            <FlatList 
                data={ SelectTravelerList }
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{
                            marginVertical: 10,
                        }}
                        onPress={() => setTraveler(item)}
                    >
                        <OptionCard option={item} selected={traveler} />
                    </TouchableOpacity>
                )}
            />
        </View>
        <TouchableOpacity
            style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 15,
            }}
            onPress={() => router.push('/create-trip/select-dates')}
            disabled={!traveler}
        >
            <Text
                style={{
                    color: Colors.WHITE,
                    fontSize: 20,
                    fontFamily: 'outfit-medium',
                    textAlign: 'center',
                }}
            >
                Continue
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default SearchTraveler