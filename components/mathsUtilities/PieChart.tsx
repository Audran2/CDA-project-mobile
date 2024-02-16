import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Svg, G, Path, Text as SvgText } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../assets/utils/_colors";
import styles from "./PieChartStyle";

export default function PieChart({
  gameAverage,
}: {
  gameAverage: { averageStatus: any; averageNote: string | number };
}) {
  const navigation = useNavigation();

  const { averageStatus, averageNote } = gameAverage;

  const centerX = 80;
  const centerY = 100;
  const radius = 80;
  const innerRadius = 50;

  const totalAverage = Object.values(averageStatus).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const percentages = {};
  for (const key in averageStatus) {
    percentages[key] = (averageStatus[key] / totalAverage) * 100;
  }

  const data = [
    percentages.inProgress ?? 0,
    percentages.completed ?? 0,
    percentages.pending ?? 0,
    percentages.abandonned ?? 0,
    percentages.planned ?? 0,
  ];

  const colors_chart = [
    colors.gameStatus.inProgess,
    colors.gameStatus.completed,
    colors.gameStatus.onHold,
    colors.gameStatus.abandonned,
    colors.gameStatus.planned,
  ];

  const total = data.reduce((acc, value) => acc + value, 0);
  let currentAngle = -90;

  return (
    <View style={styles.containerChart}>
      <View>
        <Svg height="200" width="170">
          <G transform={`translate(${centerX},${centerY})`}>
            {data.map((value, index) => {
              const percentage = (value / total) * 100;
              const angle = (percentage * 360) / 100;

              const x1 = radius * Math.cos((currentAngle * Math.PI) / 180);
              const y1 = radius * Math.sin((currentAngle * Math.PI) / 180);
              const x2 =
                radius * Math.cos(((currentAngle + angle) * Math.PI) / 180);
              const y2 =
                radius * Math.sin(((currentAngle + angle) * Math.PI) / 180);

              const ix1 =
                innerRadius * Math.cos((currentAngle * Math.PI) / 180);
              const iy1 =
                innerRadius * Math.sin((currentAngle * Math.PI) / 180);
              const ix2 =
                innerRadius *
                Math.cos(((currentAngle + angle) * Math.PI) / 180);
              const iy2 =
                innerRadius *
                Math.sin(((currentAngle + angle) * Math.PI) / 180);

              const largeArcFlag = angle > 180 ? 1 : 0;

              const path = `
            M ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
            L ${ix2} ${iy2}
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${ix1} ${iy1}
            Z
          `;

              currentAngle += angle;

              return <Path key={index} d={path} fill={colors_chart[index]} />;
            })}

            <SvgText
              x="-15"
              y="0"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="18"
              fontWeight="bold"
              fill="white"
            >
              {averageNote} / 10
            </SvgText>
          </G>
        </Svg>
      </View>
      <View style={styles.containerLegend}>
        {/* <View>
          <Text style={{ color: "white" }}>Total</Text>
        </View> */}
        <View style={styles.infoLegend}>
          <View
            style={[
              styles.pointLegend,
              {
                backgroundColor: colors.gameStatus.inProgess,
              },
            ]}
          />
          <Text style={{ color: "white" }}>En cours</Text>
        </View>
        <View style={styles.infoLegend}>
          <View
            style={[
              ,
              styles.pointLegend,
              {
                backgroundColor: colors.gameStatus.completed,
              },
            ]}
          />
          <Text style={{ color: "white" }}>Complété</Text>
        </View>
        <View style={styles.infoLegend}>
          <View
            style={[
              styles.pointLegend,
              {
                backgroundColor: colors.gameStatus.onHold,
              },
            ]}
          />
          <Text style={{ color: "white" }}>En attente</Text>
        </View>
        <View style={styles.infoLegend}>
          <View
            style={[
              styles.pointLegend,
              {
                backgroundColor: colors.gameStatus.abandonned,
              },
            ]}
          />
          <Text style={{ color: "white" }}>Abandonné</Text>
        </View>
        <View style={styles.infoLegend}>
          <View
            style={[
              styles.pointLegend,
              {
                backgroundColor: colors.gameStatus.planned,
              },
            ]}
          />
          <Text style={{ color: "white" }}>Prévu</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("GameListScreen" as never)}
        >
          <Text style={{ color: "white" }}>Voir la liste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
