import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/utils/_colors";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  controllerView: {
    backgroundColor: "transparent",
    paddingBottom: 10,
    marginHorizontal: 30,
  },
  btn: {
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  text: {
    color: colors.blue,
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: colors.white,
    borderColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
  },
  buttonText: {
    color: colors.darkblue,
    fontWeight: "bold",
  },
});

export default styles;
