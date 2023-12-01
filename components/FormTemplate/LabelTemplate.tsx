import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { type LabelData } from "../../types";
import styles from "./FormTemplateStyle.js";

const LabelTemplate = ({ name, required }: LabelData): React.JSX.Element => {
  const [randomWidth, setRandomWidth] = useState(30);
  useEffect(() => {
    setRandomWidth(30 + Math.random() * 10);
  }, []);

  return (
    <View style={styles.containerLabel}>
      <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
        <Text style={styles.labelText}>{name}</Text>
        {required && <Text style={styles.requiredAsterisk}>*</Text>}
      </View>
      <View
        style={[
          styles.line,
          { width: randomWidth, backgroundColor: "#21a5ff" },
        ]}
      />
    </View>
  );
};

export default LabelTemplate;
