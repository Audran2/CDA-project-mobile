import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CharacterHeadScreen from "../../components/characterScreen/CharacterHeadScreen";
import CharacterBodyScreen from "../../components/characterScreen/CharacterBodyScreen";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../assets/utils/_colors";
import useDataFetching from "../../hooks/useDataFetching";

export default function CharacterInfoScreen({ route }: { route: any }) {
  const { cardId } = route.params;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await useDataFetching("characters", cardId);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [cardId]);

  console.log(data);

  return (
    <View style={styles.container}>
      <ScrollView>
        {data && (
          <>
            <CharacterHeadScreen
              characterAvatar={data?.images}
              characterName={data?.nomComplet}
              characterJob={data?.profession}
            />
            <CharacterBodyScreen {...data} />
          </>
        )}

        <BottomNav />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
});
