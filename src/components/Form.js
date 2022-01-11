import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const Form = () => {
    return (
        <SafeAreaView>
            <View style={styles.action}>
                <Text>{}</Text>
                <TextInput
                    placeholder={}
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholderTextColor={COLORS.black}
                />
            </View>
        </SafeAreaView>
    )
}

export default Form


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    currentUser: {
        marginTop: height * 0.05,
    },
    username: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Poppins-Regular",
        color: COLORS.black,
    },
    textInput: {
        paddingLeft: 30,
        fontSize: 16,
        color: COLORS.black,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    button2: {
        backgroundColor: COLORS.blue,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
    },
    SignIn: {
        widht: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold"
    },
    action: {
        flexDirecton: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#8F92A1",
        paddingBottom : 5,
        position: 'relative'
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Poppins-Regular",
        marginTop: height * 0.05,
        marginBottom: -10
    },
    text: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        fontWeight: "700",
        letterSpacing: .7
    }
})
