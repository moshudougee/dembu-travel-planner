import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../configs/FirebaseConfig'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '../../components/mytrips/StartNewTripCard'
import { collection, getDocs, query, where } from 'firebase/firestore'
import UserTripList from '../../components/mytrips/UserTripList'
import { TouchableOpacity } from 'react-native'

const Mytrip = () => {
    const [userTrips, setUserTrips] = useState([])
    const [loading, setLoading] = useState(false)
    const user = auth.currentUser
    const router = useRouter()

    useEffect(() => {
        const getMyTrips = async () => {
            setLoading(true)
            // Fetch trips from Firebase
            // Set userTrips state with fetched trips
            setUserTrips([])
            const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user.email))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
                setUserTrips((prev) => [...prev, doc.data()])
            })
            setLoading(false)
        }
        user && getMyTrips()
    }, [user])

    if (!user) {
        return router.push('/auth/sign-in')
    }

  return (
    <View
        style={{
            padding: 25,
            paddingTop: 55,
            backgroundColor: Colors.WHITE,
            height: '100%',
        }}
    >
        
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: 'outfit-bold',
                }}
            >
                My Trips
            </Text>
            <TouchableOpacity
                onPress={() => router.push('/create-trip/search-place')}
            >
                <Ionicons name='add-circle' size={50} color='black' />
            </TouchableOpacity>
            
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            {loading && 
                <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
            }

            {userTrips.length === 0 ? 
                <StartNewTripCard /> :
                <UserTripList userTrips={userTrips} />
            }

        </ScrollView>
    </View>
    
  )
}

export default Mytrip