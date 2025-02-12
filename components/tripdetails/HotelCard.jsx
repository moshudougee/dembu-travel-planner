import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'

const HotelCard = ({ item }) => {
    const [isUrlAccessible, setIsUrlAccessible] = useState(false)
    const imageUrl = item?.image_url

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
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            marginTop: 10,
            marginRight: 10,
            width: 220,
            padding: 10,
            borderRadius: 15,
            backgroundColor: Colors.LIGHT_GRAY,
        }}
    >
    <View>
        {isUrlAccessible ? 
            <Image 
                source={{uri: imageUrl}}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 15,
                }} 
            /> :
            <Image 
                source={require('../../assets/images/Hotel1.png')}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 15,
                }} 
            />
        }
        
    </View>
        <Text style={{ fontFamily: 'outfit-medium', fontSize: 17, }}>
            {item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}
        </Text>
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'space-between',
             }}
        >
            <Text style={{ fontFamily: 'outfit' }}>
                ⭐{item.rating}
            </Text>
            <Text style={{ fontFamily: 'outfit' }}>
                💰{item.price}
            </Text>
        </View>
    </View>
  )
}

export default HotelCard