import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  gameTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 10,
    marginBottom: 10,
  },
  note: {
    position: "absolute",
    bottom: 60,
    right: 20,
    width: 50,
    height: 50,
    borderColor: "green",
    borderWidth: 4,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textNote: {
    color: "white",
    fontSize: 30,
    fontFamily: "KeaniaOne",
  },
  iconSupport: {
    fontSize: 24,
    color: "white",
    marginRight: 10,
  },
  GameSupportParent: {
    position: "relative",
  },
  gameSupport: {
    position: "absolute",
    right: 10,
    bottom: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    width: "auto",
  },
});

export default styles;
