import React from "react";
import { View, StyleSheet } from "react-native";
import GameHeadScreen from "../../components/gameScreen/GameHeadScreen";
import GameWidget from "../../components/gameScreen/GameWidget";

export default function GameInfoScreen() {
  return (
    <View style={styles.container}>
      <GameHeadScreen />
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
