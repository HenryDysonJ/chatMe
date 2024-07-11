import React from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import ForgotBanner from '../../assets/forgotBanner';
import EmailAtIcon from '../../assets/emailAt';

const ForgotPassword = () => {

    return (
        <View style={styles.welcomeContaainer}>
            <View style={styles.imgViewStyle}>
                <ForgotBanner />
            </View>
            <View>
                <Text style={styles.forgetTextStyle}>Forget Password?</Text>
                <Text style={styles.textStyle}>Don’t worry! Enter your email to receive a restoration link.</Text>

                <View style={styles.inputRootStyle}>
                    <EmailAtIcon />
                    <TextInput
                        placeholder='E-mail'
                        placeholderTextColor={'#c7c7c7'}
                        style={styles.inputStyle}
                    />
                </View>
            </View>
            <View style={styles.textViewStyle}>
                <TouchableHighlight style={styles.btnStyle}>
                    <Text style={{ ...styles.textStyle, textAlign: "center", color: '#fff' }}>Continue</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContaainer: {
        flex: 1,
        paddingHorizontal: 34
    },
    imgViewStyle: {
        flex: 2,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textViewStyle: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    forgetTextStyle: {
        fontSize: 30,
        fontWeight: '600',
        color: '#5E30E7',
        textAlign: "left",
        marginBottom: 20,
        width: "60%",
        lineHeight: 40
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#000',
        width: '100%',
        textAlign: "left"
    },
    btnStyle: {
        backgroundColor: "#5E30E7",
        padding: 10,
        borderRadius: 12,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 34
    },
    inputRootStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        borderBottomWidth: .8,
        borderBottomColor: '#808080',
        marginTop: 20
    },
    inputStyle: {
        fontSize: 16
    },
});

export default ForgotPassword