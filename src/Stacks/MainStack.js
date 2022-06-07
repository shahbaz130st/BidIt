import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
// --------------------------------------------------------
import Splash from '../Screens/Splash/Index'
import OnBoarding from '../Screens/OnBoarding/Index'
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import JobDetails from '../Screens/Home/JobDetails/Index';
import EditProfile from '../Screens/Home/EditProfile/Index';
import ChangePassword from '../Screens/Home/ChangePassword/Index';
import Notifications from '../Screens/Home/Notifications/Index';


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
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
                <Stack.Screen name="JobDetails" component={JobDetails} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="Notifications" component={Notifications} />




            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;
