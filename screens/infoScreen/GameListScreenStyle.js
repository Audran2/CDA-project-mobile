import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/utils/_colors";

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    btn: {
        borderWidth: 2,
        borderColor: colors.alternativeBlue,
        borderRadius: 20,
        overflow: "hidden",
        marginHorizontal: 5,
      },
      btnText: {
        color: "white",
        fontSize: 16,
        paddingHorizontal: 18,
        paddingVertical: 5,
      },
})

export default styles;