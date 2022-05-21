import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
// --------------------------------------------------------
import Splash from '../Screens/Splash/Index'
import OnBoarding from '../Screens/OnBoarding/Index'
import AuthStack from './AuthStack';


const Stack = createStackNavigator()
const MainStack = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;
