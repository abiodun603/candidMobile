import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import CameraButton from '../../components/CameraButton'
import RNFS from "react-native-fs"

const Camera = () => {
    const [{cameraRef}, {takePicture}] = useCamera(null)

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg'
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log("IMAGE MOVED", filePath, "-- to --", newFilePath);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style = {styles.preview}
                // captureAudio={false}
            >
                <CameraButton
                    // onPress = {() => captureHandle()} 
                />
            </RNCamera>
        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    preview: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    }
})
