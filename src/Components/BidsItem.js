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
import AppButton from './AppBtn'
import BidDetailModal from './BidDetailModal'


const BidsItem = (props) => {

    const { Item, Tab, navigation, onPress } = props
    const [isDetailModal, setIsDetailModal] = useState(false)


    // console.log(Item);
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity activeOpacity={0.4} style={styles.innerContainer}>
                <View style={{ width: '20%' }}>
                    <Image
                        style={styles.image}
                        source={Item.image}
                        resizeMode='contain'
                    />
                </View>
                <View style={{ width: '60%', justifyContent: 'center', }}>
                    <Text style={styles.name}>{Item.name}</Text>

                    <View style={styles.ratingView}>
                        <Image source={Images.Star} style={styles.starIcon} resizeMode='contain' />
                        <Text style={styles.rating}>{Item.rating}</Text>
                    </View>
                    <View style={styles.locationView}>
                        <Image source={Images.location} style={styles.locationIcon} resizeMode='contain' />
                        <Text style={styles.location}>{Item.location}</Text>
                    </View>
                    <View style={styles.amountView}>
                        <Image source={Images.Amount} style={styles.locationIcon} resizeMode='contain' />
                        <Text style={styles.priceTitle}>{'Requested Amount: '}</Text>
                        <Text style={styles.price}>{Item.price}</Text>
                    </View>
                </View>
                <View style={{ width: '20%' }}>
                    {
                        Item.rejected ?
                            <Text style={styles.reject}>{Strings.Rejected}</Text>
                            :
                            Item?.accepted ?
                                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('AcceptedBid') }>
                                    <Text style={[styles.details, { color: colors.textPrimary }]}>{Strings.ViewDetails}</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity activeOpacity={0.4} onPress={() => setIsDetailModal(true)}>
                                    <Text style={[styles.details, { color: '#676767' }]}>{Strings.ViewDetails}</Text>
                                </TouchableOpacity>
                    }
                </View>
            </TouchableOpacity>

            {
                Tab == 0 &&
                <View style={styles.btnContainer}>
                    <AppButton
                        label={Strings.Reject}
                        labelStyle={[styles.label]}
                        style={styles.btnStyle}
                    />
                    <AppButton
                        gradient={true}
                        label={Strings.Accept}
                        labelStyle={[styles.label]}
                        style={styles.btnStyle}
                        onPress={() => setIsAlertVisible(true)}
                    />

                </View>
            }

            <BidDetailModal
                visible={isDetailModal}
                onRequestClose={() => setIsDetailModal(false)}
                onCancelPress={() => setIsDetailModal(false)}
                twoBtns={true}
                positiveBtn={'Accept'}
                negativeBtn={'Reject'}
                Item={Item}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        // height: 88,
        borderRadius: 20,
        marginTop: 15,
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: '#F8F8F8'
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
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
    priceTitle: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: '#3C3C3C',
        marginLeft: 10,
    },
    price: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
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
    amountView: {
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
        alignSelf: 'flex-end'
    },
    reject: {
        fontSize: 11,
        textDecorationLine: 'underline',
        fontFamily: Fonts.Regular,
        color: '#ED010F',
        alignSelf: 'flex-end'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        marginTop: 17,
    },
    btnStyle: {
        width: '47%',
        height: 30,
        backgroundColor: '#F24238'
    },
    label: {
        fontSize: 13,
        fontFamily: Fonts.Medium,
        color: colors.white
    }
})


export default BidsItem

