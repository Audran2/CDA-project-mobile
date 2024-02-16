import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { PlayerCardType } from "../../types.js";
import styles from "./PlayerCardStyle.js";

export default function PlayerCard({
  _id,
  username,
  avatar,
  region,
  plateformes,
  nomComplet,
  images,
  licence,
  lastCard,
}: PlayerCardType) {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.cardView,
        {
          height: height / 8,
          width: width - 50,
          marginBottom: lastCard ? 100 : 15,
        },
      ]}
      onPress={() =>
        navigation.navigate(
          username ? "UserInfoScreen" : "CharacterInfoScreen",
          { cardId: _id }
        )
      }
    >
      <View style={styles.cardContainer}>
        <ImageBackground
          resizeMode="cover"
          source={
            avatar ? { uri: avatar } : images ? { uri: images } : undefined
          }
          style={{ width: "100%", height: "100%", justifyContent: "center" }}
        />
      </View>
      <View
        style={{
          width: "50%",
          paddingVertical: 7,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.userTitle}>{username ?? nomComplet}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.userSubtitle}>{region ?? licence}</Text>
          </View>
        </View>
        {plateformes && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 7,
            }}
          >
            {plateformes.includes("nintendo") && (
              <MaterialCommunityIcons
                name="nintendo-switch"
                style={styles.iconSupport}
              />
            )}
            {plateformes.includes("xbox") && (
              <FontAwesome5 name="xbox" style={styles.iconSupport} />
            )}
            {plateformes.includes("playstation") && (
              <FontAwesome5 name="playstation" style={styles.iconSupport} />
            )}
            {plateformes.includes("pc") && (
              <MaterialIcons name="computer" style={styles.iconSupport} />
            )}
          </View>
        )}
      </View>
      {username && (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity>
            <Feather name="user-plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}
