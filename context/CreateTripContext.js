import { createContext, useContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'

const TripContext = createContext()

export const useTripContext = () => useContext(TripContext)

const CreateTripContext = ({ children }) => {
    const [tripData, setTripData] = useState([])
  return (
    <TripContext.Provider
        value={{
            tripData,
            setTripData,
            // Add other trip related methods and state here...
        }}
    >
        { children }
    </TripContext.Provider>
  )
}

export default CreateTripContext

