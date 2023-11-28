import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CardGameType } from "../../types";

export default function CardGame({
  imageBackground,
  gameTitle,
  avatarUser,
  userName,
}: CardGameType) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("GameInfoScreen");
  };

  const handleUserIconPress = () => {
    navigation.navigate("UserInfoScreen");
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

const styles = StyleSheet.create({
  cardContainer: {
    height: 170,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(48, 43, 79, 0.7)",
  },
  cardContent: {
    padding: 5,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flex: 1,
  },
  gameTitle: {
    fontFamily: "KeaniaOne",
    fontSize: 18,
    color: "white",
  },
  user: {
    flexDirection: "row",
    // alignItems: "center",
  },

  userName: {
    fontSize: 20,
    color: "white",
    fontFamily: "KeaniaOne",
    marginLeft: 10,
  },

  iconUser: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
