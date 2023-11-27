import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Challenge from "../../components/homeScreen/Challenge";

export default function HomeScreen() {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={["#0A0726", "#0E008D"]}
    >
      <View style={{ marginTop: 30 }}>
        <Challenge />
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
