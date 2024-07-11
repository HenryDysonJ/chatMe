import React from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import SignupBanner from '../../assets/signUpBanner';
import UserIcon from '../../assets/user';
import EmailAtIcon from '../../assets/emailAt';
import LockIcon from '../../assets/lockIcon';
import GoogleIcon from '../../assets/google';

const SignIn = () => {

    return (
        <View style={styles.screenContainer}>
            <View style={styles.imgViewStyle}>
                <SignupBanner />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.signTextStyle}>Sign in</Text>
                <View style={styles.inputRootStyle}>
                    <EmailAtIcon />
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor={'#c7c7c7'}
                        style={styles.inputStyle}
                    />
                </View>
                <View style={styles.inputRootStyle}>
                    <LockIcon />
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor={'#c7c7c7'}
                        style={styles.inputStyle}
                    />
                </View>
                <View style={{ marginTop: 0 }}>
                    <Text style={{ ...styles.textStyle, textAlign: "right", color: '#5E30E7' }}> Forget Password? </Text>
                </View>

                <TouchableHighlight style={styles.btnStyle}>
                    <Text style={{ ...styles.textStyle, color: '#fff' }}>Login</Text>
                </TouchableHighlight>

                <View style={{ ...styles.rowContainer, marginTop: 24 }}>
                    <View style={styles.horizandalLine}></View>
                    <Text style={{ ...styles.textStyle, color: '#4d4d4d' }}>or</Text>
                    <View style={styles.horizandalLine}></View>
                </View>

                <TouchableHighlight style={styles.secondaryBtnStyle}>
                    <View style={{...styles.rowContainer,columnGap:24}}>
                        <GoogleIcon />
                        <Text style={{ ...styles.textStyle, color: '#808080', fontWeight: '400' }}>Login with Google</Text>
                    </View>
                </TouchableHighlight>

                <View style={{ marginTop: 24 }}>
                    <Text style={{ ...styles.textStyle, textAlign: "center", color: '#4d4d4d' }}>New User?
                        <Text style={{ ...styles.textStyle, color: '#5E30E7' }}> Register </Text>
                    </Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingHorizontal: 30
    },
    imgViewStyle: {
        flex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    formContainer: {
        flex: 5,
    },
    signTextStyle: {
        fontSize: 30,
        fontWeight: '700',
        color: '#5E30E7',
        textAlign: "left",
        marginBottom: 20
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: '#000',
        textAlign: "left",
    },
    btnStyle: {
        backgroundColor: "#5E30E7",
        padding: 10,
        borderRadius: 12,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24
    },
    inputRootStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        borderBottomWidth: .8,
        borderBottomColor: '#808080',
        marginBottom: 20
    },
    inputStyle: {
        fontSize: 16
    },
    horizandalLine: {
        height: 1,
        width: '40%',
        backgroundColor: "#E7E7E7"
    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    secondaryBtnStyle: {
        backgroundColor: "#E7E7E7",
        padding: 10,
        borderRadius: 12,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }
});

export default SignIn