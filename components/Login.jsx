import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter()
  return (
    <View>
      <Image 
        source={require('../assets/images/Mountain.png')}
        style={{
            width: '100%',
            height: 520,
        }}
      />
      <View style={styles.container}>
        <Text
            style= {{
                fontSize: 30,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
                marginTop: 10,
            }}
        >
            AI Travel Planner
        </Text>
        <Text
            style={{
                fontSize: 17,
                fontFamily: 'outfit-medium',
                textAlign: 'center',
                color: Colors.GRAY,
                marginTop: 20,
            }}
        >
            "Discover your next adventure effortlessly. Personalized itenaries at your fingertips. Travel smarter with AI-driven insights."
        </Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('auth/sign-in')}
        >
            <Text
                style={{
                    fontSize: 17,
                    fontFamily: 'outfit',
                    color: Colors.WHITE,
                    textAlign: 'center',
                }}
            >
                Get Started
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25,
        height: '100%',
    },
    button:{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '10%',
    }
})

export default Login