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
});

export default styles;
