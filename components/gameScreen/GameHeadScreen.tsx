import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
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
  reseaux,
}: GameHeadType) {
  const { height, width } = Dimensions.get("window");

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const dateObj = creationDate ? parseISO(creationDate) : new Date();

    const formatted = format(dateObj, "dd MMMM yyyy", { locale: fr });
    setFormattedDate(formatted);
  }, [creationDate]);

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
                <Text style={styles.creationDate}>
                  {" "}
                  Créé le {formattedDate}
                </Text>
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
                    {reseaux.siteInternet && (
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(reseaux.siteInternet ?? "")
                        }
                      >
                        <Feather name="globe" style={styles.iconSupport} />
                      </TouchableOpacity>
                    )}
                    {reseaux.youtube && (
                      <TouchableOpacity
                        onPress={() => Linking.openURL(reseaux.youtube ?? "")}
                      >
                        <FontAwesome5
                          name="youtube"
                          style={styles.iconSupport}
                        />
                      </TouchableOpacity>
                    )}
                    {reseaux.twitter && (
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            `https://twitter.com/${reseaux.twitter}`
                          )
                        }
                      >
                        <FontAwesome5
                          name="twitter"
                          style={styles.iconSupport}
                        />
                      </TouchableOpacity>
                    )}
                    {reseaux.instagram && (
                      <TouchableOpacity
                        onPress={() =>
                          Linking.openURL(
                            `https://www.instagram.com/${reseaux.instagram}`
                          )
                        }
                      >
                        <FontAwesome5
                          name="instagram"
                          style={styles.iconSupport}
                        />
                      </TouchableOpacity>
                    )}
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
