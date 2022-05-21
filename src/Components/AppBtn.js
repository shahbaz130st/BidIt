import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


import colors from '../Assets/Colors/Index'
import Loader from './Loader'

const AppButton = (props) => {

    const { style, onPress, labelStyle, label } = props
    return (

        <TouchableOpacity
            activeOpacity={0.4}
            style={[styles.mainContainer, style]} >
            <LinearGradient
                onPress={() => alert('hi')}
                colors={[colors.gradientOne, colors.gradientTwo]}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                style={{width:'100%', height:'100%', alignItems:'center',justifyContent:'center',borderRadius:10}}>
                <Text style={labelStyle}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>

        // <TouchableOpacity
        //     activeOpacity={0.5}
        //     style={[styles.mainContainer, style]}
        //     onPress={onPress}
        //     disabled={disabled}>
        //     <View style={{flexDirection:'row', alignItems:'center'}}>
        //     <Image source={image} style={styles.btnImage} />
        //     <Text style={[styles.btnText, labelStyle]}>{label}</Text>
        //     </View>
        // </TouchableOpacity>


    )
}

export default AppButton

const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: colors.gradientOne
    },
    btnText: {
        color: colors.white,
        fontSize: 15,
    },
    btnImage: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        tintColor: colors.white,
        marginRight: 12
    }
})
