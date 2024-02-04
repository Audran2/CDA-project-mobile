import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../assets/utils/_colors";
import { ButtonNavTopType } from "../types";
import styles from "./ButtonNavTopStyle";

export default function ButtonNavTop({
  buttonNumber,
  label,
  onPress,
  isSelected,
}: ButtonNavTopType) {
  return (
    <TouchableOpacity
      style={[styles.btn, { marginHorizontal: 5 }]}
      onPress={() => onPress(buttonNumber)}
    >
      <LinearGradient
        start={{ x: 0.3, y: 0.5 }}
        end={{ x: 0.8, y: 0.5 }}
        colors={[
          colors.alternativeBlue,
          isSelected ? colors.alternativeBlue : "transparent",
        ]}
      >
        <Text style={styles.btnText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
