import React from "react";
import { View, StyleSheet } from "react-native";
import HeadScreen from "../../components/accountScreen/HeadScreen";
import AboutUser from "../../components/accountScreen/AboutUser";
import InfoWidget from "../../components/accountScreen/InfoWidget";
import { colors } from "../../assets/utils/_colors";

export default function UserInfoScreen() {
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
      <HeadScreen
        isUser={true}
        avatarUser={user.userName}
        userName={user.userName}
        userRegion={user.userRegion}
        isNintendo={user.isNintendo}
        isXbox={user.isXbox}
        isPlaystation={user.isPlaystation}
        isComputer={user.isComputer}
      />
      <AboutUser />
      <InfoWidget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
});
