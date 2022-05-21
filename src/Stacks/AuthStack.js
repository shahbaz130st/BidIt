import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import OTP from '../Screens/Auth/OTP/Index'

const Stack = createStackNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
            {/* <Stack.Screen name="OTP" component={OTP} /> */}


            
        </Stack.Navigator>
    )
}

export default AuthStack;
