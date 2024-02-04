import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../assets/utils/_colors";
import styles from "./GameListScreenStyle";
import { useDataFetching } from "../../hooks/useDataFetching";
import GameCard from "../../components/searchScreen/GameCard";
import ButtonNavTop from "../../components/ButtonNavTop";

const buttons = [
  { id: 1, label: "Tous" },
  { id: 2, label: "En cours" },
  { id: 3, label: "Complété" },
  { id: 4, label: "Abandonné" },
  { id: 5, label: "En attente" },
  { id: 6, label: "Prévu" },
];

const GameListScreen = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [data, setData] = useState([]);

  const handleButtonPress = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };

  const userId = "65b62a93d1aef4c0e8f69a65";
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const buttonLabels = [
          "all",
          "inProgress",
          "completed",
          "abandoned",
          "pending",
          "planned",
        ];
        const apiData = await useDataFetching(
          "gameList",
          userId,
          buttonLabels[selectedButton - 1]
        );
        setData(apiData.jeux);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [userId, selectedButton]);

  const renderButtons = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {buttons.map((button) => (
        <ButtonNavTop
          key={button.id}
          buttonNumber={button.id}
          label={button.label}
          onPress={handleButtonPress}
          isSelected={selectedButton === button.id}
        />
      ))}
    </ScrollView>
  );

  const renderGameCards = () => (
    <ScrollView
      contentContainerStyle={
        data.length === 0
          ? {
              flex: 1,
              justifyContent: "center",
            }
          : null
      }
    >
      {data.map((game, index) => (
        <GameCard
          key={index}
          {...game.details}
          lastCard={index === data.length - 1}
        />
      ))}
      {data.length === 0 && (
        <View>
          <Text style={styles.textEmpty}>
            Aucun jeu à afficher{"\n"}pour le moment
          </Text>
        </View>
      )}
    </ScrollView>
  );

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <View style={{ flexDirection: "row", marginVertical: 15 }}>
        {renderButtons()}
      </View>
      {renderGameCards()}
    </LinearGradient>
  );
};

export default GameListScreen;
