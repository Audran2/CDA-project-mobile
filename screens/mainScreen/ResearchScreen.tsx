import React, { useRef, useState } from "react";
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
import PlayerCard from "../../components/searchScreen/PlayerCard";
import { colors } from "../../assets/utils/_colors";

export default function ResearchScreen() {
  const { height, width } = Dimensions.get("window");
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

  const handleButtonPress = (buttonNumber: React.SetStateAction<number>) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <LinearGradient
        style={styles.container}
        start={{ x: 0.5, y: 0.8 }}
        end={{ x: 0.5, y: 0 }}
        colors={[colors.darkblue, colors.blue]}
      >
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: 20, position: "relative" }}>
            <View style={styles.iconContainer}>
              <Entypo name="magnifying-glass" size={24} color="white" />
            </View>
            <TextInput
              style={[
                styles.inputSearch,
                { width: width - 50, paddingLeft: 40 },
              ]}
              placeholder="Search..."
              placeholderTextColor="white"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              {...panResponder.panHandlers}
              style={{ marginTop: 15 }}
            >
              <TouchableOpacity
                style={[styles.btn, { marginLeft: 15 }]}
                onPress={() => handleButtonPress(1)}
              >
                <LinearGradient
                  start={{ x: 0.3, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  colors={[
                    colors.alternativeBlue,
                    selectedButton === 1
                      ? colors.alternativeBlue
                      : "transparent",
                  ]}
                >
                  <Text style={styles.btnText}>Jeux</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleButtonPress(2)}
              >
                <LinearGradient
                  start={{ x: 0.3, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  colors={[
                    colors.alternativeBlue,
                    selectedButton === 2
                      ? colors.alternativeBlue
                      : "transparent",
                  ]}
                >
                  <Text style={styles.btnText}>Studios</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleButtonPress(3)}
              >
                <LinearGradient
                  start={{ x: 0.3, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  colors={[
                    colors.alternativeBlue,
                    selectedButton === 3
                      ? colors.alternativeBlue
                      : "transparent",
                  ]}
                >
                  <Text style={styles.btnText}>Personnages</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn, { marginRight: 15 }]}
                onPress={() => handleButtonPress(4)}
              >
                <LinearGradient
                  start={{ x: 0.3, y: 0.5 }}
                  end={{ x: 0.8, y: 0.5 }}
                  colors={[
                    colors.alternativeBlue,
                    selectedButton === 4
                      ? colors.alternativeBlue
                      : "transparent",
                  ]}
                >
                  <Text style={styles.btnText}>Joueurs</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <PlayerCard />
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

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
    marginHorizontal: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
});
