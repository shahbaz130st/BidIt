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




const JobStatusItem = (props) => {

    const { Item, onPress } = props

    // console.log(Item);
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={styles.mainContainer}>
            <View style={{ width: '20%' }}>
                <Image
                    style={styles.image}
                    source={Item.image}
                    resizeMode='contain'
                />
            </View>
            <View style={{ width: '60%', justifyContent: 'center', }}>
                <Text style={styles.name}>{Item.name}</Text>
                <Text style={styles.price}>{Item?.price}</Text>

                <View style={styles.ratingView}>
                    <Image source={Images.Star} style={styles.starIcon} resizeMode='contain' />
                    <Text style={styles.rating}>{Item.rating}</Text>
                </View>
                <View style={styles.locationView}>
                    <Image source={Images.location} style={styles.locationIcon} resizeMode='contain' />
                    <Text style={styles.location}>{Item.location}</Text>
                </View>


            </View>
            <View style={{ width: '20%', }}>
                {
                    Item.completed ?
                        <Text style={styles.completed}>{Strings.Completed}</Text>
                        :
                        Item?.cancelled ?
                            <Text style={[styles.cancel, { textDecorationLine: 'none' }]}>{Strings.Cancelled}</Text>
                            :
                            <Text style={styles.details}>{Strings.ViewDetails}</Text>
                }
            </View>
        </TouchableOpacity>

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
    price: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textPrimary,
        marginLeft: 10
    },
    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    locationView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    starIcon: {
        height: 15,
        width: 15
    },
    locationIcon: {
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
    },
    completed: {
        fontSize: 11,
        textDecorationLine: 'underline',
        fontFamily: Fonts.Regular,
        color: '#01ED19',
    },
    cancel: {
        fontSize: 11,
        textDecorationLine: 'underline',
        fontFamily: Fonts.Regular,
        color: '#ED010F',
    }
})


export default JobStatusItem

