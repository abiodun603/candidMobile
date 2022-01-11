import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Setting = () => {
    return (
        <View  style = {styles.container}>
            <Text>Setting</Text>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
