import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { HeadScreenType } from "../../types";

export default function HeadScreen({
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
      style={[styles.headContainer, { height: height / 3.5, width: width }]}
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
          colors={["#0A0726", "transparent"]}
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

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "white",
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  gameSupport: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "20%",
    marginLeft: 10,
  },

  iconSupport: {
    fontSize: 24,
    color: "white",
    marginRight: 10,
  },

  playerInfo: {
    position: "relative",
  },

  playerInfoSub: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7,
  },
  playerName: {
    fontSize: 22,
    color: "white",
  },
  playerRegion: {
    fontSize: 18,
    color: "white",
  },
});
