import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    padding: 16,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 40,
    marginBottom: 16,
  },
  selectedButton: {
    color: "white",
  },
  offButton: {
    color: "#B1B1B1",
  },
  line: {
    width: 320,
    height: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#C6C6C6",
    marginTop: 10,
    marginBottom: 5,
  },
  typeGame: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "column",
    width: 85,
  },
  cardSlider: {
    backgroundColor: "lightgray",
    height: 115,
    width: 85,
    marginRight: 10,
    borderRadius: 3,
  },
  cardText: {
    marginTop: 5,
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
});

export default styles;
