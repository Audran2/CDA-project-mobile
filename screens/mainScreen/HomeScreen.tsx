import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import Challenge from "../../components/homeScreen/Challenge";
import SliderCard from "../../components/homeScreen/SliderCard";
import { colors } from "../../assets/utils/_colors";
import { fetchLastUpdatedGameForUser } from "../../hooks/useDataFetching";
import { RootState } from "../../hooks/store";
import LastGameCard from "../../components/homeScreen/LastGameCard";

export default function HomeScreen() {
  const userData = useSelector((state: RootState) => state.user);
  const [lastGameData, setLastGameData] = useState();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchLastUpdatedGameForUser(userData?._id);
        setLastGameData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [userData]);

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
        {lastGameData && <LastGameCard lastGameData={lastGameData} />}
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
});
