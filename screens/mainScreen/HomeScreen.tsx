import { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Challenge from "../../components/homeScreen/Challenge";
import SliderCard from "../../components/homeScreen/SliderCard";
import { colors } from "../../assets/utils/_colors";
import { fetchLastUpdatedGameForUser } from "../../hooks/useDataFetching";
import { getColorGrade } from "../../assets/utils/_functions";

export default function HomeScreen() {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const [lastGameData, setLastGameData] = useState();
  const userID = "65b62a93d1aef4c0e8f69a65";

  const gameStatusColors = {
    inProgress: colors.gameStatus.inProgess,
    completed: colors.gameStatus.completed,
    onHold: colors.gameStatus.onHold,
    abandonned: colors.gameStatus.abandonned,
    waiting: colors.gameStatus.waiting,
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchLastUpdatedGameForUser(userID);
        setLastGameData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [userID]);

  console.log(lastGameData);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <View style={{ marginTop: 30 }}>
        <Challenge />
      </View>
      <View style={{ marginTop: 25 }}>
        <SliderCard />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.textTitle}>Dernier jeu enregistré</Text>
        <TouchableOpacity
          style={{
            height: 150,
            width: width / 1.05,
            borderRadius: 6,
            overflow: "hidden",
          }}
          onPress={() =>
            navigation.navigate("GameInfoScreen", {
              gameId: lastGameData?.gameId._id,
            })
          }
        >
          <ImageBackground
            resizeMode="cover"
            source={{ uri: lastGameData?.gameId.image[0] }}
            style={{ width: "100%", height: "100%", justifyContent: "center" }}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "rgba(48, 43, 79, 0.4)",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  {lastGameData?.gameId.nom}
                </Text>
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
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ color: "white" }}>
                  {lastGameData?.gameId.studio.nom}
                </Text>
                <View
                  style={{
                    backgroundColor: gameStatusColors[lastGameData?.etat],
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ color: colors.white, fontWeight: "bold" }}>
                    {lastGameData?.etat} - {lastGameData?.note}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 22,
    fontFamily: "KeaniaOne",
    color: "white",
    marginBottom: 10,
  },
  note: {
    width: 35,
    height: 35,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textNote: {
    color: "white",
    fontSize: 20,
    fontFamily: "KeaniaOne",
  },
});
