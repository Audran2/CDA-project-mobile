import React from "react";
import { Modal, View, Image } from "react-native";
import { BlurView } from "expo-blur";

const LoaderModal = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={() => {}}
    >
      <BlurView
        style={{ flex: 1, backgroundColor: "rgba(10, 7, 38, 0.6)" }}
        tint="light"
        intensity={50}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/video/loader.gif")} />
        </View>
      </BlurView>
    </Modal>
  );
};

export default LoaderModal;
