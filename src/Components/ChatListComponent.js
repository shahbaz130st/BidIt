import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// --------------------------------------------
import Images from '../Assets/Images/Index'
import colors from '../Assets/Colors/Index'
import Strings from '../Assets/Strings/Index';
import Fonts from '../Assets/Fonts/Index'




const ChatListComponent = (props) => {

    const { Item } = props
    return (
        <TouchableOpacity activeOpacity={0.4} style={styles.mainContainer}>
            <View style={{ width: '16%', justifyContent: 'center'}}>
                <Image source={Item.image} style={styles.profileImage} resizeMode='contain' />
            </View>
            <View style={{ width: '84%' }}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{Item.name}</Text>
                    <Text style={styles.time}>{Item.time}</Text>
                </View>
                <View style={styles.msgContainer}>
                    <Text style={styles.msg}>{Item.lastMsg}</Text>
                    {Item.new &&
                        <View style={styles.newMessages}>
                            <Text style={styles.new}>{Item.new}</Text>
                        </View>
                    }
                </View>

            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 15,
        paddingHorizontal: 13,
        paddingVertical: 8,
        backgroundColor: '#F8F8F8'
    },
    profileImage: {
        height: 42,
        width: 42
    },
    nameContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    msgContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 14,
        fontFamily: Fonts.Medium,
        color: '#3B3B3B',
    },
    time: {
        fontSize: 10,
        fontFamily: Fonts.Regular,
        color: '#878787',
    },
    msg: {
        fontSize: 13,
        fontFamily: Fonts.Regular,
        color: '#373737',
    },
    newMessages: {
        height: 16,
        width: 16,
        borderRadius: 16,
        backgroundColor: colors.iconPrimary,
        justifyContent:'center',
        alignItems:'center'
    },
    new: {
        fontSize: 7,
        fontFamily: Fonts.Regular,
        color: colors.white,
    }
})


export default ChatListComponent;

