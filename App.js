import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [date, setDate] = useState("");
  const [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  setTimeout(() => {
    let date = new Date();
    setDate(date.toLocaleTimeString());
  }, 1000);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.time}>{date.slice(0, 2)}</Text>
      <Text style={styles.time}>{date.slice(3, 5)}</Text>
      <Text style={styles.time}>{date.slice(6, 8)}</Text>
      <Text style={styles.text}>stay focused</Text>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181818",
  },
  time: {
    color: "#e7e7e7",
    fontSize: 160,
    letterSpacing: 4,
    fontFamily: "Montserrat-Medium",
  },
  text: {
    position: "absolute",
    bottom: 26,
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
    color: "#e7e7e7",
  },
});
