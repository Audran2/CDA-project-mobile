import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  borderLinear: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  challengeContainer: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  centeredVersus: {
    zIndex: 1,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -27 }, { translateY: -30 }],
    flexDirection: "row",
  },
});

export default styles;
