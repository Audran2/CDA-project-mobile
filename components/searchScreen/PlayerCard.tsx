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
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import styles from "./PlayerCardStyle.js";

export default function PlayerCard() {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  const isGame = true;

  const isNintendo = true;
  const isXbox = true;
  const isPlaystation = true;
  const isComputer = true;

  return (
    <TouchableOpacity
      style={[styles.cardView, { height: height / 8, width: width - 50 }]}
      onPress={() => navigation.navigate("UserInfoScreen" as never)}
    >
      <View style={styles.cardContainer}>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/images/ballistic.webp")}
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
            <Text style={styles.userTitle}>Levorio</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.userSubtitle}>Région</Text>
          </View>
        </View>
        {isGame && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 7,
            }}
          >
            {isNintendo && (
              <MaterialCommunityIcons
                name="nintendo-switch"
                style={styles.iconSupport}
              />
            )}
            {isXbox && <FontAwesome5 name="xbox" style={styles.iconSupport} />}
            {isPlaystation && (
              <FontAwesome5 name="playstation" style={styles.iconSupport} />
            )}
            {isComputer && (
              <MaterialIcons name="computer" style={styles.iconSupport} />
            )}
          </View>
        )}
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity>
          <Feather name="user-plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
