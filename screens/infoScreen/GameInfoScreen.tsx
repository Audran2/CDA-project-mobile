import React from "react";
import { View, StyleSheet } from "react-native";
import GameHeadScreen from "../../components/gameScreen/GameHeadScreen";
import GameWidget from "../../components/gameScreen/GameWidget";
import { type GameHeadType } from "../../types";

export default function GameInfoScreen() {
  const game: Array<GameHeadType> = [
    {
      title: "Assassin's Creed : Origins",
      backgroundImage: require("../../assets/images/odyssey.jpg"),
      note: 9,
      social: [true, true, true, true],
    },
  ];

  return (
    <View style={styles.container}>
      {game.map((game: React.JSX.IntrinsicAttributes & GameHeadType) => (
        <GameHeadScreen {...game} />
      ))}
      <GameWidget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0726",
  },
});
