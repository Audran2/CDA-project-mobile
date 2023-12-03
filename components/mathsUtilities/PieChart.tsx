import React from "react";
import { View, Text } from "react-native";
import { Svg, G, Path, Text as SvgText } from "react-native-svg";

export default function PieChart() {
  const centerX = 80;
  const centerY = 100;
  const radius = 80;
  const innerRadius = 50;
  const data = [15, 25, 10, 20, 30];
  const colors = ["#FF5733", "#FFC300", "#36A2EB", "#4CAF50", "#FF6384"];

  const total = data.reduce((acc, value) => acc + value, 0);
  let currentAngle = -90;

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
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

              return <Path key={index} d={path} fill={colors[index]} />;
            })}

            <SvgText
              x="0"
              y="0"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="18"
              fontWeight="bold"
              fill="white"
            >
              6.5 / 10
            </SvgText>
          </G>
        </Svg>
      </View>
      <View>
        <Text style={{ color: "white" }}>Total</Text>
        <Text style={{ color: "white" }}>En cours</Text>
        <Text style={{ color: "white" }}>Complété</Text>
        <Text style={{ color: "white" }}>Abandonné</Text>
        <Text style={{ color: "white" }}>En attente</Text>
        <Text style={{ color: "white" }}>Prévu</Text>
      </View>
    </View>
  );
}
