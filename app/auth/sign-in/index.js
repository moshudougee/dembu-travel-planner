import { View, Text, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    const router = useRouter()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const onSignIn = () => {
        if (email === '' || password === '') {
            ToastAndroid.show('Please enter email and password', ToastAndroid.LONG)
            return
        }
        // Sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //console.log(user)
            router.replace('/(tabs)/mytrip')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (errorCode === 'auth/invalid-credential') {
                ToastAndroid.show('Invalid credentials', ToastAndroid.LONG)
            }
        })
    }

  return (
    <View 
        style={{
            padding: 25,
            paddingTop: 80,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}
    >
      <TouchableOpacity
        style={{
            position: 'absolute',
            top: 50,
            left: 20,
        }}
        onPress={() => router.back()}
      >
        <Ionicons name='arrow-back' size={24} color='black'/>
      </TouchableOpacity>
      <Text
        style={{
            fontSize: 30,
            fontFamily: 'outfit-bold',
        }}
      >
        Let's sign you in
      </Text>
      <Text
        style={{
            fontSize: 30,
            fontFamily: 'outfit',
            color: Colors.GRAY,
            marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
            fontSize: 30,
            fontFamily: 'outfit',
            color: Colors.GRAY,
            marginTop: 10,
        }}
      >
        You've been missed
      </Text>
        {/**Email */}
      <View
        style={{
            marginTop: 50,
        }}
      >
        <Text
            style={{
                fontFamily: 'outfit',
            }}
        >
            Email
        </Text>
        <TextInput
            style={styles.input} 
            placeholder='Enter email'
            value={email}
            onChangeText={(value) => setEmail(value)} 
        />
      </View>
      {/**Password */}
      <View
        style={{
            marginTop: 20,
        }}
      >
        <Text
            style={{
                fontFamily: 'outfit',
            }}
        >
            Password
        </Text>
        <TextInput
            style={styles.input}
            placeholder='Enter password'
            secureTextEntry={true}  // To show password as dots
            textContentType='password'
            value={password}
            onChangeText={(value) => setPassword(value)}  // To update password state on change 
        />
        
      </View>
      {/** Sign In Button */}
      <TouchableOpacity
        style={{
            backgroundColor: Colors.PRIMARY,
            padding: 20,
            borderRadius: 15,
            marginTop: 50,
        }}
        onPress={onSignIn}  
        >
        <Text
            style={{
                fontSize: 17,
                fontFamily: 'outfit',
                color: Colors.WHITE,
                textAlign: 'center',
            }}
        >
            Sign In
        </Text>
      </TouchableOpacity>
      {/** Sign Up Button */}
      <TouchableOpacity
        style={{
            backgroundColor: Colors.WHITE,
            padding: 20,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 1,
        }}
        onPress={() => router.replace('auth/sign-up')}  
      >
        <Text
            style={{
                fontSize: 17,
                fontFamily: 'outfit',
                color: Colors.PRIMARY,
                textAlign: 'center',
            }}
        >
            Create Account
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        fontFamily: 'outfit',
    }
})