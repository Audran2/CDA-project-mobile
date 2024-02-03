import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  PanResponder,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../assets/utils/_colors";
import styles from "./GameListScreenStyle";
import { useDataFetching } from "../../hooks/useDataFetching";
import GameCard from "../../components/searchScreen/GameCard";

const buttons = [
  { id: 1, label: "Tous" },
  { id: 2, label: "En cours" },
  { id: 3, label: "Complété" },
  { id: 4, label: "Abandonné" },
  { id: 5, label: "En attente" },
  { id: 6, label: "Prévu" },
];

export default function GameListScreen() {
  const [selectedButton, setSelectedButton] = useState(1);
  const scrollViewRef = useRef<ScrollView>(null);
  const [data, setData] = useState([]);

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

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          {...panResponder.panHandlers}
        >
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={button.id}
              style={[styles.btn, { marginHorizontal: 5 }]}
              onPress={() => handleButtonPress(button.id)}
            >
              <LinearGradient
                start={{ x: 0.3, y: 0.5 }}
                end={{ x: 0.8, y: 0.5 }}
                colors={[
                  colors.alternativeBlue,
                  selectedButton === button.id
                    ? colors.alternativeBlue
                    : "transparent",
                ]}
              >
                <Text style={styles.btnText}>{button.label}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        {data &&
          data.map((game, index) => (
            <GameCard
              key={index}
              {...game.details}
              lastCard={index === data.length - 1}
            />
          ))}
      </ScrollView>
    </LinearGradient>
  );
}
