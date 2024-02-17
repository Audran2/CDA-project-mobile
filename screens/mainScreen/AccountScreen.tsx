import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import HeadScreen from "../../components/accountScreen/HeadScreen";
import AboutUser from "../../components/accountScreen/AboutUser";
import InfoWidget from "../../components/accountScreen/InfoWidget";
import { colors } from "../../assets/utils/_colors";

export default function AccountScreen() {
  const userData = useSelector((state: any) => state.user);
  const userFavoritesData = useSelector((state: any) => state.favorites);
  const GameAverage = useSelector((state: any) => state.userGameListAverage);

  return (
    <View style={styles.container}>
      {userData && (
        <>
          <HeadScreen
            isUser={true}
            avatarUser={userData.avatar ?? ""}
            userName={userData.username ?? ""}
            userRegion={userData.region ?? ""}
            plateformes={userData.plateformes}
          />
          <AboutUser
            description={userData.description}
            friends={userData.amis}
          />
        </>
      )}
      {GameAverage && userFavoritesData && (
        <InfoWidget
          userId={userData._id}
          games={userFavoritesData.favorites?.jeux}
          characters={userFavoritesData.favorites?.characters}
          studios={userFavoritesData.favorites?.studios}
          gameAverage={GameAverage}
        />
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
