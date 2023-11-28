import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function InfoWidget() {
  const { height, width } = Dimensions.get("window");
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedButtonSecond, setSelectedButtonSecond] = useState(1);

  const handleButtonPress = (buttonNumber: React.SetStateAction<number>) => {
    setSelectedButton(buttonNumber);
  };

  const handleButtonSecondPress = (
    buttonNumber: React.SetStateAction<number>
  ) => {
    setSelectedButtonSecond(buttonNumber);
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
        {selectedButton === 1 && (
          <Text style={{ color: "white" }}>Contenu de la page 1</Text>
        )}
        {selectedButton === 2 && (
          <View
            style={[
              styles.favoriteView,
              {
                width: width - 60,
                height: height / 4.3,
              },
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
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 40,
    marginBottom: 16,
  },
  selectedButton: {
    color: "white",
  },
  offButton: {
    color: "#B1B1B1",
  },
  line: {
    width: 250,
    height: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
  },
  favoriteView: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  favoriteNav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
    marginVertical: 10,
  },
  separation: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
  },
});
