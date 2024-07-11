import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import IntroScreen from '../screens/intro';
import WelcomeScreen from '../screens/login/welcome';
import Signup from '../screens/login/signUp';
import SignIn from '../screens/login/signIn';
import ForgotPassword from '../screens/login/forgotPassword';
import HomeScreen from '../screens/home';
import LiveChatScreen from '../screens/liveChat';

const Auth = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName='intro' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='intro' component={IntroScreen} />
            <Stack.Screen name='welcome' component={WelcomeScreen} />
            <Stack.Screen name='SignUp' component={Signup} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Forgot' component={ForgotPassword} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Chat' component={LiveChatScreen} />
        </Stack.Navigator>
    )
}

export default Auth