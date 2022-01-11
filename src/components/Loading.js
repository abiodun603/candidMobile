import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { COLORS } from '../assets'

const Loading = () => (
    <View style={[styles.container]}>
        <ActivityIndicator size = "large" color= {COLORS.blue}/>
    </View>
)


export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})
