import React, { useEffect, useState } from "react";
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
import { getColorGrade } from "../../assets/utils/_functions";
import { type GameCardType } from "../../types";
import styles from "./GameCardStyle.js";

export default function GameCard({
  _id,
  nom,
  image,
  genre,
  studio,
  dateSortie,
  note,
  plateformes,
  lastCard,
}: GameCardType) {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const dateObj = new Date(dateSortie);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    const formatted = dateObj.toLocaleDateString("fr", options);
    setFormattedDate(formatted);
  }, [dateSortie]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("GameInfoScreen", { gameId: _id })}
    >
      <LinearGradient
        style={{
          height: height / 6.9,
          width: width - 48,
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginBottom: lastCard ? 100 : 15,
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
            source={image ? { uri: image[0] } : null}
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
              <Text style={styles.titleGame}>{nom}</Text>
              <View>
                <Text style={styles.gameGenre}>{genre}</Text>
                <Text style={styles.gameComplement}>
                  {studio && studio.nom + ", "}
                  {formattedDate}
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
                {plateformes && plateformes.includes("Switch") && (
                  <MaterialCommunityIcons
                    name="nintendo-switch"
                    style={styles.iconSupport}
                  />
                )}
                {plateformes && plateformes.includes("Xbox") && (
                  <FontAwesome5 name="xbox" style={styles.iconSupport} />
                )}
                {plateformes && plateformes.includes("PlayStation") && (
                  <FontAwesome5 name="playstation" style={styles.iconSupport} />
                )}
                {plateformes && plateformes.includes("PC") && (
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
