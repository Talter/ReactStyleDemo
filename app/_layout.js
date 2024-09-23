import { StyleSheet, Text, View } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";

import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  SplashScreen.hideAsync();

  // const [fontsLoaded, error] = useFonts({
  //   "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  //   "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
  // });

  // useEffect(() => {
  //   if (error) throw error;

  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, error]);

  // if (!fontsLoaded && !error) {
  //   return null;
  // }
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="(tabs)"
        // options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;
