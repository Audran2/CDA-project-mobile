import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HeadScreen() {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={[styles.headContainer, { height: height / 3, width: width }]}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/trooper.jpg")}
        style={{ width: "100%", height: "100%", justifyContent: "center" }}
      >
        <LinearGradient
          style={{ flex: 1 }}
          start={{ x: 0.75, y: 0.7 }}
          end={{ x: 0.7, y: 0.3 }}
          colors={["#0A0726", "transparent"]}
        ></LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "white",
  },
});
