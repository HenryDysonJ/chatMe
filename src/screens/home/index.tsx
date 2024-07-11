import React, { useState } from 'react';
import { Alert, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AddChat from '../../assets/addChat';
import ChatBubbleIcon from '../../assets/chatBobble';
import A from '../../assets/images/a.jpg';
import B from '../../assets/images/b.jpg';
import C from '../../assets/images/c.jpg';
import D from '../../assets/images/d.jpg';
import E from '../../assets/images/e.jpg';
import F from '../../assets/images/f.jpg';
import G from '../../assets/images/g.jpg';
import H from '../../assets/images/h.jpg';
import Henry from '../../assets/images/henry.png';
import I from '../../assets/images/i.jpg';
import Notification from '../../assets/notification';
import SearchIcon from '../../assets/searchIcon';

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

const Peoples = ({ name, imag, onPress }: any) => {
    return (
        <Pressable onPress={onPress}>

            <View style={styles.profileView}>
                <View style={styles.rowView}>
                    <Image source={imag} style={styles.profile} />
                    <Text style={{ ...styles.subtitle, color: "#ffff" }}>{name}</Text>
                </View>
                <ChatBubbleIcon />
            </View>
        </Pressable>
    )
}

const Profiles = ({ name, imag, isOnline }: any) => {
    return (
        <View >
            <View style={{ ...styles.profile, position: "relative" }}>
                <Image source={imag} style={styles.profile} />
                {isOnline && <View style={styles.isOnline}></View>}
            </View>
            <Text style={{ ...styles.subtitle, marginTop: 8 }}>{name}</Text>
        </View>
    )
}

const Conversation = ({ name, imag, isOnline, onPress }: any) => {
    return (
        <Pressable style={styles.profileView} onPress={onPress}>
            <View style={styles.rowView}>
                <View style={{ ...styles.profile, position: "relative" }}>
                    <Image source={imag} style={styles.profile} />
                    {isOnline && <View style={styles.isOnline}></View>}
                </View>
                <View style={{ alignItems: "flex-start", gap: 4 }}>
                    <Text style={{ ...styles.subtitle }}>{name}</Text>
                    <Text style={{ ...styles.title, lineHeight: 18 }}>Hey! How is going?</Text>
                </View>
            </View>
            <View style={{ alignItems: "flex-end", gap: 4 }}>
                <Text style={styles.subtitle}>10.00 Am</Text>
                <View style={styles.notifyCount}><Text style={styles.badgeCount}>3</Text></View>
            </View>
        </Pressable>
    )
}

const HomeScreen = ({ navigation }: any) => {

    const [modalVisible, setModalVisible] = useState(false);

    const hanldleLiveChat = (val: any) => {
        navigation.navigate('Chat')
    }

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.profileView}>
                <View style={styles.rowView}>
                    <Image source={Henry} style={styles.profile} />
                    <Text style={styles.title}>Hi, Oussama Chahidi !</Text>
                </View>
                <View style={styles.notifyContainer}>
                    <Notification height={30} width={30} />
                    <View style={styles.badge}><Text style={styles.badgeCount}>3</Text></View>
                </View>
            </View>
            <View style={{ marginTop: 24 }}>
                <Text style={styles.title}>Conducts:  <Text style={styles.subtitle}>48 peoples</Text></Text>
                <FlatList
                    data={UsersList}
                    renderItem={({ item }) => <Profiles name={item.userName} imag={item.userProfile} isOnline={item.isOnline} />}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={{ gap: 20, paddingVertical: 24 }}
                />
            </View>
            <View style={{ marginTop: 20, flex: 1 }}>
                <Text style={styles.title}>Conversation</Text>
                <FlatList
                    data={UsersList}
                    renderItem={({ item }) => <Conversation name={item.userName} imag={item.userProfile} isOnline={item.isOnline} onPress={(item: any) => hanldleLiveChat(item)} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ rowGap: 24, paddingVertical: 24 }}
                />
            </View>
            <Pressable style={styles.addChat} onPress={() => setModalVisible(true)}>
                <AddChat />
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalBg}>
                    <View style={styles.modalCondent}>
                        <View style={styles.inputRoot}>
                            <SearchIcon />
                            <TextInput
                                placeholder='Search'
                                placeholderTextColor={'#c7c7c7'}
                                style={styles.inputStyle}
                            />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ ...styles.title, color: "#ffff", fontWeight: 400 }}>People may know</Text>
                            <FlatList
                                data={UsersList}
                                renderItem={({ item }) => <Peoples name={item.userName} imag={item.userProfile} onPress={(item: any) => hanldleLiveChat(item)} />}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ gap: 20, paddingVertical: 14 }}
                            />
                        </View>
                    </View>
                    <Pressable style={styles.addChat} onPress={() => setModalVisible(false)}>
                        <AddChat />
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: "#ffff",
        position: "relative",
        padding: 20
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    rowView: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    },
    profileView: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: '#000',
        textAlign: "left",
    },
    notifyContainer: {
        position: "relative"

    },
    badge: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        backgroundColor: "#E84F4F",
        height: 18,
        width: 18,
        borderRadius: 50,
        position: 'absolute',
        top: -8,
        right: 0
    },
    badgeCount: {
        fontSize: 10,
        fontWeight: '600',
        color: '#ffff',
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#525252',
        textAlign: "center",
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
    notifyCount: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: "#A88FF2"
    },
    addChat: {
        position: "absolute",
        bottom: 0,
        right: 0
    },
    modalBg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 230,
        backgroundColor: '#5E16BC',
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
    },
    modalCondent: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20
    },

    inputRoot: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#ffff",
        marginTop: 34,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    inputStyle: {
        fontSize: 16,
        width: "92%"
    },
});

export default HomeScreen;
