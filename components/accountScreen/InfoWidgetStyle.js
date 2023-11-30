import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
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
    width: 250,
    height: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
  },
  favoriteView: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  favoriteNav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
    marginVertical: 10,
  },
  separation: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
  },
  cardScroll: {
    height: "90%",
    width: 100,
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
