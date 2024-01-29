import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/utils/_colors";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputSearch: {
    padding: 5,
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    zIndex: 10,
  },
  iconContainer: {
    position: "absolute",
    left: 8,
    top: 8,
    zIndex: 20,
  },
  btn: {
    borderWidth: 2,
    borderColor: colors.alternativeBlue,
    borderRadius: 20,
    overflow: "hidden",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
});

export default styles;
