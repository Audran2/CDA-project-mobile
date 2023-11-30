import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  subSpec: {
    color: "white",
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#C6C6C6",
    marginTop: 15,
    marginBottom: 7,
  },
  cardScroll: {
    height: 100,
    width: 75,
    backgroundColor: "blue",
    marginRight: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default styles;
