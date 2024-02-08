import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  TextInput,
  View,
  ScrollView,
  PanResponder,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../assets/utils/_colors";
import { useDataFetching } from "../../hooks/useDataFetching";
import GameCard from "../../components/searchScreen/GameCard";
import PlayerCard from "../../components/searchScreen/PlayerCard";
import { CardData } from "../../types";
import styles from "./ResearchScreenStyle";
import ButtonNavTop from "../../components/ButtonNavTop";

export default function ResearchScreen() {
  const { height, width } = Dimensions.get("window");
  const scrollViewRef = useRef<ScrollView>(null);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedButton, setSelectedButton] = useState(1);

  const handleSearchChange = (text: React.SetStateAction<string>) =>
    setSearchQuery(text);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const endpoints = [
          "gamesReduct",
          "studiosReduct",
          "charactersReduct",
          "users",
        ];
        const endpoint = endpoints[selectedButton - 1] || "gamesReduct";
        const apiData = await useDataFetching(endpoint);
        const filteredData = apiData.filter(
          (cardData: { username: string; nomComplet: string; nom: string }) => {
            const lowerCaseQuery = searchQuery.toLowerCase();
            return (
              (selectedButton === 4 &&
                cardData.username.toLowerCase().includes(lowerCaseQuery)) ||
              (selectedButton === 3 &&
                cardData.nomComplet.toLowerCase().includes(lowerCaseQuery)) ||
              cardData.nom.toLowerCase().includes(lowerCaseQuery)
            );
          }
        );
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [searchQuery, selectedButton]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        scrollViewRef.current?.scrollTo({
          x: -gestureState.dx,
          animated: false,
        });
      },
    })
  ).current;

  const handleButtonPress = (buttonNumber: React.SetStateAction<number>) =>
    setSelectedButton(buttonNumber);

  const renderButton = (buttonNumber: number, label: string) => (
    <ButtonNavTop
      key={buttonNumber}
      buttonNumber={buttonNumber}
      label={label}
      onPress={handleButtonPress}
      isSelected={selectedButton === buttonNumber}
    />
  );

  const renderCard = (cardData: CardData, index: number) => {
    if (selectedButton === 4 || selectedButton === 3) {
      return (
        <PlayerCard
          key={index}
          {...cardData}
          lastCard={index === data.length - 1}
        />
      );
    } else {
      const { isStudio, ...rest } = cardData;
      return (
        <GameCard
          key={index}
          isStudio={selectedButton === 2}
          {...rest}
          lastCard={index === data.length - 1}
        />
      );
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearGradient
        style={styles.container}
        start={{ x: 0.5, y: 0.8 }}
        end={{ x: 0.5, y: 0 }}
        colors={[colors.darkblue, colors.blue]}
      >
        <View
          style={{ alignItems: "center", marginTop: 20, position: "relative" }}
        >
          <View style={styles.iconContainer}>
            <Entypo name="magnifying-glass" size={24} color="white" />
          </View>
          <TextInput
            style={[styles.inputSearch, { width: width - 50, paddingLeft: 40 }]}
            placeholder="Rechercher..."
            placeholderTextColor="white"
            onChangeText={handleSearchChange}
          />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            {...panResponder.panHandlers}
          >
            {[1, 2, 3, 4].map((buttonNumber) =>
              renderButton(
                buttonNumber,
                buttonNumber === 1
                  ? "Jeux"
                  : buttonNumber === 2
                  ? "Studios"
                  : buttonNumber === 3
                  ? "Personnages"
                  : "Joueurs"
              )
            )}
          </ScrollView>
        </View>
        <ScrollView>
          {data.map((cardData, index) => renderCard(cardData, index))}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
