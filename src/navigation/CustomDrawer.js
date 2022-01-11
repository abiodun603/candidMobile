import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import {useNavigation} from "@react-navigation/native"
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer"
import {COLORS, SIZES, FONTS} from "../assets"
import {MainLayout, Guard, Search, Notification, Setting} from "../screeens"
import cross from "../assets/images/icons/close.png"
import profilePic from "../assets/images/profile/about1.jpeg"
import {constants} from "../constants"
import addUser from "../assets/images/icons/add-use.png"
import home from "../assets/images/icons/home.png"
import search from "../assets/images/icons/search.png"
import notification from "../assets/images/icons/bell.png"
import logout from "../assets/images/icons/logout.png"
import Animated  from 'react-native-reanimated'
import {connect} from "react-redux"
import { setSelectedTab } from '../stores/tab/tabAction'
const Drawer = createDrawerNavigator()


const curr__user = {
    display__name : "Olatunji Abiodun",
    user__image : require("../assets/images/profile/about1.jpeg")
}


const CustomDrawerItem = ({label, icon, onPress, isFocused}) => {
    // const navigation = useNavigation()

    return(
        <TouchableOpacity
            style ={{
                flexDirection: "row",
                height: 40,
                marginBottom: SIZES.base,
                alignItems: "center",
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: isFocused ? COLORS.white : null
            }}
            onPress = {onPress}
        >
            <Image source={icon} style={{
                width: 20,
                height: 20,
                tintColor: isFocused ? COLORS.blue: COLORS.white
            }}/>
            <Text style={{ marginLeft: 15, color: isFocused ? COLORS.blue : COLORS.white, ...FONTS.h3, letterSpacing: 0.9}}>{label}</Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex: 1, backgroundColor: COLORS.blue}}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 20

                }}
            >
                {/*================== CLOSE BUTTON ================== */}
                <View 
                    style = {{
                        alignItems: "flex-start",
                        justifyContent: "center",
                        marginTop: 20
                    }}
                >
                    <TouchableOpacity
                        style ={{
                            alignItems: "center",
                            justifyContent: "center"
                        }}

                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image source={cross} style={{width: 15, height: 15, tintColor: COLORS.white}}/>
                    </TouchableOpacity>
                </View>
                {/* ===================== PROFILE =================== */}
                <TouchableOpacity
                    style={{
                        marginTop:SIZES.radius,
                        alignItems: "flex-start"
                    }}
                    onPress={() => console.log("Home Page")}
                >
                    <Image source={curr__user.user__image} 
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 10,
                            marginTop: 25
                        }}
                    />
                    <Text style={{
                        marginTop: 20,
                        color: COLORS.white,
                        fontSize: 20,
                        fontFamily: "Poppins-Regular"
                    }}> 
                        {curr__user.display__name}
                    </Text>
                    <Text style = {{marginTop: 6, color: COLORS.white, fontFamily: "Poppins-Regular", fontSize: 14}}>View Profile</Text>
                </TouchableOpacity>
                {/* =========== DRAWER CONTENT =============== */}
                <View 
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon = {home}
                        onPress= {() => {
                            console.log("Home Page")
                            setSelectedTab(constants.screens.home)
                            navigation.navigate("MainLayout")
                        }}
                        isFocused={selectedTab == constants.screens.home}
                    />
                    <CustomDrawerItem
                        label={constants.screens.guard}
                        icon = {addUser}
                        onPress= {() =>{
                            console.log("Guard Page")
                            setSelectedTab(constants.screens.guard)
                            navigation.navigate("MainLayout")
                        }}
                        isFocused = {selectedTab == constants.screens.guard}
                    />
                    <CustomDrawerItem
                        label={constants.screens.search}
                        icon = {search}
                        onPress= {() => {
                            setSelectedTab(constants.screens.search)
                            navigation.navigate("MainLayout")
                        }}
                        isFocused = {selectedTab == constants.screens.search}
                    />
                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon = {notification}
                        onPress= {() => {
                            setSelectedTab(constants.screens.notification)
                            navigation.navigate("MainLayout")
                        }}
                        isFocused = {selectedTab == constants.screens.notification}
                    />
                </View>
                {/* ======= LOG OUT ============ */}
                <View>
                    <CustomDrawerItem
                        label="Logout"
                        icon = {logout}
                        onPress={() => {
                            navigation.navigate("Signin")
                        }}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
const CustomDrawer = ({selectedTab, setSelectedTab}) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.blue,
            }}
        >
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="red"
                drawerStyle={{
                    flex: 1,
                    width: "65%",
                    paddingRight: 20,
                    backgroundColor: "red"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"
                }}
                initialRouteName="MainLayout"
                screenOptions={{headerShown: false}}
                drawerContent={props => {
                    return (
                        <CustomDrawerContent
                            navigation ={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout" >
                    {props => <MainLayout {...props}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({})

function  mapStateToProps (state){
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch){
    return {
    setSelectedTab: (selectedTab) => {
           return dispatch(setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)