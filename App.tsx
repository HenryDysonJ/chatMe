/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import LoginScreen from './src/screens/login';
import IntroScreen from './src/screens/intro';
import WelcomeScreen from './src/screens/login/welcome';
import Signup from './src/screens/login/signUp';
import SignIn from './src/screens/login/signIn';
import ForgotPassword from './src/screens/login/forgotPassword';
import ModalScreen from './src/screens/modal';
import HomeScreen from './src/screens/home';
import LiveChatScreen from './src/screens/liveChat';


function App(): React.JSX.Element {

  return (
    <View style={styles.sectionContainer}>
      {/* <LoginScreen /> */}
      {/* <IntroScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <Signup /> */}
      {/* <SignIn /> */}
      {/* <ForgotPassword /> */}
      {/* <ModalScreen/> */}
      {/* <HomeScreen /> */}
      <LiveChatScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
