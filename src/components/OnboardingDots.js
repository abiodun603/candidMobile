import React from 'react'
import { StyleSheet, View ,Text} from 'react-native'
import { COLORS, SIZES } from '../assets'

const OnboardingDots = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.dot}></View>
        </View>
    )
}

export default OnboardingDots

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    
    dot: {
        width:10,
        height:10,
        borderRadius: 5,
        backgroundColor: COLORS.blue,
        marginHorizontal: 5
    }
})
