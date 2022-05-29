import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';
import { View, Keyboard, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



import Home from '../Screens/Home/Home/Index'
import MyJobs from '../Screens/Home/MyJobs/Index'
import Chat from '../Screens/Home/Chat/Index'
import Profile from '../Screens/Home/Profile/Index'

import Images from '../Assets/Images/Index';
import colors from '../Assets/Colors/Index';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const HomeStack = () => {

    const useKeyboardOpen = () => {
        const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
        useEffect(() => {
            const keyboardOpenListener = Keyboard.addListener("keyboardDidShow", () =>
                setIsKeyboardOpen(true)
            );
            const keyboardCloseListener = Keyboard.addListener("keyboardDidHide", () =>
                setIsKeyboardOpen(false)
            );

            return () => {
                if (keyboardOpenListener) keyboardOpenListener.remove();
                if (keyboardCloseListener) keyboardCloseListener.remove();
            };
        }, []);
        return isKeyboardOpen;
    };

    const isKeyboardOpen = useKeyboardOpen();

    const CustomTabBarButton = ({ children, onPress }) => (
        <View
            style={{
                top: -42.5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 80,
                borderRadius: 80,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <LinearGradient
                colors={[colors.white, colors.textInput]}
                start={{ x: 0.5, y: 0.5 }} end={{ x: 0.45, y: 0.9 }}

                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 60 }}>

                <TouchableOpacity
                    activeOpacity={0.4}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60,
                    }}>
                    <LinearGradient
                        colors={[colors.gradientOne, colors.gradientTwo]}
                        start={{ x: 0.9, y: 0 }} end={{ x: 0.4, y: 0.7 }}
                        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 60 }}>
                        <Image source={Images.add} style={styles.add} resizeMode='contain' />
                    </LinearGradient>
                </TouchableOpacity>

            </LinearGradient>
        </View >
    );




    return (
        <Tab.Navigator

            initialRouteName="Home"
            activeColor="#fff"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            tabBar={(props) => {
                const { navigation, state } = props
                return (
                    !isKeyboardOpen ?
                        <View style={styles.mainTabContainer}>
                            <View style={{
                                flexDirection: "row",
                                marginTop: 10,
                                height: 80,
                                width: "100%",
                                elevation: 5,
                                backgroundColor: colors.white
                            }}>
                                <TouchableOpacity
                                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => { navigation.navigate("Home") }}>
                                    <Image source={Images.home}
                                        resizeMode='contain'
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: state.index === 0 ? colors.black : '#CCCCCC'
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => { navigation.navigate("MyJobs") }}>
                                    <Image
                                        source={Images.MyJobs}
                                        resizeMode='contain'
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: state.index === 1 ? colors.black : '#CCCCCC'
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <CustomTabBarButton {...props} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate("Chat") }}
                                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={Images.chat}
                                        resizeMode='contain'
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: state.index === 3 ? colors.black : '#CCCCCC'
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate("Profile") }}
                                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={Images.user}
                                        resizeMode='contain'
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: state.index === 4 ? colors.black : '#CCCCCC'
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        null
                )
            }}

        >

            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="MyJobs"
                component={MyJobs} />
            <Tab.Screen
                options={{
                    tabBarLabel: '',
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
                name='Post'
                component={Home}
            />
            <Tab.Screen
                name="Chat"
                component={Chat} />
            <Tab.Screen
                name="Profile"
                component={Profile} />

        </Tab.Navigator>


    )
}

const styles = StyleSheet.create({

    mainTabContainer: {
        height: 85,
        width: '100%',
        backgroundColor: colors.textInput,
        // position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-end'
    },
    shadow: {
        elevation: 8,
        backgroundColor: colors.white,
        width: '100%',
        height: 85,
        // zIndex: 0,
    },
    container: {
        flex: 1,
    },
    add: {
        width: 16,
        height: 16,
    }
})

export default HomeStack;
