import { View, Text, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig'

const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const OnCreateAccount = () => {
        if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
            ToastAndroid.show('Please enter all details', ToastAndroid.LONG)
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            //console.log(user)
            // ...
            router.replace('/(tabs)/mytrip')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        })
    }

  return (
    <View
        style={{
            padding: 25,
            paddingTop: 60,
            backgroundColor: Colors.WHITE,
            height: '100%',
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
            marginTop: 20,
        }}
      >
        Create New Account
      </Text>
         {/**Full Name */}
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
            Full Name
        </Text>
        <TextInput
            style={styles.input} 
            placeholder='Enter first name'
            value={fullName}
            onChangeText={(value) => setFullName(value)} 
        />
      </View>
        {/**Email */}
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
            Email
        </Text>
        <TextInput
            style={styles.input} 
            placeholder='Enter email'
            value={email}
            onChangeText={(value) => setEmail(value)}  // To update state 
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
            onChangeText={(value) => setPassword(value)}  // To update state
        />
        
      </View>
      {/** Sign Up Button */}
      <TouchableOpacity
        style={{
            backgroundColor: Colors.PRIMARY,
            padding: 20,
            borderRadius: 15,
            marginTop: 50,
        }}
        onPress={OnCreateAccount}  
        >
        <Text
            style={{
                fontSize: 17,
                fontFamily: 'outfit',
                color: Colors.WHITE,
                textAlign: 'center',
            }}
        >
           Create Account
        </Text>
      </TouchableOpacity>
       {/** Sign In Button */}
       <TouchableOpacity
        style={{
            backgroundColor: Colors.WHITE,
            padding: 20,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 1,
        }}
        onPress={() => router.replace('auth/sign-in')}  
      >
        <Text
            style={{
                fontSize: 17,
                fontFamily: 'outfit',
                color: Colors.PRIMARY,
                textAlign: 'center',
            }}
        >
            Sign In
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.GRAY,
        borderRadius: 15,
        fontFamily: 'outfit',
    }
})