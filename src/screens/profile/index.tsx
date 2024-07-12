import { DrawerItem } from '@react-navigation/drawer';
import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import CallsIcon from '../../assets/call';
import ConductIcon from '../../assets/conduct';
import GroupIcon from '../../assets/group';
import Henry from '../../assets/images/henry.png';
import LogOutIcon from '../../assets/logout';
import MoonIcon from '../../assets/moon';
import ProfileIcon from '../../assets/profile';
import SavedIcon from '../../assets/saved';
import SettingIcon from '../../assets/settings';

export default function ProfileComponet({ navigation }: any) {

    const Screens = [
        {
            icon: <ProfileIcon />,
            Name: "My Profile",
            route: "profile"
        },
        {
            icon: <GroupIcon />,
            Name: "New Group",
            route: "newGroup"
        },
        {
            icon: <ConductIcon />,
            Name: "Conducts",
            route: "conduct"
        },
        {
            icon: <CallsIcon />,
            Name: "Calls",
            route: "Calls"
        },
        {
            icon: <SavedIcon />,
            Name: "SavedMessage",
            route: "Saved Message"
        },
        {
            icon: <SettingIcon />,
            Name: "Settings",
            route: "Settings"
        },
    ]

    const DrawerLayout = ({ icon, label }: any) => {
        return (
            <DrawerItem
                label={label}
                onPress={() => undefined}
                icon={() => <View style={styles.iconContainer}>{icon}</View>}
            />
        )
    }

    const DrawerItems = () => (Screens.map((item, i) => (
        <DrawerLayout key={i} icon={item.icon} label={item.Name} route={item.route} />
    )))

    return (
        <View style={styles.root}>
            <View style={{ ...styles.profileContainer, justifyContent: "space-between", flex: 0 }}>
                <View style={styles.profileContainer}>
                    <Image source={Henry} style={{ height: 50, width: 50, borderRadius: 50 }} />
                    <View>
                        <Text style={styles.title}>Henry Dyson J</Text>
                        <Text style={styles.subTitle}>Black Paiyan</Text>
                    </View>
                </View>
                <MoonIcon />
            </View>
            <View style={styles.hairline}></View>
            <DrawerItems />
            <View style={{ ...styles.profileContainer, flex: .9, alignItems: "flex-end" }}>
                <Pressable style={{ ...styles.profileContainer, columnGap: 30 }} onPress={() => navigation.navigate('SignIn')}>
                    <View style={styles.iconContainer}><LogOutIcon /></View>
                    <Text style={styles.title}>LogOut</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    profileContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        gap: 10
    },

    title: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        color: "#02111A",
        textAlign: "center"
    },

    subTitle: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 20,
        color: "#888888",
        textAlign: "left",
        fontStyle: "italic"
    },

    hairline: {
        backgroundColor: '#D9DBDD',
        height: 1,
        width: '100%',
        marginTop: 3
    },

    iconContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: 40,
        width: 40,
        backgroundColor: '#5E16BC'
    }

});