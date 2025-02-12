import { Stack } from "expo-router";
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

import CreateTripContext from '@/context/CreateTripContext'

export default function RootLayout() {

  const [loaded] = useFonts({
    'outfit':require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-semibold':require('../assets/fonts/Outfit-SemiBold.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CreateTripContext>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/**<Stack.Screen name="index" />**/}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext>
  );
}
