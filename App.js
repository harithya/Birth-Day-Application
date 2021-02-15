import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home'
import Greeting from './src/views/Greeting'

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Greeting" component={Greeting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;