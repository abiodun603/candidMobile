import React, {useState, useEffect} from "react"
import AsyncStorage  from "@react-native-async-storage/async-storage"
import {ActivityIndicator, StyleSheet, View, SafeAreaView, Image, Text, Pressable} from "react-native"
import { COLORS, SIZES, FONTS } from "../assets"
import welcome from "../assets/data/welcome"
import {Signin} from "./src/screeens";

import OnboardingScreen from "./OnboardingScreen"
import { useNavigation } from "@react-navigation/core"
 

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const clearOnboarding = async () => {
        try{
            await AsyncStorage.removeItem("@viewedOnboard");
            navigation.navigate("Signin")
        }catch(err){
            console.log('Error @clearOnboarding: ', err)
        }
    }
    return(

        <SafeAreaView style={styles.container}>
            {
                welcome.map((item, index) => {
                    return (
                        <View key={index} style={{flex: 1, width: SIZES.width}}>
                            <View style={{flex:0.55, alignItems:"center", justifyContent: "center"}}>
                                <Image 
                                    source={item.image}
                                    resizeMode= "contain"
                                    style = {{width:"85%",}}
                                />
                            </View>
                            <View style={{flex:0.4, paddingHorizontal: 30}}>
                                <Text style={{...FONTS.h2, color: COLORS.black, marginBottom: 12}}>
                                    {item.title}
                                </Text>
                                <Text style={{fontSize: 15, fontFamily:"Poppins-Regular", color: COLORS.black,}}>
                                    {item.description}
                                </Text>
                            </View>
                            <View style={{position:"absolute", bottom:"10%",width: SIZES.width,paddingHorizontal: 30}}>
                                <Pressable style={styles.button} onPress={clearOnboarding}>
                                {/* <Pressable style={styles.button} onPress={() => navigation.navigate("Signin")}> */}
                                    <Text style={styles.text}>LOGIN</Text>
                                </Pressable>
                            </View>
                            
                        </View>
                    )
                })
            }
        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },
    button: {
        backgroundColor: COLORS.blue,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius
    },
    text: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        fontWeight: "700",
        letterSpacing: .7
    }
})