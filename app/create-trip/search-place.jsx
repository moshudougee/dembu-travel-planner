import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useTripContext } from '../../context/CreateTripContext'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
//import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


const SearchPlace = () => {
    const navigation = useNavigation()
    const [results, setResults] = useState([])
    const [query, setQuery] = useState('')

    const { tripData, setTripData } = useTripContext()
    const router = useRouter()

    useEffect(() => {
        const fetchLocations = () => {
            const key = process.env.EXPO_PUBLIC_LOCATIONIQ_KEY
            const options = {method: 'GET', headers: {accept: 'application/json'}};
            fetch(`https://us1.locationiq.com/v1/autocomplete?key=${key}&q=${query}`, options)
                .then(response => response.json())
                .then(response => setResults(response))
                .catch(err => console.error(err));
        }
        fetchLocations()
    }, [query])

    

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search',
        }, [])
    })

    const handleSelectPlace = (place) => {
        setTripData({
            locationInfo: {
                name: place.display_name,
                latitude: place.lat,
                longitude: place.lon,
                address: place.display_address,
            }
        })
        setQuery('')
        router.push('/create-trip/search-traveler')
    }

  return (
    <View
        style={{
            padding: 25,
            paddingTop: 75,
            marginTop: 50,
            backgroundColor: Colors.WHITE,
            height: '100%',
            alignItems: 'center',
            display: 'flex',
            gap: 10,
        }}
    >
        {/*** 
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}
            query={{
                key: 'YOUR API KEY',
                language: 'en',
            }}
        />
        **/}
        <TextInput 
            placeholder='Search'
            style={{
                borderWidth: 1,
                borderColor: Colors.GRAY,
                borderRadius: 10,
                padding: 10,
                width: '100%',
            }}
            value={query}
            onChangeText={(value) => setQuery(value)}
        />
        {results.length > 0 &&
            <ScrollView
                style={{
                    display: 'flex',
                    width: '100%',
                    padding: 10,
                    gap: 5,
                    borderWidth: results.length > 0 ? 1 : 0,
                    borderColor: Colors.GRAY,
                    borderRadius: 10,
                }}
                showsVerticalScrollIndicator={false}
            >
                {results.map((result, index) => {
                    return (
                        <TouchableOpacity
                            style={{
                                padding: 10,
                                shadowColor: Colors.GRAY,
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 2,
                            }}
                            key={index}
                            onPress={() => handleSelectPlace(result)}
                        >
                            <Text
                                style={{
                                    fontFamily: 'outfit-medium',
                                    fontSize: 17,
                                    color: Colors.BLACK,
                                }}
                            >
                                {result.display_name}
                            </Text>
                        </TouchableOpacity>
                    )
                })
                }
            </ScrollView>
        }
        {tripData && tripData.length > 0 &&
            <View
                style={{
                    padding: 15,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 10,
                    borderColor: Colors.GRAY,
                    borderWidth: 1,
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'outfit-semibold',
                        fontSize: 30,
                        color: Colors.BLACK,
                    }}
                >
                    {tripData.locationInfo.name}
                </Text>
                <Text
                    style={{
                        fontFamily: 'outfit',
                        fontSize: 15,
                        color: Colors.GRAY,
                        gap: 3,
                        justifyContent: 'center'
                    }}
                >
                    <Ionicons name='location-sharp' color={Colors.SECONDARY} size={20} /> 
                    {tripData.locationInfo.address}
                </Text>
            </View>
        }
    </View>
  )
}

export default SearchPlace