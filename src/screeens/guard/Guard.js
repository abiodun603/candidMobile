import React from 'react'
import {useNavigation} from "@react-navigation/native"
import {Pressable , ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../assets'

const MyTextInput = ({label, icon, ...props}) => {
    return (
        <View>
            <Text style={{
                color: COLORS.black,
                textAlign: "left",
                ...FONTS.h3
            }}>
                {label}
            </Text>
            <TextInput 
            {...props}
            style={{
                backgroundColor: "#F3F5F7",
                padding: 15,
                fontSize: 16,
                borderRadius: 5,
                marginVertical:3,
                marginBottom: 20,
            }}/>
        </View>
    )
}

const Guard = () => {
    const navigation = useNavigation()

    return (
        <ScrollView style = {styles.container} showsVerticalScrollIndicator={false}>
            <View style={{alignItems:"center", marginTop: 20}} >
                    <View style={{width: "85%"}}>
                    <MyTextInput
                        label="Name"
                        placeholder="Enter guard name..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                    />
                    <MyTextInput
                        label="Address"
                        placeholder="Enter guard address..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                        multiline = {true}
                    />
                    <MyTextInput
                        label="Phone Number"
                        placeholder="Enter guard mobile number..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "phone-pad"
                    />
                    <MyTextInput
                        label="Religion"
                        placeholder="Enter guard religion..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                    />
                    <MyTextInput
                        label="Occupation"
                        placeholder="Enter guard occupation..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                    />
                    <MyTextInput
                        label="Position"
                        placeholder="Enter guard position..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                    />
                    <MyTextInput
                        label="Office Address"
                        placeholder="Enter guard office address..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                        multiline = {true}
                    />
                    <MyTextInput
                        label="Relationship to applicant"
                        placeholder="Enter guard relationship..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                    />
                    <MyTextInput
                        label="Remark"
                        placeholder="Enter remark..."
                        placeholderTextColor="#9CA3AF"
                        keyboardType = "default"
                        multiline = {true}
                    />
                    <Pressable style={styles.button2} onPress={() => navigation.navigate("Camera")}>
                        <Text style={styles.text}>Capture Guard </Text>
                    </Pressable>

                    <Pressable style={[styles.button2, {marginBottom: 200, marginTop: 20}]} onPress={null}>
                        <Text style={styles.text}>Submit </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default Guard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
    },
    button2: {
        backgroundColor: COLORS.blue,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
    },
    text: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        fontWeight: "700",
        letterSpacing: .7
    }

})
