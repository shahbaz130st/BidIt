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




const RatingItem = (props) => {

    const { Item, Index } = props
    // useEffect(()=>{
    //     console.log(Item);
    // },[])

    return (
        <View style={[styles.mainContainer,{marginTop: Index == 0 ? 5 : 18}]}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={styles.image}
                    source={Item.image}
                    resizeMode='contain' />
                <View style={{ marginLeft: 13 }}>
                    <Text style={styles.name}>{Item.name}</Text>
                    <View style={styles.ratingView}>
                        <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                        <Text style={styles.rating}>{Item.rating}</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.desc}>{Item.text}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        // height: 88,
        borderRadius: 12,
        paddingHorizontal: 18,
        paddingVertical: 10,
        backgroundColor: '#F8F8F8'
    },
    image: {
        height: 40,
        width: 40,
    },
    name: {
        fontSize: 14,
        fontFamily: Fonts.Medium,
        color: '#3B3B3B',
    },
    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        height: 15,
        width: 15
    },
    rating: {
        fontSize: 11,
        fontFamily: Fonts.Regular,
        color: '#262626',
        marginTop: 2,
        marginLeft: 2
    },
    desc: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        marginTop: 3,
    }
})


export default RatingItem

