import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import GameHeadScreen from "../../components/gameScreen/GameHeadScreen";
import StudioBodyScreen from "../../components/studioScreen/StudioBodyScreen";
import BottomNav from "../../components/BottomNav";
import { type GameHeadType } from "../../types";
import { colors } from "../../assets/utils/_colors";
import useDataFetching from "../../hooks/useDataFetching";

export default function StudioInfoScreen({ route }: { route: any }) {
  const { gameId } = route.params;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await useDataFetching("studios", gameId);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [gameId]);

  const studio: Array<GameHeadType> = [
    {
      isGame: false,
      backgroundImage: require("../../assets/images/ubisoft.jpeg"),
      creationDate: "28 mars 1986",
      social: [true, true, true, true],
    },
  ];

  return (
    <View style={styles.container}>
      {data && (
        <>
          <GameHeadScreen
            isGame={false}
            title={data.nom}
            backgroundImage={{ uri: data.image[0] }}
            creationDate={data.dateCreation}
            reseaux={data}
          />
          <StudioBodyScreen studioId={data._id} />
          <BottomNav />
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
