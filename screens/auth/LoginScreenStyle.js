import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/utils/_colors";

const width = Dimensions.get("window").width;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
      },
      InputContainer: {
        backgroundColor: "transparent",
      },
      input: {
        height: 40,
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.5,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 32,
        paddingRight: 32,
        marginTop: 30,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: "transparent",
      },
      text: {
        fontSize: 17,
        fontWeight: "bold",
        lineHeight: 21,
        letterSpacing: 0.25,
        color: colors.white,
      },
});

export default styles;