import React from "react";
import { View, StyleSheet } from "react-native";
import CharacterHeadScreen from "../../components/characterScreen/CharacterHeadScreen";
import CharacterBodyScreen from "../../components/characterScreen/CharacterBodyScreen";

export default function CharacterInfoScreen() {
  const character = {
    image: require("../../assets/images/geralt.png"),
    name: "Geralt de Riv",
    job: "Sorceleur",
  };

  return (
    <View style={styles.container}>
      <CharacterHeadScreen
        characterAvatar={character.image}
        characterName={character.name}
        characterJob={character.job}
      />
      <CharacterBodyScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0726",
  },
});
