import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

const FillBlank: FC<{
  question: string;
  option: string;
}> = ({ question, option }) => (
  <View style={styles.container}>
    {question?.split(" ").map((word: String, index: number) => (
      <View key={index}>
        {word == "?" ? (
          <Text style={styles.selected}>{option ? option : "____"}</Text>
        ) : (
          <Text style={styles.question}> {word} </Text>
        )}
      </View>
    ))}
  </View>
);

export default FillBlank;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  question: {
    color: COLORS.primary,
    fontSize: 22,
  },
  selected: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
