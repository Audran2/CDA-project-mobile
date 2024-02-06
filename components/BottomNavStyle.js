import EStyleSheet from "react-native-extended-stylesheet";
import { colors } from "../assets/utils/_colors";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    gap: 15,
  },
  btnStyle: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#1b175c',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  btnModal: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default styles;
