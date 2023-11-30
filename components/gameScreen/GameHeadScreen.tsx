import React from "react";
import { View, Text, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import styles from "./GameHeadScreenStyle.js";

export default function GameHeadScreen() {
  const { height, width } = Dimensions.get("window");

  const isComputer = true;
  const isNintendo = true;
  const isPlaystation = true;
  const isXbox = true;

  return (
    <View
      style={{
        height: height / 2.2,
        width: width,
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/odyssey.jpg")}
        style={{ width: "100%", height: "100%", justifyContent: "center" }}
      >
        <LinearGradient
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
          start={{ x: 0.5, y: 0.85 }}
          end={{ x: 0.5, y: 0.55 }}
          colors={["#0A0726", "transparent"]}
        >
          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.gameTitle}>Assassin's Creed : Origins</Text>
            </View>
            <View style={styles.note}>
              <Text style={styles.textNote}>9</Text>
            </View>
            <View style={styles.GameSupportParent}>
              <View style={styles.gameSupport}>
                {isNintendo && (
                  <MaterialCommunityIcons
                    name="nintendo-switch"
                    style={styles.iconSupport}
                  />
                )}
                {isXbox && (
                  <FontAwesome5 name="xbox" style={styles.iconSupport} />
                )}
                {isPlaystation && (
                  <FontAwesome5 name="playstation" style={styles.iconSupport} />
                )}
                {isComputer && (
                  <MaterialIcons name="computer" style={styles.iconSupport} />
                )}
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
