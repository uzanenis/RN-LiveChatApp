import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../config/constans'
import Button from '../components/Button'

const Signup = () => {
  return (
    <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Create a New Account</Text>
                <TextInput style={styles.input} autoCapitalize="none" placeholder='Enter your name' />
                <TextInput style={styles.input} autoCapitalize="none" placeholder='Enter your email' />
                <TextInput style={styles.input} autoCapitalize="none" placeholder='Enter your password' />

                <View style={styles.buttonsContainer}>
                    <Button
                        label="Sign in"
                    />

                    <Button
                        label="Sign up"
                    />
                </View>
            </View>
            
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.primary,
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    title: {
        marginBottom: 20,
        fontSize: 32,
        fontWeight: '700',
        color: 'white',

    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 12,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 16,
    }
})

export default Signup