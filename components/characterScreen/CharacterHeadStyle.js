import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  characterName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  characterJob: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
