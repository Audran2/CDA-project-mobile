import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  headContainer: {
    backgroundColor: "white",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  gameSupport: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "20%",
    marginLeft: 10,
  },
  iconSupport: {
    fontSize: 24,
    color: "white",
    marginRight: 10,
  },
  playerInfo: {
    position: "relative",
  },
  playerInfoSub: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7,
  },
  playerName: {
    fontSize: 22,
    color: "white",
  },
  playerRegion: {
    fontSize: 18,
    color: "white",
  },
});

export default styles;
