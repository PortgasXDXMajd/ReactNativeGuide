import React from 'react';
import WelcomeScreen from './components/welcome-screen';
import HomeScreen from './components/main-screens/home-screen';
import AboutScreen from './components/main-screens/about-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          
          <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }}>
            { props => <WelcomeScreen navigation={props.navigation} />}
          </Stack.Screen>
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
            { props => <HomeScreen navigation={props.navigation} label='Hello World!!' />}
          </Stack.Screen>
          <Stack.Screen name="AboutScreen" options={{ headerShown: false }}>
            { props => <AboutScreen navigation={props.navigation} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}