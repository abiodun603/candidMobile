import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React, {useState, useEffect} from "react"
import {ActivityIndicator, StyleSheet, View} from "react-native"
import {Home, OnboardingScreen, Signin, SplashScreen, WelcomeScreen, HomeScreen, Camera} from "./src/screeens";
import AsyncStorage  from "@react-native-async-storage/async-storage"
import Tabs from "./src/navigations/tabs"
import  CustomDrawer from "./src/navigation/CustomDrawer"
import { COLORS } from "./src/assets";
import { Loading } from "./src/components";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [loading, setLoading] = useState(true)
    const [viewedOnboarding, setViewedOnboarding] = useState(false)


    const checkOnboarding = async () => {
        try {
            const value = await AsyncStorage.getItem("@viewedOnboard")

            if(value !== null){
                setViewedOnboarding(true)
            }
        } catch (err) {
            console.log("Error @checkOnboard", err)
        } finally {
            setLoading(false)
        }
    }
    // useEffect(() => {
    //     SplashScreen.hide()
    // })

    useEffect(() => {
        checkOnboarding()

    }, [])
    return (

        <Stack.Navigator  screenOptions = {{headerShown : false}} initialRouteName = {"Home"}>
            {
                loading ? <Stack.Screen name="Loading" component={Loading}/> : viewedOnboarding ? <Stack.Screen name="Welcome" component={WelcomeScreen} options={{header: false}}/> : <Stack.Screen name="Onboard" component={OnboardingScreen} options={{header: false}}/>
            }
            <Stack.Screen name="LOVE" component={WelcomeScreen} options={{header: false}}/>
            <Stack.Screen name="Signin" component={Signin} options={{header: false}}/> 
            <Stack.Screen name="CustomDrawer" component={CustomDrawer} options={{header: false}}/> 
            <Stack.Screen name="Camera" component={Camera} options={{header: false}}/> 

        </Stack.Navigator>
    )
}

export default StackNavigator

