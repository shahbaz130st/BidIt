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




const ProfileSettingsComponent = (props) => {

    const { leftIcon, Title, rightIcon, iconColor, titleColor } = props
    const [radio, setRadio] = useState(false)
    return (
        <TouchableOpacity activeOpacity={0.4} style={styles.mainContainer}>

            <View style={{ flexDirection: 'row' }}>
                <Image source={leftIcon} style={[styles.icon, iconColor]} resizeMode='contain' />
                <Text style={[styles.title, titleColor]}>{Title}</Text>
            </View>
            <Image source={rightIcon} style={styles.forward} resizeMode='contain' />


        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        marginTop: 12,
        paddingHorizontal: 20,
        backgroundColor: '#F8F8F8',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        marginLeft: 17
    },
    icon: {
        height: 18,
        width: 18,
        tintColor: colors.iconPrimary
    },
    forward: {
        height: 15,
        width: 15,
        tintColor: colors.textSecondary
    }
})


export default ProfileSettingsComponent;

