import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const CorrectPhrase: FC<{ phrase: string }> = ({ phrase }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{phrase}</Text>
    </View>
  );
};

export default CorrectPhrase;

const styles = StyleSheet.create({
  container: {
    marginVertical: "7%",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: COLORS.primary,
    fontFamily: "Cochin",
    fontSize: 22,
    fontWeight: "700",
  },
});
