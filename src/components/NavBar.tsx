import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const NavBar: FC = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Stealth</Text>
  </View>
);
export default NavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.optionSelected,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: "5%",
    padding: "2%",
  },
  header: {
    color: COLORS.primary,
    fontFamily: "Cochin",
    fontSize: 28,
    fontWeight: "700",
  },
});
