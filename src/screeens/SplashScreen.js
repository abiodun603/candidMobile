import React from 'react'
import {StyleSheet, Text, View,SafeAreaView } from 'react-native'

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>CANDID</Text>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#09185E",
        alignItems: "center",
        justifyContent: "center",
        elevation:0,
    },

    text: {
        color: "#FFFFFF",
        fontSize: 48,
        fontFamily: "Coda-Regular"
    }
})
