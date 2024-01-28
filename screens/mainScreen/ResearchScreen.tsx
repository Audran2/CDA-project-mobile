import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  PanResponder,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../assets/utils/_colors";
import useDataFetching from "../../hooks/useDataFetching";
import GameCard from "../../components/searchScreen/GameCard";
import PlayerCard from "../../components/searchScreen/PlayerCard";

const ResearchScreen = () => {
  const { height, width } = Dimensions.get("window");
  const [selectedButton, setSelectedButton] = useState(1);
  const scrollViewRef = useRef<ScrollView>(null);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (text: React.SetStateAction<string>) => {
    setSearchQuery(text);
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        let endpoint = "";

        switch (selectedButton) {
          case 1:
            endpoint = "games";
            break;
          case 2:
            endpoint = "studios";
            break;
          case 3:
            endpoint = "characters";
            break;
          case 4:
            endpoint = "users";
            break;
          default:
            endpoint = "games";
        }

        const apiData = await useDataFetching(endpoint);
        const filteredData = apiData.filter(
          (cardData: { username: string; nom: string }) => {
            const lowerCaseQuery = searchQuery.toLowerCase();
            if (selectedButton === 4) {
              return cardData.username.toLowerCase().includes(lowerCaseQuery);
            } else {
              return cardData.nom.toLowerCase().includes(lowerCaseQuery);
            }
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

  const handleButtonPress = (buttonNumber: React.SetStateAction<number>) => {
    setSelectedButton(buttonNumber);
  };

  const renderButton = (buttonNumber: number, label: string) => (
    <TouchableOpacity
      key={buttonNumber}
      style={[styles.btn, { marginHorizontal: 5 }]}
      onPress={() => handleButtonPress(buttonNumber)}
    >
      <LinearGradient
        start={{ x: 0.3, y: 0.5 }}
        end={{ x: 0.8, y: 0.5 }}
        colors={[
          colors.alternativeBlue,
          selectedButton === buttonNumber
            ? colors.alternativeBlue
            : "transparent",
        ]}
      >
        <Text style={styles.btnText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderCard = (cardData, index) => {
    if (selectedButton === 4) {
      return (
        <PlayerCard
          key={index}
          {...cardData}
          lastCard={index === data.length - 1}
        />
      );
    } else {
      return (
        <GameCard
          key={index}
          isStudio={selectedButton === 2 ? true : false}
          {...cardData}
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
        <View style={{ flexDirection: "row", marginTop: 15 }}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputSearch: {
    padding: 5,
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    zIndex: 10,
  },
  iconContainer: {
    position: "absolute",
    left: 8,
    top: 8,
    zIndex: 20,
  },
  btn: {
    borderWidth: 2,
    borderColor: colors.alternativeBlue,
    borderRadius: 20,
    overflow: "hidden",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
});

export default ResearchScreen;
