import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FONTS } from '../../assets'

const Notification = () => {
    return (
        <View style={styles.container}>
            <Text style={{...FONTS.h2}}>GET Notification</Text>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
