import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../config/constans';

const Seperator = () => {
  return (
    <View style={styles.seperator} />
  )
}

const styles = StyleSheet.create({
    seperator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: colors.seperator,
      marginStart: 16,
    },
  });

export default Seperator