import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  PanResponder,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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

  const handleButtonPress = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={["#0A0726", "#0E008D"]}
    >
      <View style={{ flexDirection: "row" }}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          {...panResponder.panHandlers}
          style={{ marginTop: 15 }}
        >
          {buttons.map((button) => (
            <TouchableOpacity
              key={button.id}
              style={[
                styles.btn,
                { marginLeft: button.id === 1 ? 15 : 0, marginRight: 15 },
              ]}
              onPress={() => handleButtonPress(button.id)}
            >
              <LinearGradient
                start={{ x: 0.3, y: 0.5 }}
                end={{ x: 0.8, y: 0.5 }}
                colors={[
                  "#102ECD",
                  selectedButton === button.id ? "#102ECD" : "transparent",
                ]}
              >
                <Text style={styles.btnText}>{button.label}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    left: 8,
    top: 8,
    zIndex: 20,
  },
  btn: {
    borderWidth: 2,
    borderColor: "#102ECD",
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
