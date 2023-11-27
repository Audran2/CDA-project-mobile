import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Challenge() {
  const { height, width } = Dimensions.get("window");

  return (
    <LinearGradient
      style={{
        height: height / 5 + 2,
        width: width - 28,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["#fff", "#696969"]}
    >
      <View
        style={[
          styles.challengeContainer,
          { height: height / 5, width: width - 30 },
        ]}
      >
        <View
          style={{ backgroundColor: "blue", width: "50%", height: "100%" }}
        ></View>
        <View
          style={{ backgroundColor: "red", width: "50%", height: "100%" }}
        ></View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  challengeContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
});
