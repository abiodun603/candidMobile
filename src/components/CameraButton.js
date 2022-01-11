import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const CameraButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={props.onPress}
            >
                <View 
                    style={{
                        height: 100, 
                        width: 100, 
                        borderRadius: 200,
                        borderWidth: 2,
                        borderColor: "#FFFFFF",
                        borderStyle: "solid",
                        alignItems: "center",
                        justifyContent: "center"

                    }}
                >
                    <View 
                        style={{
                            height: 90, 
                            width: 90, 
                            borderRadius: 50,
                            backgroundColor: "#FFFFFF",
                            padding: 10
                        }}>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default CameraButton

const styles = StyleSheet.create({
    container: {
        marginBottom: 45
    }
})
