import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 0,
    paddingHorizontal: 25,
  },
  titleCategory: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "transparent",
  },
  textCategory: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },
  blockParameter: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 0,
    padding: 17,
    paddingLeft: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    paddingLeft: 1,
    paddingTop: -1,
    overflow: "hidden",
  },
});

export default styles;
