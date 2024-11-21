import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import BackArrow from '../../assets/backArraow';
import ChatBubbleIcon from '../../assets/chatBobble';
import A from '../../assets/images/a.jpg';
import B from '../../assets/images/b.jpg';
import C from '../../assets/images/c.jpg';
import D from '../../assets/images/d.jpg';
import E from '../../assets/images/e.jpg';
import F from '../../assets/images/f.jpg';
import G from '../../assets/images/g.jpg';
import H from '../../assets/images/h.jpg';
import I from '../../assets/images/i.jpg';

const Peoples = ({ name, imag, onPress }: any) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <Text style={{ ...styles.titleStle, color: "#ffff" }}>{name}</Text>
                </View>
                <ChatBubbleIcon />
            </View>
        </Pressable>
    )
}

const UsersList = [
    {
        userName: "Henry",
        userProfile: A,
        isOnline: true
    },
    {
        userName: "Dyson",
        userProfile: B,
        isOnline: false
    },
    {
        userName: "Velusamy",
        userProfile: C,
        isOnline: true
    },
    {
        userName: "Kumaru",
        userProfile: D,
        isOnline: true
    },
    {
        userName: "Sudaru",
        userProfile: E,
        isOnline: false
    },
    {
        userName: "Senthulu",
        userProfile: F,
        isOnline: true
    },
    {
        userName: "Saravana",
        userProfile: G,
        isOnline: false
    },
    {
        userName: "Vetri",
        userProfile: H,
        isOnline: false
    },
    {
        userName: "Parama",
        userProfile: I,
        isOnline: false
    },
]

const Notification = () => {
    return (
        <View style={styles.centeredView}>
            <View style={styles.topContainer}>
                <BackArrow />
                <Text style={styles.titleStle}>Notification</Text>
                <View></View>
            </View>
            <FlatList
                data={UsersList}
                renderItem={({ item }) => <Peoples name={item.userName} imag={item.userProfile} onPress={(item: any) => hanldleLiveChat(item)} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 20, paddingVertical: 14 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor:'lightblue'
    },
    topContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#7B55EB'
    },
    titleStle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Notification;