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




const NotificationComponent = (props) => {

    const { Item } = props
    return (
        <TouchableOpacity activeOpacity={0.4} style={styles.mainContainer}>
            <View style={{ width: '16%', justifyContent: 'center' }}>
                <Image source={Item.image} style={styles.profileImage} resizeMode='contain' />
            </View>
            <View style={{ width: '84%' }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{Item.title}</Text>
                    <Text style={styles.time}>{Item.time}</Text>
                </View>
                <View style={styles.msgContainer}>
                    <Text style={styles.msg}>{Item.desc}</Text>

                </View>

            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 12,
        marginTop: 15,
        paddingHorizontal: 13,
        paddingVertical: 9,
        backgroundColor: '#F8F8F8'
    },
    profileImage: {
        height: 42,
        width: 42
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    msgContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Medium,
        color: colors.textSecondary,
    },
    time: {
        fontSize: 10,
        fontFamily: Fonts.Regular,
        color: '#878787',
    },
    msg: {
        fontSize: 13,
        fontFamily: Fonts.Light,
        color: colors.textSecondary
    },
    time: {
        fontSize: 9,
        fontFamily: Fonts.Regular,
        color: '#A7A7A7',
    }
})


export default NotificationComponent;

