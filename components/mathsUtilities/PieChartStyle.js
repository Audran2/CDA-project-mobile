import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  containerChart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  containerLegend: {
    flexDirection: "column",
    gap: 5,
  },
  infoLegend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  pointLegend: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});

export default styles;
