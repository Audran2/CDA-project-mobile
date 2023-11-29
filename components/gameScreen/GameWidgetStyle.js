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
  cardSlider: {
    backgroundColor: "white",
    height: 100,
    width: 75,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default styles;
