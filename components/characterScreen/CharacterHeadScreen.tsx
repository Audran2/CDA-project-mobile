import React from "react";
import { View, Text, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { characterHeadType } from "../../types";
import styles from "./CharacterHeadStyle.js";

export default function CharacterHeadScreen({
  characterAvatar,
  characterName,
  characterJob,
}: characterHeadType) {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      style={{
        height: height / 2.2,
        width: width,
        backgroundColor: "#DFDFDF",
      }}
    >
      <ImageBackground
        resizeMode="contain"
        source={characterAvatar}
        style={{ width: "100%", height: "100%", justifyContent: "center" }}
      >
        <LinearGradient
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
          start={{ x: 0.5, y: 0.9 }}
          end={{ x: 0.6, y: 0.35 }}
          colors={["#0A0726", "transparent"]}
        >
          <View style={styles.bottomContainer}>
            <View style={{ marginLeft: 10, marginBottom: 10 }}>
              <Text style={styles.characterName}>{characterName}</Text>
              <Text style={styles.characterJob}>{characterJob}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
