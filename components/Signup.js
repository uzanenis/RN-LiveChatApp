import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../config/constans'
import Button from '../components/Button'
import { signup } from '../axios'

const Signup = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        password: "",
        email: "",
        avatarImage: ""
    })

  return (
    <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Create a New Account</Text>
                <TextInput
                    style={styles.input} 
                    autoCapitalize="none" 
                    placeholder='Enter your name'
                    onChangeText={(e) => {
                        setFormData({
                            ...formData,
                            name: e
                        })
                    }}
                />
                <TextInput
                    style={styles.input} 
                    autoCapitalize="none" 
                    placeholder='Enter your lastname'
                    onChangeText={(e) => {
                        setFormData({
                            ...formData,
                            lastname: e
                        })
                    }}
                />
                <TextInput
                    style={styles.input} 
                    autoCapitalize="none" 
                    placeholder='Enter your email'
                    onChangeText={(e) => {
                        setFormData({
                            ...formData,
                            email: e
                        })
                    }}
                />
                <TextInput
                    style={styles.input} 
                    autoCapitalize="none" 
                    placeholder='Enter your password'
                    secureTextEntry={true}
                    onChangeText={(e) => {
                        setFormData({
                            ...formData,
                            password: e
                        })
                    }}
                />

                <View style={styles.buttonsContainer}>
                    <Button
                        label="Sign up"
                        onPress={() => {
                            signup(formData).then(res => {
                                if(res.status == 201)
                                navigation.navigate("Signin")
                            })
                            .catch(err => console.log(err))
                        }}
                    />
                    <Button
                        label="Sign in"
                        onPress={() => {
                            navigation.navigate("Signin")
                        }}
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