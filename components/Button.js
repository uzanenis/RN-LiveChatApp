import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../config/constans";

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    buttonLabel:{
        fontSize: 20,
        fontWeight: '500',
        color: colors.primary,
    },
})

export default Button;
