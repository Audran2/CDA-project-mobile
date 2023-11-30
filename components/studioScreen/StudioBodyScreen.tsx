import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import GameCard from "../searchScreen/GameCard";
import styles from "./StudioBodyStyle.js";

export default function StudioBodyScreen() {
  const gameCard = [
    {
      title: "Assassin's Creed Odysser",
      image: require("../../assets/images/odyssey.jpg"),
      genre: "Action",
      date: "2019",
      note: 9,
      social: [true, true, true, true],
    },
    {
      title: "Assassin's Creed Odysser",
      image: require("../../assets/images/odyssey.jpg"),
      genre: "Action",
      date: "2019",
      note: 7,
      social: [true, true, true, true],
    },
    {
      title: "Assassin's Creed Odysser",
      image: require("../../assets/images/odyssey.jpg"),
      genre: "Action",
      date: "2019",
      note: 5,
      social: [true, true, true, true],
    },
    {
      title: "Assassin's Creed Odysser",
      image: require("../../assets/images/odyssey.jpg"),
      genre: "Action",
      date: "2019",
      note: 3,
      social: [true, true, true, true],
    },
  ];

  return (
    <View style={{ flex: 1, marginHorizontal: 25 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={styles.title}>Titres</Text>
        <TouchableOpacity>
          <Feather name="filter" style={styles.iconFilter} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {gameCard.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </ScrollView>
    </View>
  );
}
