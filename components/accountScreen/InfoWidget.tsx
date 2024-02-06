import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useMemo } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  PanResponder,
  ImageBackground,
} from "react-native";
import PieChart from "../mathsUtilities/PieChart";
import { InfoWidgetType } from "../../types";
import styles from "./InfoWidgetStyle.js";

export default function InfoWidget({
  games,
  characters,
  studios,
}: InfoWidgetType) {
  const { height, width } = Dimensions.get("window");
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedButtonSecond, setSelectedButtonSecond] = useState(1);
  const navigation = useNavigation();

  const handleButtonPress = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  const handleButtonSecondPress = (buttonNumber) => {
    setSelectedButtonSecond(buttonNumber);
  };

  const scrollViewRef = useRef(null);

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
      ? games
      : selectedButtonSecond === 2
      ? characters
      : studios;

  const selectedNavigation =
    selectedButtonSecond === 1
      ? "GameInfoScreen"
      : selectedButtonSecond === 2
      ? "CharacterInfoScreen"
      : "StudioInfoScreen";

  const repeatedViews = useMemo(() => {
    return selectedData?.map((infos, index) => (
      <TouchableOpacity
        key={index}
        style={styles.cardScroll}
        onPress={() =>
          navigation.navigate(selectedNavigation, { gameId: infos._id })
        }
      >
        <ImageBackground
          resizeMode="cover"
          source={{ uri: infos.image[0] }}
          style={styles.ImageBackground}
        >
          {selectedButtonSecond !== 3 && (
            <Text style={{ color: "white" }}>{infos.nom}</Text>
          )}
        </ImageBackground>
      </TouchableOpacity>
    ));
  }, [selectedData, selectedNavigation, selectedButtonSecond, navigation]);

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
        {selectedButton === 1 && <PieChart />}
        {selectedButton === 2 && (
          <View
            style={[
              styles.favoriteView,
              { width: width - 60, height: height / 4.3 },
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
            <View
              style={{
                marginHorizontal: 10,
                width: "95%",
                height: 140,
                justifyContent: selectedData.length > 0 ? "" : "center",
                alignItems: selectedData.length > 0 ? "" : "center",
              }}
            >
              {selectedData && selectedData.length > 0 ? (
                <ScrollView
                  ref={scrollViewRef}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  {...panResponder.panHandlers}
                  style={{ marginTop: 5 }}
                >
                  {repeatedViews}
                </ScrollView>
              ) : (
                <Text style={{ color: "white" }}>
                  Aucun favori dans cette section
                </Text>
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
