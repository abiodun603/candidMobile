import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../assets';
import user from "../assets/images/icons/user-plus.png"
import search from "../assets/images/icons/search-regular.png"

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    ...FONTS.h2,
                    color: COLORS.black,

                }}
            >
                Candid Security
            </Text>
            <Text
                style={{
                    ...FONTS.body3,
                    color: COLORS.gray,
                    marginTop: 10
                }}
            >
                Start by seeing your role and what  you{'\n'}are entitle to do with the app
            </Text>

            <View
                style={{
                    marginTop: 20
                }}
            >
                <View
                    style={{
                        height: 180,
                        backgroundColor: COLORS.lightGray1,
                        borderRadius: SIZES.radius,
                        paddingHorizontal: 15,
                        justifyContent: "center"
                    }}
                >
                    <Image
                        source={user}
                        style={{
                            marginBottom: 10
                        }}
                    />
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}
                    >
                        Add Guards
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4,
                            paddingRight: 20,
                            marginTop: 10
                        }}
                    >
                        Add Guard Details by clicking on the add button below or using the drawer navigation
                    </Text>

                </View>
                <View
                    style={{
                        height: 180,
                        backgroundColor: COLORS.lightGray1,
                        borderRadius: SIZES.radius,
                        paddingHorizontal: 15,
                        justifyContent: "center",
                        marginTop: 20
                    }}
                >
                    <Image
                        source={search}
                        style={{
                            marginBottom: 10
                        }}
                    />
                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}
                    >
                        Search Guards Document
                    </Text>
                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4,
                            paddingRight: 20,
                            marginTop: 10
                        }}
                    >
                       Access guards data anywhere, anytime at your convience without stress.
                    </Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 26,
        marginTop: 40
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;