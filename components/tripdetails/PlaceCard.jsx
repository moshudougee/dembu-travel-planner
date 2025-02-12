import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const PlaceCard = ({ place }) => {
    const [isUrlAccessible, setIsUrlAccessible] = useState(false)
    const imageUrl = place?.image_url

    useEffect(() => {
        // Function to check if the URL is accessible
       const checkImageUrl = async (url) => {
           try {
               const response = await fetch(url);
               if (response.status === 200) {
                   setIsUrlAccessible(true)
               } else {
                   setIsUrlAccessible(false)
               }
           } catch (error) {
               setIsUrlAccessible(false)
           }
       };
       if (imageUrl) {
           checkImageUrl(imageUrl);
       }
    }, [imageUrl]);

  return (
    <View
        style={{
            padding: 10,
            backgroundColor: Colors.LIGHT_GRAY,
            borderRadius: 15,
            marginTop: 20
        }}
    >
        {isUrlAccessible ?
            <Image 
                source={{uri: imageUrl}}
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 15,
                }}
            /> :
            <Image 
                source={require('../../assets/images/Travel3.png')}
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 15,
                }}
            />
        }
        
        <View
            style={{
                marginTop: 5,
            }}
        >
            <Text
                style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 18,
                }}
            >
                {place.name}
            </Text>
            <Text
                style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 15,
                    color: Colors.GRAY,
            }}
            >
                {place.details}
            </Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems: 'center',
                }}
            >
                <View>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            marginTop: 5,
                        }}
                    >
                        🎟️ Ticket Price: {' '} 
                        <Text style={{fontFamily: 'outfit-bold'}}>
                            {place.ticket_price}
                        </Text>
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'outfit',
                            fontSize: 17,
                            marginTop: 5,
                    }}
                    >
                        ⏱️ Time to Travel: {' '} 
                        <Text style={{fontFamily: 'outfit-bold'}}>
                            {place.time_to_travel}
                        </Text>
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: Colors.PRIMARY,
                            padding: 8,
                            borderRadius: 5,
                        }}
                    >
                        <Ionicons name='navigate' color={Colors.WHITE} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
                                
    </View>
  )
}

export default PlaceCard