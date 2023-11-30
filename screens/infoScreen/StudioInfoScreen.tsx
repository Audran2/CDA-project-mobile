import React from "react";
import { View, StyleSheet } from "react-native";
import GameHeadScreen from "../../components/gameScreen/GameHeadScreen";
import StudioBodyScreen from "../../components/studioScreen/StudioBodyScreen";
import { GameHeadType } from "../../types";

export default function StudioInfoScreen() {
  const studio: Array<GameHeadType> = [
    {
      isGame: false,
      backgroundImage: require("../../assets/images/ubisoft.jpeg"),
      creationDate: "28 mars 1986",
      social: [true, true, true, true],
    },
  ];

  return (
    <View style={styles.container}>
      {studio.map((studio: React.JSX.IntrinsicAttributes & GameHeadType) => (
        <GameHeadScreen {...studio} />
      ))}
      <StudioBodyScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0726",
  },
});
