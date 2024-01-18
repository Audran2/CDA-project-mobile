import React, { useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  PanResponder,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../assets/utils/_colors";

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
  const scrollViewRef = useRef<ScrollView>(null);

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

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        {...panResponder.panHandlers}
        style={{ marginTop: 15 }}
      >
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={button.id}
            style={[
              styles.btn,
              {
                marginLeft: index === 0 ? 15 : 0,
                marginRight: index === buttons.length - 1 ? 15 : 0,
              },
            ]}
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: colors.alternativeBlue,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
});

export default GameListScreen;
