import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  cardView: {
    backgroundColor: "#190b85",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#0216cc",
  },
  cardContainer: {
    width: "35%",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    overflow: "hidden",
  },
  userTitle: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 7,
    marginBottom: 2,
  },
  userSubtitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 7,
  },
  iconSupport: {
    fontSize: 16,
    color: "white",
    marginRight: 5,
  },
});

export default styles;
