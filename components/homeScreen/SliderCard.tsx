import React, { useRef } from "react";
import { Text, View, ScrollView, StyleSheet, PanResponder } from "react-native";
import CardGame from "./CardGame";

const lastGameFriend = [
  {
    imageBackground: require("../../assets/images/odyssey.jpg"),
    gameTitle: "Assassin's Creed : Odyssey",
    avatarUser: require("../../assets/images/ballistic.webp"),
    userName: "iNocty",
  },
  {
    imageBackground: require("../../assets/images/odyssey.jpg"),
    gameTitle: "Assassin's Creed : Odyssey",
    avatarUser: require("../../assets/images/ballistic.webp"),
    userName: "Levorio",
  },
  {
    imageBackground: require("../../assets/images/odyssey.jpg"),
    gameTitle: "Assassin's Creed : Odyssey",
    avatarUser: require("../../assets/images/ballistic.webp"),
    userName: "Cryptiox",
  },
];

export default function Challenge() {
  const scrollViewRef = useRef<ScrollView>(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            x: -gestureState.dx,
            animated: false,
          });
        }
      },
    })
  ).current;

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.textTitle}>Derniers jeux de vos amis</Text>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        {...panResponder.panHandlers}
      >
        {lastGameFriend.map((game, index) => (
          <View style={{ marginRight: 10 }}>
            <CardGame key={index} {...game} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 22,
    fontFamily: "KeaniaOne",
    color: "white",
    marginBottom: 15,
  },
});
