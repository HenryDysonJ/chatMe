import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ChatLogoIcon from '../../assets/chatIcon'

const IntroScreen = () => {

    return (
        <View style={styles.intriContaainer}>
            <View style={styles.imgViewStyle}>
                <ChatLogoIcon />
            </View>
            <View style={styles.vuersionViewStyle}>
                <Text style={styles.vertionStyle}>V 1.0.1</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    intriContaainer: {
        flex: 1,
    },
    imgViewStyle: {
        flex: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    vuersionViewStyle: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    vertionStyle: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        color: '#000'
    }
});

export default IntroScreen