import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurvedBottomBar } from 'react-native-utils-navigation-bar';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
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
                alignItems: 'center'
                // ...styles.shadow
            }}>

            <TouchableOpacity
                activeOpacity={0.4}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    elevation: 7
                }}>
                <LinearGradient
                    colors={[colors.gradientOne, colors.gradientTwo]}
                    start={{ x: 0.9, y: 0 }} end={{ x: 0.4, y: 0.7 }}
                    // useAngle={true}
                    // angle={45}
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 60 }}>
                </LinearGradient>
            </TouchableOpacity>


        </View >
    );

    const _renderIcon = (routeName: string, selectTab: string) => {
        let icon = '';

        switch (routeName) {
            case 'Home':
                icon = Images.home;
                break;
            case 'MyJobs':
                icon = Images.MyJobs;
                break;
            case 'Chat':
                icon = Images.chat;
                break;
            case 'Profile':
                icon = Images.profile;
                break;
        }

        return (
            // <Image source={icon} size={23} color={routeName === selectTab ? '#FF3030' : 'gray'} />
            <Image source={icon}
                resizeMode='contain'
                style={{
                    width: 24,
                    height: 24,
                    tintColor: routeName === selectTab ? colors.black : '#CCCCCC'
                }}
            />
        );
    };
    return (

        <View style={styles.container}>
            <CurvedBottomBar.Navigator
                style={{ backgroundColor: colors.white }}
                // type={type}
                height={75}
                circleWidth={55}
                bgColor={colors.white}
                initialRouteName="Home"
                borderTopLeftRight={false}
                renderCircle={() => (
                    <TouchableOpacity
                        style={[styles.btnCircle]}>
                    </TouchableOpacity>
                )}
                tabBar={({ routeName, selectTab, navigation }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation(routeName)}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        >
                            {_renderIcon(routeName, selectTab)}
                        </TouchableOpacity>
                    );
                }}
            >
                <CurvedBottomBar.Screen
                    name="Home"
                    position="left"
                    component={() => <Home/>}
                />
                <CurvedBottomBar.Screen
                    name="MyJobs"
                    component={() => <MyJobs/>}
                    position="left"
                />
                <CurvedBottomBar.Screen
                    name="Chat"
                    component={() => <Chat/>}
                    position="right"
                />
                <CurvedBottomBar.Screen
                    name="Profile"
                    component={() => <Profile/>}
                    position="right"
                />
            </CurvedBottomBar.Navigator>
        </View>

        // <Tab.Navigator

        //     initialRouteName="Home"
        //     activeColor="#fff"
        //     screenOptions={{
        //         // tabBarBackground: () => {
        //         //     { /* You can customize and play around with the shadows */ }
        //         //     <View style={{
        //         //         shadowOffset: {
        //         //             width: 0,
        //         //             height: 50,
        //         //         },
        //         //         shadowOpacity: 0.58,
        //         //         shadowRadius: 16.0,
        //         //         elevation: 24,
        //         //         backgroundColor: 'pink',
        //         //     }}
        //         //     />
        //         // },
        //         headerShown: false,
        //         tabBarHideOnKeyboard: true,
        //         tabBarStyle: {
        //             height: 85,
        //             // bottom: 50,
        //             position: 'absolute',
        //             ...styles.shadow
        //         }
        //     }}
        // >

        //     <Tab.Screen
        //         options={{
        //             tabBarLabel: '',
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={{ justifyContent: 'center', alignItems: 'center', top: 4 }}>
        //                     <Image source={Images.home}
        //                         resizeMode='contain'
        //                         style={{
        //                             width: 24,
        //                             height: 24,
        //                             tintColor: focused ? colors.black : '#CCCCCC'
        //                         }}
        //                     />
        //                     {/* <Text style={{ color: focused ? '#034B6C' : '#AEBDC1', fontSize: 12, marginTop: 2 }}>{reverseText('רשק ישנא')}</Text> */}
        //                 </View>
        //             )
        //         }}
        //         name="Home"
        //         component={Home} />
        //     <Tab.Screen
        //         options={{
        //             tabBarLabel: '',
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={{ justifyContent: 'center', alignItems: 'center', top: 4 }}>
        //                     <Image source={Images.MyJobs}
        //                         resizeMode='contain'
        //                         style={{
        //                             width: 24,
        //                             height: 24,
        //                             tintColor: focused ? colors.black : '#CCCCCC'
        //                         }}
        //                     />

        //                     {/* <Text style={{ color: focused ? '#034B6C' : '#AEBDC1', fontSize: ms(12), marginTop: vs(2) }}>{reverseText('תועדוה')}</Text> */}
        //                 </View>
        //             )
        //         }}
        //         name="MyJobs"
        //         component={MyJobs} />
        //     <Tab.Screen
        //         options={{
        //             tabBarLabel: '',
        //             // tabBarIcon: ({ focused }) => (

        //             //     <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        //             //         <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>{reverseText('תיבה ףד')}</Text>
        //             //     </View>


        //             // ),
        //             tabBarButton: (props) => (
        //                 <CustomTabBarButton {...props} />
        //             )
        //         }}
        //         name='Post'
        //         component={Home}
        //     />
        //     <Tab.Screen
        //         options={{
        //             tabBarLabel: '',
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={{ justifyContent: 'center', alignItems: 'center', top: 4 }}>
        //                     <Image source={Images.chat}
        //                         resizeMode='contain'
        //                         style={{
        //                             width: 24,
        //                             height: 24,
        //                             tintColor: focused ? colors.black : '#CCCCCC'
        //                         }}
        //                     />
        //                     {/* <Text style={{ color: focused ? '#034B6C' : '#AEBDC1', fontSize: ms(12), marginTop: vs(2) }}>{reverseText('תוארתה')}</Text> */}
        //                 </View>
        //             )
        //         }}
        //         name="Chat"
        //         component={Chat} />
        //     <Tab.Screen
        //         options={{
        //             tabBarLabel: '',
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={{ justifyContent: 'center', alignItems: 'center', top: 4 }}>
        //                     <Image source={Images.profile}
        //                         resizeMode='contain'
        //                         style={{
        //                             width: 24,
        //                             height: 24,
        //                             tintColor: focused ? colors.black : '#CCCCCC'
        //                         }} />
        //                     {/* <Text style={{ color: focused ? '#034B6C' : '#AEBDC1', fontSize: 12, marginTop: 2 }}>hi</Text> */}
        //                 </View>
        //             )
        //         }}
        //         name="Profile"
        //         component={Profile} />

        // </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    shadow: {



        // shadowOpacity: 0.58,
        // shadowRadius: 16.0,
        elevation: 8,
        backgroundColor: colors.white,
        // position: 'absolute',
        // padding: 10,
        width: '100%',
        height: 85,
        // zIndex: 0,
    },
    container: {
        flex: 1,
    },
    btnCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5,
        bottom: 28
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: '#48CEF6'
    },
    img: {
        width: 30,
        height: 30,
    }
})

export default HomeStack;
