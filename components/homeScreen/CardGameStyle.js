import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  cardContainer: {
    height: 170,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(48, 43, 79, 0.7)",
  },
  cardContent: {
    padding: 5,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flex: 1,
  },
  gameTitle: {
    fontFamily: "KeaniaOne",
    fontSize: 18,
    color: "white",
  },
  user: {
    flexDirection: "row",
  },
  userName: {
    fontSize: 20,
    color: "white",
    fontFamily: "KeaniaOne",
    marginLeft: 10,
  },
  iconUser: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default styles;
