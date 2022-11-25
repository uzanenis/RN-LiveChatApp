import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";
import Cell from "../components/Cell"
import { colors } from "../config/constans";

const Settings = () => {
  return (
    <View>
      <ContactRow name="Enis" subTitle="Selam" style={styles.contactRow} />
      <Seperator />
      <Cell
        title="Logout"
        icon="log-out-outline"
        tintColor={colors.warning}
        onPress = {() => {
            alert("Logout")
        }}
      />
      <Seperator />
      <Cell
        title="Tell a Friend"
        icon="heart-outline"
        tintColor="#E91E63"
        onPress = {() => {
            alert("Tell a Friend")
        }}
        style={{marginTop: 20}}
      />
      <Seperator />
      <Cell
        title="Help"
        icon="information"
        tintColor="#81C784"
        onPress = {() => {
            alert("Help")
        }}
        
      />
      <Seperator />
      
    </View>
  );
};

const styles = StyleSheet.create({
    contactRow: {
      backgroundColor: "white",
      marginTop: 16,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.seperator,
    },
  });

export default Settings;
