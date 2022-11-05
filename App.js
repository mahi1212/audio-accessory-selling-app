import { StatusBar } from 'expo-status-bar';
import Text from './src/components/text/Text';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <Text>Text is loading...</Text>
    )
  }


  return (
    <View style={styles.container}>
      <Text preset="h1">
        h1: Facewash
      </Text>
      <Text preset="h2">
      h2: Facewash
      </Text>
      <Text preset="h3">
      h3: Facewash
      </Text>
      <Text preset="h4">
        h4: Facewash
      </Text>
      <Text preset="h5">
        h5: Facewash
      </Text>
      <Text preset="h6">
        h6: Facewash
      </Text>
      <Text preset="title">
        title: Facewash
      </Text>
      <Text preset="subtitle">
        subtitle: Basic Setup doner
      </Text>
      <Text preset="overline">
        overline: Basic Setup doner
      </Text>
      {/* <FlashMessage 
        position="top"
        floating
        StatusBarHeight={30}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
