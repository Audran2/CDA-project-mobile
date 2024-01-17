import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CharacterHeadScreen from "../../components/characterScreen/CharacterHeadScreen";
import CharacterBodyScreen from "../../components/characterScreen/CharacterBodyScreen";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../assets/utils/_colors";

export default function CharacterInfoScreen() {
  const character = {
    image: require("../../assets/images/geralt.png"),
    name: "Geralt de Riv",
    job: "Sorceleur",
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <CharacterHeadScreen
          characterAvatar={character.image}
          characterName={character.name}
          characterJob={character.job}
        />
        <CharacterBodyScreen />
        <BottomNav />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
});
