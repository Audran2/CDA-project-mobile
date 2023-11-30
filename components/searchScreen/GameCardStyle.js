import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  containerCard: {
    borderRadius: 10,
    overflow: "hidden",
  },
  titleGame: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  gameGenre: {
    color: "#C6C6C6",
    fontWeight: "bold",
  },
  gameComplement: {
    fontSize: 13,
    color: "#C6C6C6",
  },
  note: {
    width: 35,
    height: 35,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textNote: {
    color: "white",
    fontSize: 20,
    fontFamily: "KeaniaOne",
  },
  iconSupport: {
    fontSize: 20,
    color: "white",
    marginRight: 7,
  },
});

export default styles;
