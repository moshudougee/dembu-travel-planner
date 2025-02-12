import { View, Text, ToastAndroid, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { selectBudgetOptions } from '../../constants/Options'
import { useTripContext } from '../../context/CreateTripContext'
import { TouchableOpacity } from 'react-native'
import OptionCard from '../../components/createtrip/OptionCard'
import { Colors } from '../../constants/Colors'

const SelectBudget = () => {
    const [budget, setBudget] = useState(null)
    const { tripData, setTripData } = useTripContext()
    const navigation = useNavigation()
    const router = useRouter()

    useEffect(() => {
        setTripData({
            ...tripData, 
            budget,
        })
    }, [budget])
    
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }, [])

    const onBudgetContinue = () => {
        if (!budget) {
           ToastAndroid.show('Select Your Budget', ToastAndroid.LONG) 
        }

        router.push('/create-trip/review-trip')
    }

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
            Budget
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
                Choose spending habits for your trip
            </Text>
            <FlatList 
                data={ selectBudgetOptions }
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{
                            marginVertical: 10,
                        }}
                        onPress={() => setBudget(item)}
                    >
                        <OptionCard option={item} selected={budget} />
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
            onPress={onBudgetContinue}
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

export default SelectBudget