import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import HelloDrible from '../../assets/heloDribble';

const WelcomeScreen = ({ navigation }: any) => {

    const handleMove = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.welcomeContaainer}>
            <View style={styles.imgViewStyle}>
                <HelloDrible />
                <Text style={styles.textStyle}>  Welcome to the chat app Here you can make friends, talk to them and also create some room in case of a group talks. Feel free to express yourself.</Text>
            </View>
            <View style={styles.textViewStyle}>
                <TouchableHighlight style={styles.btnStyle} onPress={handleMove}>
                    <Text style={{ ...styles.textStyle, color: '#fff' }}>Continue</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContaainer: {
        flex: 1,
    },
    imgViewStyle: {
        flex: 9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textViewStyle: {
        flex: 2,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24,
        color: '#000',
        width: '70%',
        textAlign: "center"
    },
    btnStyle: {
        backgroundColor: "#5E30E7",
        padding: 10,
        borderRadius: 12,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default WelcomeScreen