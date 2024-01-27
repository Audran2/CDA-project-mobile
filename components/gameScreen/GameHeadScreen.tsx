import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { getColorGrade } from "../../assets/utils/_functions";
import { colors } from "../../assets/utils/_colors";
import { type GameHeadType } from "../../types.js";
import styles from "./GameHeadScreenStyle.js";

export default function GameHeadScreen({
  isGame = true,
  title,
  backgroundImage,
  creationDate,
  note,
  plateformes,
}: GameHeadType) {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      style={{
        height: isGame ? height / 2.2 : height / 2.5,
        width: width,
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={backgroundImage}
        style={{
          width: "100%",
          height: isGame ? "100%" : "90%",
          justifyContent: "center",
        }}
      >
        <LinearGradient
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "column",
          }}
          start={{ x: 0.5, y: 0.85 }}
          end={{ x: 0.5, y: isGame ? 0.55 : 0.75 }}
          colors={[colors.darkblue, "transparent"]}
        >
          <View style={styles.bottomContainer}>
            <View>
              {isGame ? (
                <Text style={styles.gameTitle}>{title}</Text>
              ) : (
                <Text style={styles.creationDate}> Créé le {creationDate}</Text>
              )}
            </View>
            {isGame && (
              <View
                style={[styles.note, { borderColor: getColorGrade(note || 0) }]}
              >
                <Text style={styles.textNote}>{note}</Text>
              </View>
            )}
            <View style={styles.GameSupportParent}>
              <View style={styles.gameSupport}>
                {isGame ? (
                  <>
                    {plateformes.includes("Switch") && (
                      <MaterialCommunityIcons
                        name="nintendo-switch"
                        style={styles.iconSupport}
                      />
                    )}
                    {plateformes.includes("Xbox") && (
                      <FontAwesome5 name="xbox" style={styles.iconSupport} />
                    )}
                    {plateformes.includes("PlayStation") && (
                      <FontAwesome5
                        name="playstation"
                        style={styles.iconSupport}
                      />
                    )}
                    {plateformes.includes("PC") && (
                      <MaterialIcons
                        name="computer"
                        style={styles.iconSupport}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {/* {social[0] && (
                      <TouchableOpacity>
                        <Feather name="globe" style={styles.iconSupport} />
                      </TouchableOpacity>
                    )}
                    {social[1] && (
                      <TouchableOpacity>
                        <FontAwesome5
                          name="youtube"
                          style={styles.iconSupport}
                        />
                      </TouchableOpacity>
                    )}
                    {social[2] && (
                      <TouchableOpacity>
                        <FontAwesome5
                          name="twitter"
                          style={styles.iconSupport}
                        />
                      </TouchableOpacity>
                    )}
                    {social[3] && (
                      <TouchableOpacity>
                        <FontAwesome5
                          name="instagram"
                          style={styles.iconSupport}
                        />
                      </TouchableOpacity>
                    )} */}
                  </>
                )}
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
