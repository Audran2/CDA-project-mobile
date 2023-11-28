import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import HeadScreen from "../../components/accountScreen/HeadScreen";

export default function AccountScreen() {
  return (
    <View
      style={styles.container}
      // start={{ x: 0.5, y: 0.8 }}
      // end={{ x: 0.5, y: 0 }}
      // colors={["#0A0726", "#0E008D"]}
    >
      <HeadScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0726",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
