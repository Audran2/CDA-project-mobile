import React, { useEffect, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { type ButtonData } from "../../types";
import styles from "./FormTemplateStyle.js";

const ButtonTemplate = ({
  isFormValid,
  handleSubmit,
}: ButtonData): React.JSX.Element => {
  const startBlinkAnimation = (
    blinkAnimation: Animated.Value,
    minValue: number = 0
  ) => {
    const duration = 600;
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration,
          useNativeDriver: false,
        }),
        Animated.timing(blinkAnimation, {
          toValue: minValue,
          duration,
          useNativeDriver: false,
        }),
        Animated.timing(blinkAnimation, {
          toValue: 1,
          duration,
          useNativeDriver: false,
        }),
        Animated.timing(blinkAnimation, {
          toValue: minValue,
          duration,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const [blinkAnimation, setBlinkAnimation] = useState(new Animated.Value(0.5));

  useEffect(() => {
    if (!isFormValid) {
      blinkAnimation.setValue(0.5);
    } else {
      startBlinkAnimation(blinkAnimation, 0.5);
    }
  }, [isFormValid]);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit}
      disabled={!isFormValid}
    >
      <Animated.View style={{ opacity: blinkAnimation }}>
        <FontAwesome name="check" style={[styles.text, { color: "white" }]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ButtonTemplate;
