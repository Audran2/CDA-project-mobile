import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ResearchScreen() {
  const { height, width } = Dimensions.get("window");

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={["#0A0726", "#0E008D"]}
    >
      <View>
        <LinearGradient
          style={{
            width: width - 48,
            alignItems: "center",
            paddingVertical: 1,
            borderRadius: 5,
          }}
          start={{ x: 0.8, y: 0.5 }}
          end={{ x: 0.2, y: 0.5 }}
          colors={["white", "lightgray"]}
        >
          <TextInput style={[styles.inputSearch, { width: width - 50 }]} />
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputSearch: {
    padding: 5,
    backgroundColor: "white",
    color: "white",
    borderRadius: 5,
  },
});
