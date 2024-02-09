import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../assets/utils/_colors";
import { getColorGrade } from "../../assets/utils/_functions";
import { LastGameDataType } from "../../types";
import styles from "./LastGameCardStyle";

export default function LastGameCard({
  lastGameData,
}: {
  lastGameData: LastGameDataType;
}) {
  const width = Dimensions.get("window").width;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("GameInfoScreen", {
      gameId: lastGameData?.gameId._id,
    });
  };

  const formattedDate = moment(lastGameData?.gameId.dateSortie).format(
    "DD/MM/YYYY"
  );

  return (
    <>
      <Text style={styles.textTitle}>Dernier jeu enregistré</Text>
      <TouchableOpacity
        style={[styles.cardContainer, { width: width / 1.05 }]}
        onPress={handlePress}
      >
        <ImageBackground
          resizeMode="cover"
          source={{ uri: lastGameData?.gameId.image[0] }}
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <View style={styles.topCard}>
              <View>
                <Text style={styles.gameTitle}>{lastGameData?.gameId.nom}</Text>
                <Text style={styles.gameInfo}>
                  {lastGameData?.gameId.studio.nom}, {formattedDate}
                </Text>
              </View>
              {lastGameData?.gameId.note && (
                <View
                  style={[
                    styles.note,
                    { borderColor: getColorGrade(lastGameData?.gameId.note) },
                  ]}
                >
                  <Text style={styles.textNote}>
                    {lastGameData?.gameId.note}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor:
                      colors.gameStatus[
                        lastGameData?.etat as keyof typeof colors.gameStatus
                      ],
                  },
                ]}
              >
                <Text style={styles.statusText}>
                  {lastGameData?.etat} - {lastGameData?.note}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
}
