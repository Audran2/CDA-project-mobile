import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PanResponder,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./GameWidgetStyle.js";

export default function GameWidget() {
  const { height, width } = Dimensions.get("window");
  const [selectedButton, setSelectedButton] = useState(1);
  const navigation = useNavigation();

  const characterData = [
    { id: 1, name: "Character 1" },
    { id: 2, name: "Character 2" },
    { id: 3, name: "Character 3" },
    { id: 4, name: "Character 4" },
    { id: 5, name: "Character 5" },
  ];

  const staffData = [
    { id: 1, name: "Staff 1" },
    { id: 2, name: "Staff 2" },
    { id: 3, name: "Staff 3" },
    { id: 4, name: "Staff 4" },
    { id: 5, name: "Staff 5" },
  ];

  const renderCharacterViews = () => {
    return characterData.map((character) => (
      <TouchableOpacity
        style={styles.cardSlider}
        key={character.id}
        onPress={() => navigation.navigate("CharacterInfoScreen" as never)}
      >
        <Text>{character.name}</Text>
      </TouchableOpacity>
    ));
  };

  const renderStaffViews = () => {
    return staffData.map((staff) => (
      <TouchableOpacity style={styles.cardSlider} key={staff.id}>
        <Text>{staff.name}</Text>
      </TouchableOpacity>
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
            Staff & persos
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
            <View>
              <Text
                style={[styles.typeGame, { marginTop: 15, marginBottom: 5 }]}
              >
                Genre
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("StudioInfoScreen" as never)
                  }
                >
                  <Text style={styles.typeGame}>Studio, 2018</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Résumé</Text>
              <Text style={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur. Vulputate at scelerisque
                aliquet. Lorem ipsum dolor sit amet consectetur. Vulputate at
                scelerisque aliquet. Lorem ipsum dolor sit amet consectetur.
                Vulputate at scelerisque aliquet.
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Trailer</Text>
              <FontAwesome5 name="youtube" size={40} color="white" />
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
            <View>
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
            <View>
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
            </View>
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
