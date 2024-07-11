import React from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import SignupBanner from '../../assets/signUpBanner';
import UserIcon from '../../assets/user';
import EmailAtIcon from '../../assets/emailAt';
import LockIcon from '../../assets/lockIcon';

const Signup = () => {

    return (
        <View style={styles.screenContainer}>
            <View style={styles.imgViewStyle}>
                <SignupBanner />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.signTextStyle}>Sign up</Text>
                <View style={styles.inputRootStyle}>
                    <UserIcon />
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor={'#c7c7c7'}
                        style={styles.inputStyle}
                    />
                </View>
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
                <View style={styles.rowStyle}>
                    <Text style={{ ...styles.textStyle, color: '#4d4d4d' }}>By signing up, you’re agree to our
                        <Text style={{ ...styles.textStyle, color: '#5E30E7' }}> Terms & Conditions </Text>
                        <Text style={{ ...styles.textStyle, color: '#4d4d4d' }}> and </Text>
                        <Text style={{ ...styles.textStyle, color: '#5E30E7' }}> Privacy Policies</Text>
                    </Text>
                </View>

                <TouchableHighlight style={styles.btnStyle}>
                    <Text style={{ ...styles.textStyle, color: '#fff' }}>Create account</Text>
                </TouchableHighlight>

                <View style={styles.rowStyle}>
                    <Text style={{ ...styles.textStyle, textAlign: "center", color: '#4d4d4d' }}>Already registered?
                        <Text style={{ ...styles.textStyle, color: '#5E30E7' }}> Login </Text>
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
    rowStyle: {
        marginTop: 24
    }
});

export default Signup