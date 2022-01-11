import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, Platform, TouchableOpacity, TextInput, Pressable} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import location from "../assets/images/icons/location.png"
import userIcon from "../assets/images/icons/user.png"
import lock from "../assets/images/icons/lock.png"
import logIn from "../assets/images/icons/log-in.png"
import { COLORS, SIZES, FONTS } from "../assets"

const curr_user = {
    username: "Candid Security"
}

const Signin = (user) => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.currentUser,{flexDirection: "row"}]}>
                <Image source={location} style={{marginRight: 10}}/>
                <Text style= {styles.username}>{curr_user.username}</Text>
            </View>
            <View style={[styles.currentUser]}>
                <Text style={{fontSize: 24,fontWeight: "bold", color: COLORS.black,fontFamily: "Poppins-Bold"}}>Let's Sign You In</Text>
                <Text style={{fontSize: 14, color: COLORS.black, marginTop: 5,fontFamily: "Poppins-Regular"}}>Welcome back, you've been missed!</Text>
            </View>
            <Text style ={styles.label}>Username or Email</Text>
            <View style={styles.action}>
                <Image source={userIcon} style={{position: "absolute",top:10, left: -5}}/>
                <TextInput
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholderTextColor={COLORS.black}
                />
                {/* <Feather /> */}
            </View>
            <Text style ={styles.label}>Password</Text>
            <View style={styles.action}>
                <Image source={lock} style={{position: "absolute",top:10, left: -2}}/>
                <TextInput
                    placeholder="****************"
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholderTextColor={COLORS.black}
                    // secureTextEntry = {hidePassword}
                    // isPassword = {true}
                />
                {/* <Feather /> */}
            </View>    
            <View style={{position:"absolute", bottom:"8%",width: SIZES.width, paddingHorizontal: 20,}}>
                <Pressable style={styles.button2} onPress={() => {navigation.navigate("CustomDrawer")}}>
                    <Text style={styles.text}>SIGN IN </Text>
                    <Image source={logIn} style={{position: "absolute", right: 25}}/>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Signin

const {height} = Dimensions.get("screen")

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


// 30 days in atlanta
// wives on strike