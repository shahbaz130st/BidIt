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




const CategoryItem = (props) => {

    const { Item } = props

    return (
        <View style={styles.mainContainer}>
            <View style={{ width: '20%', justifyContent: 'center', }}>
                <Image
                    style={styles.image}
                    source={Item.image}
                    resizeMode='contain'
                />
            </View>
            <View style={{ width: '60%', justifyContent: 'center', }}>
                <Text style={styles.name}>{Item.name}</Text>
                <View style={styles.ratingView}>
                    <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                    <Text style={styles.rating}>{Item.rating}</Text>
                </View>
                <Text style={styles.location}>{Item.location}</Text>


            </View>
            <View style={{ width: '20%', }}>
                <Text style={styles.details}>{Strings.ViewDetails}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        flexDirection: 'row',
        // height: 88,
        borderRadius: 20,
        marginTop: 15,
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: '#F8F8F8'
    },
    image: {
        height: 60,
        width: 60,
    },
    name: {
        fontSize: 17,
        fontFamily: Fonts.Medium,
        color: '#383838',
        marginLeft: 10
    },
    ratingView: {
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: 10,
    },
    star: {
        height: 15,
        width: 15
    },
    rating: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: '#262626',
        marginLeft: 3,
        marginTop: 3
    },
    location: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: '#3C3C3C',
        marginLeft: 10,
        marginTop: 3
    },
    details: {
        fontSize: 11,
        textDecorationLine: 'underline',
        fontFamily: Fonts.Regular,
        color: '#676767',
    }
})


export default CategoryItem

