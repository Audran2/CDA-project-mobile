import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../../assets/utils/_colors";

const styles = EStyleSheet.create({
    textTitle: {
        fontSize: 22,
        fontFamily: "KeaniaOne",
        color: colors.white,
        marginBottom: 10,
      },
      cardContainer: {
        height: 150,
        borderRadius: 6,
        overflow: "hidden",
        marginBottom: 20,
      },
      imageBackground: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(48, 43, 79, 0.4)",
        padding: 10,
        justifyContent: "space-between",
      },
      topCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      gameTitle: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
      },
      gameInfo: {
        color: colors.white,
      },
      note: {
        width: 35,
        height: 35,
        borderWidth: 3,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      textNote: {
        color: colors.white,
        fontSize: 20,
      },
      statusContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },
      statusBadge: {
        backgroundColor: colors.white,
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
      },
      statusText: {
        color: colors.white,
        fontWeight: "bold",
      },
});

export default styles;