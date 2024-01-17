import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Challenge from "../../components/homeScreen/Challenge";
import SliderCard from "../../components/homeScreen/SliderCard";
import { colors } from "../../assets/utils/_colors";

export default function HomeScreen() {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <View style={{ marginTop: 30 }}>
        <Challenge />
      </View>
      <View style={{ marginTop: 30 }}>
        <SliderCard />
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
