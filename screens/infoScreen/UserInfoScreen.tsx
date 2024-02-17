import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import HeadScreen from "../../components/accountScreen/HeadScreen";
import AboutUser from "../../components/accountScreen/AboutUser";
import InfoWidget from "../../components/accountScreen/InfoWidget";
import { colors } from "../../assets/utils/_colors";
import { useDataFetching } from "../../hooks/useDataFetching";
import { PlayerInfoType } from "../../types";

export default function UserInfoScreen({ route }: { route: any }) {
  const { cardId } = route.params;

  const [data, setData] = useState<PlayerInfoType | null>(null);
  const [favorisList, setFavorisList] = useState();
  const [averageData, setAverageData] = useState();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await useDataFetching("users", cardId);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataWithId = async (cardId) => {
      try {
        const BASE_URL = process.env.EXPO_API_PUBLIC_URL;
        const response = await axios.get(
          `${BASE_URL}/favorisList?userId=${cardId}`
        );

        setFavorisList(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données avec ID:",
          error
        );
      }
    };

    const fetchAverageData = async (cardId) => {
      try {
        const BASE_URL = process.env.EXPO_API_PUBLIC_URL;
        const response = await axios.get(
          `${BASE_URL}/average?userId=${cardId}`
        );
        setAverageData(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données avec ID:",
          error
        );
      }
    };

    fetchDataFromApi();
    fetchDataWithId(cardId);
    fetchAverageData(cardId);
  }, [cardId]);

  return (
    <View style={styles.container}>
      {data && favorisList && averageData && (
        <>
          <HeadScreen
            isUser={true}
            avatarUser={data.avatar ?? ""}
            userName={data.username ?? ""}
            userRegion={data.region ?? ""}
            plateformes={data.plateformes}
          />
          <AboutUser description={data?.description} friends={data.amis} />
          <InfoWidget
            userId={cardId}
            games={favorisList?.jeux}
            characters={favorisList?.characters}
            studios={favorisList?.studios}
            gameAverage={averageData}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
});
