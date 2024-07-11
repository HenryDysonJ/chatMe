
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Auth from './src/auth';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}
export default App;
