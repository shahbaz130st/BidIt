import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    FlatList
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------
import styles from './Styles'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import Header from '../../../Components/Header';
import Images from '../../../Assets/Images/Index';
import ChatListComponent from '../../../Components/ChatListComponent';


const chatList = [
    {
        id: '1',
        image: Images.userOne,
        name: 'Jhon Doe',
        time: '1min ago',
        lastMsg: '???'

    },
    {
        id: '2',
        image: Images.userTwo,
        name: 'Kevin Spacey',
        time: '5s ago',
        lastMsg: 'Hello, how are you?',
        new: '1'
    },
    {
        id: '3',
        image: Images.userThree,
        name: 'Leonardo',
        time: 'Yesterday',
        lastMsg: 'Hey there!'
    },
    {
        id: '4',
        image: Images.userFour,
        name: 'Christian Bale',
        time: '30/05/2020',
        lastMsg: 'can I talk to you???'
    },

]

const Chat = ({ navigation, route }) => {

    const renderChat = ({ item, index }) => {
        return (
            <ChatListComponent
                Item={item}
                navigation={navigation}
            />
        )
    }



    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    rightIcon={true}
                    headerTitle={Strings.MyChats}
                />

                <View style={styles.mainContent}>
                    <FlatList
                        data={chatList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={renderChat}
                        style={{ width: '100%', }}
                    />
                </View>

            </LinearGradient>


        </SafeAreaView >


    )
}


export default Chat

