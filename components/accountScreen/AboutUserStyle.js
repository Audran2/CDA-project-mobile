import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#C6C6C6",
    marginTop: 10,
    marginBottom: 5,
  },
  friendsList: {
    flexDirection: "row",
  },
  iconUser: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default styles;
