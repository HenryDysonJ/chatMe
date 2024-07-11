import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import B from '../../assets/images/b.jpg'
import LeftArrow from '../../assets/leftArrow'
import VectorIcon from '../../assets/vector'
import SendIcon from '../../assets/sendIcon'
import CameraIcon from '../../assets/camera'

const LiveChatScreen = ({ navigation }: any) => {

    const hanldleBack = (val: any) => {
        navigation.goBack()
    }

    return (
        <View style={styles.intriContaainer}>

            <View style={styles.betweenView}>
                <View style={styles.rowView}>
                    <Pressable onPress={hanldleBack}>
                        <LeftArrow />
                    </Pressable>
                    <View style={{ ...styles.profile, position: "relative" }}>
                        <Image source={B} style={styles.profile} />
                        {true && <View style={styles.isOnline}></View>}
                    </View>
                    <View style={{ alignItems: "flex-start", marginLeft: 10 }}>
                        <Text style={{ ...styles.subtitle }}>Henry</Text>
                        <Text style={{ ...styles.statustitle }}>Typing...</Text>
                    </View>
                </View>
                <VectorIcon />
            </View>

            <View style={styles.frameChat}>
                <View style={styles.rowView}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.subtitle}>Welcome</Text>
                        <Text style={styles.statustitle}>Today 10.00 Am</Text>
                    </View>
                </View>

                <View style={{ ...styles.rowView, justifyContent: "flex-end" }}>
                    <View style={{ ...styles.cardContainer, backgroundColor: "#5E16BC" }}>
                        <Text style={{ ...styles.subtitle, color: '#ffff' }}>Welcome</Text>
                        <Text style={{ ...styles.statustitle, color: '#ffff' }}>Today 10.00 Am</Text>
                    </View>
                </View>

            </View>

            <View style={styles.bottomChat}>
                <View style={styles.inputRoot}>
                    <TextInput
                        placeholder='Your message'
                        placeholderTextColor={'#9c9c9c'}
                        style={styles.inputStyle}
                    />
                    <CameraIcon />
                </View>
                <SendIcon />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    intriContaainer: {
        flex: 1,
        paddingVertical: 10,
    },
    betweenView: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,

    },
    frameChat: {
        flex: 9,
        marginTop: 40,
        paddingHorizontal: 20
    },
    bottomChat: {
        flex: .8,
        backgroundColor: "#7B55EB",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    rowView: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#525252',
        textAlign: "left",
        paddingVertical: 2
    },
    statustitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#888888',
        textAlign: "center",
        fontStyle: "italic"
    },
    vertionStyle: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        color: '#000'
    },
    isOnline: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        height: 12,
        width: 12,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "#13DE34"
    },

    inputRoot: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff",
        borderRadius: 8,
    },
    inputStyle: {
        fontSize: 16,
        width: "82%",
        height: 44
    },
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10,
        paddingHorizontal: 14,
        paddingVertical: 8
    },
});

export default LiveChatScreen