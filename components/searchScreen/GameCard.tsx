import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { type GameCardType } from "../../types.js";
import styles from "./GameCardStyle.js";

export default function GameCard({
  title,
  image,
  genre,
  studio,
  date,
  note,
  social,
}: GameCardType) {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  const getColorGrade = (note: number) => {
    if (note <= 2) {
      return "#c91508";
    } else if (note > 2 && note < 4) {
      return "#e38b19";
    } else if (note === 5) {
      return "#1673de";
    } else if (note >= 6 && note < 8) {
      return "#43db0b";
    } else {
      return "#267009";
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("GameInfoScreen" as never)}
    >
      <LinearGradient
        style={{
          height: height / 6.9,
          width: width - 48,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginBottom: 15,
        }}
        start={{ x: 0.3, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#0f24e6", "transparent"]}
      >
        <View
          style={[
            styles.containerCard,
            { height: height / 7, width: width - 50 },
          ]}
        >
          <ImageBackground
            resizeMode="cover"
            source={image}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              position: "absolute",
              right: -20,
            }}
          ></ImageBackground>
          <LinearGradient
            style={{
              height: height / 6.9,
              width: width - 48,
              backgroundColor: "transparent",
              padding: 10,
              flexDirection: "row",
            }}
            start={{ x: 0.15, y: 0.5 }}
            end={{ x: 0.7, y: 0.5 }}
            colors={["#160f4b", "transparent"]}
          >
            <View
              style={{
                width: "50%",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.titleGame}>{title}</Text>
              <View>
                <Text style={styles.gameGenre}>{genre}</Text>
                <Text style={styles.gameComplement}>
                  {studio && studio + ", "}
                  {date}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <View style={[styles.note, { borderColor: getColorGrade(note) }]}>
                <Text style={styles.textNote}>{note}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {social[0] && (
                  <MaterialCommunityIcons
                    name="nintendo-switch"
                    style={styles.iconSupport}
                  />
                )}
                {social[1] && (
                  <FontAwesome5 name="xbox" style={styles.iconSupport} />
                )}
                {social[2] && (
                  <FontAwesome5 name="playstation" style={styles.iconSupport} />
                )}
                {social[3] && (
                  <MaterialIcons name="computer" style={styles.iconSupport} />
                )}
              </View>
            </View>
          </LinearGradient>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
