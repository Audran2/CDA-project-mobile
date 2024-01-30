import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import GameHeadScreen from "../../components/gameScreen/GameHeadScreen";
import GameWidget from "../../components/gameScreen/GameWidget";
import BottomNav from "../../components/BottomNav";
import { GameInfo } from "../../types";
import { colors } from "../../assets/utils/_colors";
import { useDataFetching } from "../../hooks/useDataFetching";

export default function GameInfoScreen({ route }: { route: any }) {
  const { gameId } = route.params;

  const [data, setData] = useState<GameInfo | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await useDataFetching("games", gameId);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [gameId]);

  return (
    <View style={styles.container}>
      {data && (
        <>
          <GameHeadScreen
            isGame={true}
            title={data.nom}
            backgroundImage={{ uri: data.image[0] }}
            note={data.note}
            plateformes={data.plateformes}
          />
          <GameWidget {...data} />
          <BottomNav addList GameID={data?._id} />
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
