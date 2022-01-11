import React, {useRef, useEffect} from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { COLORS, SIZES , FONTS} from '../assets'
import Svg, {G, Circle} from 'react-native-svg'
import arrowRight from "../assets/images/icons/arrow-right.png"


const NextButton = ({percentage, scrollTo}) => {
    const size = 128;
    const strokeWidth = 2;
    const center = size/2;
    const radius = size/2 - strokeWidth/2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;

            if(progressRef?.current){
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        })
        // animation(percentage);
    }, [percentage])
    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    {/* <Circle stoke="#E6E7E8" cx={center} cy={center} r={radius} strokeWidth={strokeWidth}/>
                    <Circle
                        ref={progressRef}
                        stroke={COLORS.blue}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    /> */}
                </G>
            </Svg> 
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                <Image source={arrowRight} style={{width: 10, height: 15, alignItems: "center", justifyContent: "center"}}/>
            </TouchableOpacity>
        </View>
    )
}

export default NextButton

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        position: "absolute",
        backgroundColor: COLORS.blue,
        borderRadius: 1000,
        padding: 35,
    }
})
