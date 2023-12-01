import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { type CardGameType } from "../../types";
import styles from "./CardGameStyle.js";

export default function CardGame({
  imageBackground,
  gameTitle,
  avatarUser,
  userName,
}: CardGameType) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("GameInfoScreen" as never);
  };

  const handleUserIconPress = () => {
    navigation.navigate("UserInfoScreen" as never);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.cardContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imageBackground}
        style={{ width: "100%", height: "100%", justifyContent: "center" }}
      >
        <View style={styles.cardOverlay}>
          <View style={styles.cardContent}>
            <View style={styles.user}>
              <TouchableOpacity
                onPress={handleUserIconPress}
                style={styles.iconUser}
              >
                <Image
                  source={avatarUser}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </TouchableOpacity>
              <Text style={styles.userName}>{userName}</Text>
            </View>
            <View>
              <Text style={styles.gameTitle}>{gameTitle}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
