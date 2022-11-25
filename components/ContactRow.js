import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constans";

const ContactRow = ({ name, subTitle , onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
          {name ? name.split(" ").map((word) => word.charAt(0)) : null}
        </Text>
      </View>

      <View style={styles.textsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#FAFAFA'
  },
  textsContainer: {
    flex: 1,
    marginStart: 16,
  },

  name: {
    fontSize: 16,
  },
  subTitle: {
    marginTop: 4,
    color: "#565656",
  },
  avatar: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: "50%",
  },
  avatarLabel: {
    fontSize: 20,
    color: "white",
  },
});

export default ContactRow;
