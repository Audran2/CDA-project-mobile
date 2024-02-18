import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  PanResponder,
  Linking,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { GameWidgetType } from "../../types.js";
import styles from "./GameWidgetStyle.js";

export default function GameWidget({
  genre,
  studio,
  dateSortie,
  resume,
  trailers,
  characters,
}: GameWidgetType) {
  const { height, width } = Dimensions.get("window");
  const [selectedButton, setSelectedButton] = useState(1);
  const navigation = useNavigation();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const dateObj = new Date(dateSortie);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    const formatted = dateObj.toLocaleDateString("fr", options);
    setFormattedDate(formatted);
  }, [dateSortie]);

  const renderCharacterViews = () => {
    return characters.map((character) => (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.cardSlider}
          key={character._id}
          onPress={() =>
            navigation.navigate("CharacterInfoScreen", {
              cardId: character._id,
            })
          }
        >
          <ImageBackground
            resizeMode="cover"
            source={character.images ? { uri: character.images[0] } : undefined}
            style={{ width: "100%", height: "100%", justifyContent: "center" }}
          ></ImageBackground>
        </TouchableOpacity>
        <Text style={styles.cardText}>{character.nomComplet}</Text>
      </View>
    ));
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

  const handleButtonPress = (buttonNumber: React.SetStateAction<number>) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress(1)}>
          <Text
            style={
              selectedButton === 1 ? styles.selectedButton : styles.offButton
            }
          >
            Détails
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleButtonPress(2)}>
          <Text
            style={
              selectedButton === 2 ? styles.selectedButton : styles.offButton
            }
          >
            Personnages
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress(3)}>
          <Text
            style={
              selectedButton === 3 ? styles.selectedButton : styles.offButton
            }
          >
            Statistiques
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View>
        {selectedButton === 1 && (
          <View style={{ width: "90%" }}>
            <View style={{ width: width * 0.8 }}>
              <Text
                style={[styles.typeGame, { marginTop: 15, marginBottom: 5 }]}
              >
                {genre}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("StudioInfoScreen" as never)
                  }
                >
                  <Text style={styles.typeGame}>
                    {studio.nom}, {formattedDate}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Résumé</Text>
              <Text style={{ color: "white" }}>{resume}</Text>
            </View>
            <View>
              <Text style={styles.title}>Trailer</Text>
              {trailers && trailers.length > 0 && (
                <View style={{ columnGap: 10 }}>
                  {trailers.map((trailer, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => Linking.openURL(trailer)}
                    >
                      <FontAwesome5 name="youtube" size={40} color="white" />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
        )}
        {selectedButton === 2 && (
          <View
            style={{
              width: "90%",
              height: height / 5.2,
            }}
          >
            <View style={{ width: width * 0.8 }}>
              <Text style={[styles.title, { marginTop: 15 }]}>Personnages</Text>
              <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                {...panResponder.panHandlers}
                style={{ marginTop: 5 }}
              >
                {renderCharacterViews()}
              </ScrollView>
            </View>
            {/* <View>
              <Text style={[styles.title, { marginTop: 10 }]}>Staff</Text>
              <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                {...panResponder.panHandlers}
                style={{ marginTop: 5 }}
              >
                {renderStaffViews()}
              </ScrollView>
            </View> */}
          </View>
        )}
        {selectedButton === 3 && (
          <View>
            <Text style={{ color: "white" }}>Statistiques</Text>
          </View>
        )}
      </View>
    </View>
  );
}
