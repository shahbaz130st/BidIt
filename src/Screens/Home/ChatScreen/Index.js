import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput,
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


const ChatScreen = ({ navigation, route }) => {

    const [msg, setMsg] = useState('')

    const renderChat = ({ item, index }) => {
        return (
            <ChatListComponent Item={item} />
        )
    }



    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <View style={styles.header}>
                    <View style={styles.userInfoContainer}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()} >
                            <Image source={Images.arrow} style={styles.back} resizeMode='contain' />
                        </TouchableOpacity>
                        <Image source={Images.userOne} style={styles.profileImage} resizeMode='contain' />
                        <Text style={styles.userName}>{'Jimmy'}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.videoCamera} style={styles.videoCall} resizeMode='contain' />
                        <Image source={Images.call} style={styles.voiceCall} resizeMode='contain' />
                    </View>


                </View>


                <View style={styles.mainContent}>

                    {/* <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={120}
                        style={{
                            width: "100%"
                        }}> */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Type message'
                            style={{ color: colors.textSecondary }}
                            placeholderTextColor={'#808080'}
                            onChangeText={(text) => setMsg(text)}
                            value={msg} />
                        <Image source={Images.send} style={styles.sendIcon} resizeMode='contain' />
                    </View>



                    {/* </KeyboardAvoidingView> */}
                </View>

            </LinearGradient>


        </SafeAreaView >


    )
}


export default ChatScreen

