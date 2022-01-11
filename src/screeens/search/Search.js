import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FONTS } from '../../assets'

const Search = () => {
    return (
        <View style = {styles.container}>
            <Text style={{...FONTS.h2}}>Search For Guard</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent : "center"
    }
})
