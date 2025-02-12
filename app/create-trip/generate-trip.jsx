import { View, Text, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { useTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options'
import { chatSession } from '../../configs/AIModal'
import { useRouter } from 'expo-router'
import { setDoc, doc } from 'firebase/firestore'
import { auth, db } from '../../configs/FirebaseConfig'

const GenerateTrip = () => {
    const { tripData, setTripData } = useTripContext()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const user = auth.currentUser

    const GenerateAITrip = async () => {
        setLoading(true)
        try {
           // Create the dynamic prompt
            const FINAL_PROMPT = AI_PROMPT
                .replace('{location}', tripData?.locationInfo.name)
                .replace('{totalDays}', tripData?.totalNoOfDays)
                .replace('{totalNight}', tripData?.totalNoOfDays - 1)
                .replace('{traveler}', tripData?.traveler?.title)
                .replace('{budget}', tripData?.budget?.title)
                .replace('{location}', tripData?.locationInfo.name)
                .replace('{totalDays}', tripData?.totalNoOfDays)
                .replace('{totalNight}', tripData?.totalNoOfDays - 1)
    
            //console.log(FINAL_PROMPT)
            const result = await chatSession.sendMessage(FINAL_PROMPT);
            // console.log(result.response.text());
            const tripResponse = JSON.parse(result.response.text())

            // Save the AI generated trip data
            const docId = Date.now().toString()
            await setDoc(doc(db, 'UserTrips', docId),{
                userEmail: user.email,
                tripPlan: tripResponse, // AI Generated Result
                tripData: JSON.stringify(tripData), //User Selection Data
                docId,
                createdAt: new Date(),
                updatedAt: new Date(),
            })

            setLoading(false)
            setTripData(null)
            router.push('/(tabs)/mytrip') 
        } catch (error) {
            console.log('Error saving trip data to Firestore', error)
            ToastAndroid.show('Error saving data', ToastAndroid.LONG)
        }
        
        
    }

    useEffect(() => {
        tripData && GenerateAITrip()
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
                fontFamily: 'outfit-bold',
                fontSize: 35,
                textAlign: 'center',
            }}
        >
            Please wait...
        </Text>
        <Text
            style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 40,
            }}
        >
            We are working on generating your dream trip.
        </Text>
        <Image 
            source={require('../../assets/images/plane.gif')}
            style={{
                width: '100%',
                height: 200,
                objectFit: 'contain',
                marginTop: 20,
            }}
        />
        <Text
            style={{
                fontFamily: 'outfit',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 20,
                color: Colors.GRAY,
            }}
        >
            Don't go back
        </Text>
        {loading && 
            <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
        }
    </View>
  )
}

export default GenerateTrip