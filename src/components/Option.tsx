import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";

const Option: FC<{
  text: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}> = ({ text, selected, setSelected }) => (
  <View
    style={[
      styles.optionContainer,
      selected === text && styles.selectedContainer,
    ]}
  >
    <TouchableOpacity onPress={() => setSelected(text)}>
      {selected === text ? (
        <Text style={[styles.option, styles.selected]}>{text}</Text>
      ) : (
        <Text style={styles.option}>{text}</Text>
      )}
    </TouchableOpacity>
  </View>
);

export default Option;

const styles = StyleSheet.create({
  optionContainer: {
    margin: "3%",
    width: "35%",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  selectedContainer: {
    backgroundColor: COLORS.optionSelected,
  },
  option: {
    color: COLORS.background,
    padding: "10%",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  selected: {
    color: COLORS.primary,
  },
});
