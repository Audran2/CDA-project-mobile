import { StyleSheet, View } from "react-native";
import HeadScreen from "../../components/accountScreen/HeadScreen";
import AboutUser from "../../components/accountScreen/AboutUser";
import InfoWidget from "../../components/accountScreen/InfoWidget";
import { colors } from "../../assets/utils/_colors";
import { PlayerInfoType } from "../../types";
import { useEffect, useState } from "react";
import { useDataFetching } from "../../hooks/useDataFetching";

export default function AccountScreen() {
  const userId = "65b62a93d1aef4c0e8f69a65";
  const [data, setData] = useState<PlayerInfoType | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await useDataFetching("users", userId);
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataFromApi();
  }, [userId]);

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
