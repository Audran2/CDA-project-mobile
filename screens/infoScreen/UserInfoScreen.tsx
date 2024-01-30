import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import HeadScreen from "../../components/accountScreen/HeadScreen";
import AboutUser from "../../components/accountScreen/AboutUser";
import InfoWidget from "../../components/accountScreen/InfoWidget";
import { colors } from "../../assets/utils/_colors";
import { useDataFetching } from "../../hooks/useDataFetching";
import { PlayerInfoType } from "../../types";

export default function UserInfoScreen({ route }: { route: any }) {
  const { cardId } = route.params;

  const [data, setData] = useState<PlayerInfoType | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await useDataFetching("users", cardId);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [cardId]);

  const user = {
    avatarUser: require("../../assets/images/trooper.jpg"),
    userName: "Levorio",
    userRegion: "Europe",
    isNintendo: true,
    isXbox: true,
    isPlaystation: true,
    isComputer: true,
  };

  return (
    <View style={styles.container}>
      {data && (
        <>
          <HeadScreen
            isUser={true}
            avatarUser={data.avatar ?? ""}
            userName={data.username ?? ""}
            userRegion={data.region ?? ""}
            plateformes={data.plateformes}
          />
          <AboutUser description={data.description} friends={data.amis} />
          <InfoWidget />
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
