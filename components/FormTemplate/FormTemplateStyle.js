import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 25,
    letterSpacing: 1,
  },
  dropDown: {
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  inputField: {
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 12,
  },
  iconContainer: {
    position: "absolute",
    zIndex: 1,
  },
  icon: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -10 }],
    right: 15,
    paddingLeft: 10,
    borderLeftWidth: 1,
  },
  validIcon: {
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  containerLabel: {
    backgroundColor: "transparent",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    marginRight: 5,
  },
  requiredAsterisk: {
    fontSize: 16,
    color: "red",
  },
  line: {
    marginTop: 2,
    height: 1.5,
  },
});

export default styles;
