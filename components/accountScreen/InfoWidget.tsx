import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  PanResponder,
  ImageBackground,
} from "react-native";
import styles from "./InfoWidgetStyle.js";

export default function InfoWidget() {
  // TEMPORAIRE

  const VideoGame = [
    {
      title: "AC : odyssey",
      image: require("../../assets/images/odyssey.jpg"),
      navigation: "GameInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/odyssey.jpg"),
      navigation: "GameInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/odyssey.jpg"),
      navigation: "GameInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/odyssey.jpg"),
      navigation: "GameInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/odyssey.jpg"),
      navigation: "GameInfoScreen",
    },
  ];

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

  const Studios = [
    {
      title: "AC : odyssey",
      image: require("../../assets/images/ubisoft.jpeg"),
      navigation: "StudioInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/ubisoft.jpeg"),
      navigation: "StudioInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/ubisoft.jpeg"),
      navigation: "StudioInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/ubisoft.jpeg"),
      navigation: "StudioInfoScreen",
    },
    {
      title: "AC : odyssey",
      image: require("../../assets/images/ubisoft.jpeg"),
      navigation: "StudioInfoScreen",
    },
  ];

  // TEMPORAIRE

  const { height, width } = Dimensions.get("window");
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedButtonSecond, setSelectedButtonSecond] = useState(1);
  const navigation = useNavigation();

  const handleButtonPress = (buttonNumber: React.SetStateAction<number>) => {
    setSelectedButton(buttonNumber);
  };

  const handleButtonSecondPress = (
    buttonNumber: React.SetStateAction<number>
  ) => {
    setSelectedButtonSecond(buttonNumber);
  };

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

  const selectedData =
    selectedButtonSecond === 1
      ? VideoGame
      : selectedButtonSecond === 2
      ? CharacterGame
      : Studios;

  const repeatedViews = selectedData.map((infos, index) => (
    <TouchableOpacity
      key={index}
      style={styles.cardScroll}
      onPress={() => navigation.navigate(infos.navigation as never)}
    >
      <ImageBackground
        resizeMode="cover"
        source={infos.image}
        style={styles.ImageBackground}
      >
        {selectedButtonSecond !== 3 && (
          <Text style={{ color: "white", paddingBottom: 5, paddingLeft: 5 }}>
            {infos.title}
          </Text>
        )}
      </ImageBackground>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress(1)}>
          <Text
            style={
              selectedButton === 1 ? styles.selectedButton : styles.offButton
            }
          >
            Statistiques
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress(2)}>
          <Text
            style={
              selectedButton === 2 ? styles.selectedButton : styles.offButton
            }
          >
            Favoris
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />

      <View style={styles.contentContainer}>
        {selectedButton === 1 && (
          <Text style={{ color: "white" }}>Contenu de la page 1</Text>
        )}
        {selectedButton === 2 && (
          <View
            style={[
              styles.favoriteView,
              {
                width: width - 60,
                height: height / 4.3,
              },
            ]}
          >
            <View style={styles.favoriteNav}>
              <TouchableOpacity onPress={() => handleButtonSecondPress(1)}>
                <Text
                  style={
                    selectedButtonSecond === 1
                      ? styles.selectedButton
                      : styles.offButton
                  }
                >
                  Jeux
                </Text>
              </TouchableOpacity>
              <View style={styles.separation} />
              <TouchableOpacity onPress={() => handleButtonSecondPress(2)}>
                <Text
                  style={
                    selectedButtonSecond === 2
                      ? styles.selectedButton
                      : styles.offButton
                  }
                >
                  Personnages
                </Text>
              </TouchableOpacity>
              <View style={styles.separation} />
              <TouchableOpacity onPress={() => handleButtonSecondPress(3)}>
                <Text
                  style={
                    selectedButtonSecond === 3
                      ? styles.selectedButton
                      : styles.offButton
                  }
                >
                  Studios
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 10, width: "95%", height: 140 }}>
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
        )}
      </View>
    </View>
  );
}
