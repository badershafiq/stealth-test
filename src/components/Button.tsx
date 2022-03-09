import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";

const Button: FC<{
  selected: string;
  completed: boolean;
  submit: () => void;
  restart: () => void;
}> = ({ selected, completed, submit, restart }) => (
  <TouchableOpacity
    style={styles.continueContainer}
    onPress={completed ? restart : submit}
  >
    <Text style={styles.continueText}>
      {completed ? "Start Again" : selected ? "Check Answer" : "Continue"}
    </Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  continueContainer: {
    alignItems: "center",
    backgroundColor: COLORS.optionSelected,
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: "10%",
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    width: "60%",
  },
  continueText: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: "700",
  },
});
