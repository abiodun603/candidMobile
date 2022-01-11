import React, {useState, useRef} from 'react'
import { Animated, SafeAreaView, StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import AsyncStorage  from "@react-native-async-storage/async-storage"
import {useNavigation} from "@react-navigation/native"
// import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES ,FONTS} from '../assets'
import slides from "../assets/data/slides"
import {OnboardingItem, OnboardingDots, Paginator, NextButton} from '../components'
const {width, height} = Dimensions.get("window")
const OnboardingScreen = () => {
    const navigation = useNavigation()
    const [currentIndex, setCurrentIndex] = useState(0)

    const scrollX = useRef(new Animated.Value(0)).current 
    const ref = useRef(null)

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current


    const updateCurrentSlideIndex = e => {
        // const contentOffsetX = e.nativeEvent.contentOffset.x;
        // console.log(e)
        const contentOffsetX = e.nativeEvent.contentOffset.x
        const currentIndex = Math.round(contentOffsetX / width)
        setCurrentIndex(currentIndex)
    }
    const scrollTo = async() => {
        // const nextSlideIndex = currentIndex + 1;
        if(currentIndex < slides.length-1){
            // const offset = nextSlideIndex * width;
            ref.current.scrollTo({index: currentIndex + 1});
            console.log(currentIndex)
            // setCurrentIndex(nextSlideIndex)
        }else{
            try{
                const tab = await AsyncStorage.setItem('@viewedOnboard', 'true');
                navigation.navigate("LOVE")
            }catch(err){
                console.log('Erro @setItem: ', err)
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Animated.ScrollView
                onMomentumScrollBegin = {updateCurrentSlideIndex}
                ref={ref}
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate= {0}
                 onScroll = {Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}},
                ], {useNativeDriver: false})}
                scrollEventThrottle={16}
                snapToAlignment = "center"
                showsHorizontalScrollIndicator= {false}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig = {viewConfig}
            >
                {
                    slides.map((item, index) => <OnboardingItem item={item} key={index}/>)
                }
            </Animated.ScrollView>
            <View style= {{ flexDirection: "row", width: SIZES.width, alignItems: "center", justifyContent: "center", height: SIZES.padding, position: "absolute", bottom: SIZES.height > 700 ? "25%": "10%"}}>
                <Paginator data = {slides} scrollX = {scrollX} />
            </View>
            <Text style={{...FONTS.body3, color: COLORS.black, position: "absolute", top: 15, right: 15}}>skip</Text>
            <NextButton scrollTo={scrollTo}  percentage={(currentIndex + 1) * (100/ slides.length)} />
        </SafeAreaView>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: COLORS.white
    }
})
