import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import { COLORS, SIZES , FONTS} from '../assets'
const OnboardingItem = ({item, index}) => {

    return (
        <View style={{width: SIZES.width}}>
            <View style={{flex:1, alignItems:"center", justifyContent: "center"}}>
                <Image 
                    source={item.image} 
                    resizeMode= "contain"
                    style = {{flex:0.6, width:"85%"}}

                />
                {/* <Text>{item.description}</Text> */}
            </View>
            <View style={{flex:0.4, bottom: "10%", paddingHorizontal: 30}}>
                <Text style={{...FONTS.h2, color: COLORS.black, marginBottom: 12}}>
                    {item.title}
                </Text>
                <Text style={{fontSize: 15, fontFamily:"Poppins-Regular", color: COLORS.black,}}>
                    {item.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow"
        // backgroundColor: "red"
    },

    image: {
        flex: 1,
        justifyContent: "center",
        // display: "none"
    },

    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        color: "#09185E",
        textAlign: "center"
    },

    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})

export default OnboardingItem


