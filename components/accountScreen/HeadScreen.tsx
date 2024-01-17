import React from "react";
import { View, Text, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { colors } from "../../assets/utils/_colors";
import { HeadScreenType } from "../../types";
import styles from "./HeadScreenStyle.js";

export default function HeadScreen({
  isUser = false,
  avatarUser,
  userName,
  userRegion,
  isNintendo,
  isXbox,
  isPlaystation,
  isComputer,
}: HeadScreenType) {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      style={[
        styles.headContainer,
        { height: isUser ? height / 3 : height / 3.5, width: width },
      ]}
    >
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/trooper.jpg")}
        style={{ width: "100%", height: "100%", justifyContent: "center" }}
      >
        <LinearGradient
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
          start={{ x: 0.75, y: 0.7 }}
          end={{ x: 0.7, y: 0.2 }}
          colors={[colors.darkblue, "transparent"]}
        >
          <View style={styles.bottomContainer}>
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
            <View style={styles.playerInfo}>
              <View style={[styles.playerInfoSub, { bottom: 40 }]}>
                <Ionicons name="male" style={styles.playerName} />
                <Text style={styles.playerName}>{userName}</Text>
              </View>
              <View style={[styles.playerInfoSub, { bottom: 5 }]}>
                <Ionicons name="earth" style={styles.playerRegion} />
                <Text style={styles.playerRegion}>{userRegion}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
