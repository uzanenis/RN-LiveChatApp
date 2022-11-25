import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { colors } from '../config/constans'


const Cell = ({title, icon, style, tintColor, onPress}) => {
  return (
    <TouchableOpacity
        style={[styles.cell, style]}
        onPress={onPress}
      >
        <View style={[styles.iconContainer,{backgroundColor: tintColor}]}>
            <Ionicons name={icon} size={20} color={'white'}/>
        </View>
        <Text style={styles.title}>
            {title}
        </Text>
        <Ionicons name="chevron-forward-outline" size={20}/>
        
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cell: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: 'white',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.seperator,
    },
    title: {
      flex: 1,
      fontSize: 16,
      marginStart: 16,
    },
    iconContainer: {
      width: 28,
      height: 28,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Cell