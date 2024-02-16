import React, { useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  PanResponder,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CharacterBodyType } from "../../types.js";
import styles from "./CharacterBodyStyle.js";

export default function CharacterBodyScreen({
  licence,
  jeux,
  description,
}: CharacterBodyType) {
  // TEMPORAIRE

  const CharacterGame = [
    {
      title: "AC : odyssey",
      image: require("../../assets/images/trooper.jpg"),
      navigation: "CharacterInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/trooper.jpg"),
      navigation: "CharacterInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/trooper.jpg"),
      navigation: "CharacterInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/trooper.jpg"),
      navigation: "CharacterInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/trooper.jpg"),
      navigation: "CharacterInfoScreen",
    },
  ];

  //TEMPORAIRE

  const { height, width } = Dimensions.get("window");
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

  const repeatedViews = CharacterGame.map((infos, index) => (
    <TouchableOpacity
      key={index}
      style={styles.cardScroll}
      // onPress={() => navigation.navigate(infos.navigation as never)}
    >
      <ImageBackground
        resizeMode="cover"
        source={infos.image}
        style={styles.ImageBackground}
      ></ImageBackground>
    </TouchableOpacity>
  ));

  return (
    <View style={{ height: height / 2.2, width: width }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.subSpec}>Licence: {licence}</Text>
        <Text style={styles.subSpec}>XXXXX Favorites</Text>
      </View>
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <View>
          <Text style={styles.title}>Apparition</Text>
          <View style={{ marginLeft: 10 }}>
            {jeux.map((jeu, index) => (
              <Text key={index} style={{ color: "white" }}>
                {`\u2022`} {jeu.nom}
              </Text>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.title}>Informations</Text>
          <Text style={{ color: "white" }}>{description}</Text>
        </View>
        <View>
          <Text style={styles.title}>Voice actors</Text>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            {...panResponder.panHandlers}
            style={{ marginTop: 5 }}
          >
            {repeatedViews}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
