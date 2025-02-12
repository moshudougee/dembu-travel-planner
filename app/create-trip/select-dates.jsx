import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { useTripContext } from '../../context/CreateTripContext';

const SelectDates = () => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const { tripData, setTripData } = useTripContext()
    const navigation = useNavigation()
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }, [])

    const onDateChange = (date, type) => {
        if (type === 'START_DATE') {
            setStartDate(moment(date))
        } else {
            setEndDate(moment(date))
        }
    }

    const onDateSelectionContinue = () => {
      if (!startDate || !endDate) {
        ToastAndroid.show('Please select Start and End date', ToastAndroid.LONG)
        return
      }
      const totalNoOfDays = endDate.diff(startDate, 'days')
      setTripData({
        ...tripData,
        startDate,
        endDate,
        totalNoOfDays: totalNoOfDays + 1,
      })

      router.push('/create-trip/select-budget')
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
            fontFamily: 'outfit-bold',
            fontSize: 35,
            marginBottom: 20,
          }}
        >
          Travel Dates
        </Text>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <CalendarPicker 
            onDateChange={onDateChange}
            allowRangeSelection={true}
            minDate={new Date()}
            maxRangeDuration={10}
            selectedRangeStyle={{
              backgroundColor: Colors.PRIMARY,
              opacity: 0.7,
            }}
            selectedDayTextStyle={{
              color: Colors.WHITE,
            }} 
          />
        </View>

        <TouchableOpacity
            style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                marginTop: 20,
            }}
            onPress={onDateSelectionContinue}
            
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

export default SelectDates