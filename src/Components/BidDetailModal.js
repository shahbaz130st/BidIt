import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, Dimensions, } from "react-native";
import Modal from "react-native-modal";
import LinearGradient from "react-native-linear-gradient";

import colors from '../Assets/Colors/Index';
import Fonts from "../Assets/Fonts/Index";
import Images from '../Assets/Images/Index'
import Strings from "../Assets/Strings/Index";
import AppButton from "./AppBtn";

const deviceWidth = Dimensions.get('window').width


const BidDetailModal = (props) => {

    const { visible,
        onRequestClose,
        onCancelPress,
        twoBtns,
        positiveBtn,
        negativeBtn,
        Item
    } = props
    return (
        <Modal
            isVisible={visible}
            animationIn='fadeInRight'
            animationOut='fadeOutLeft'
            deviceWidth={deviceWidth}
            animationInTiming={300}
            animationOutTimixng={300}
            onBackButtonPress={onRequestClose}
            hasBackdrop={true}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            backdropColor='rgba(0,0,0,0.8)'
        >


            <View style={styles.modalContainer}>

                <View style={styles.infoContainer}>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ width: '20%', justifyContent: 'center' }}>
                            <Image
                                style={styles.profileImage}
                                source={Item.image}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 10, width: '80%' }}>
                            <View>
                                <Text style={styles.name}>{Item.name}</Text>
                                <View style={styles.ratingView}>
                                    <Image source={Images.Star} style={styles.starIcon} resizeMode='contain' />
                                    <Text style={styles.rating}>{Item.rating}</Text>
                                </View>
                                <View style={styles.locationView}>
                                    <Image source={Images.location} style={styles.locationIcon} resizeMode='contain' />
                                    <Text style={styles.location}>{Item.location}</Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                // onPress={() => props.navigation.navigate('CreatePost')}
                                activeOpacity={0.4}
                                style={styles.chatView}>
                                <LinearGradient
                                    colors={[colors.gradientOne, colors.gradientTwo]}
                                    start={{ x: 0.9, y: 0 }} end={{ x: 0.4, y: 0.7 }}
                                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 32 }}>
                                    <Image source={Images.bubbleChat} style={styles.chatIcon} resizeMode='contain' />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

                <View style={styles.detailView}>
                    <View style={{ flexDirection: 'row', flexWrap:'wrap' }}>
                        <Image source={Images.Amount} style={styles.commonIconStyle} resizeMode='contain' />
                        <Text style={styles.detailTextOne}>{'Requested Amount: '}</Text>
                        <Text style={styles.detailTextTwo}>{Item.price}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 2, flexWrap:'wrap' }}>
                        <Image source={Images.calender} style={styles.commonIconStyle} resizeMode='contain' />
                        <Text style={styles.detailTextOne}>{'Start Date: '}</Text>
                        <Text style={styles.detailTextTwo}>{'02 Feb, 2022'}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 2,flexWrap:'wrap' }}>
                        <Image source={Images.calender} style={styles.commonIconStyle} resizeMode='contain' />
                        <Text style={styles.detailTextOne}>{'End Date: '}</Text>
                        <Text style={styles.detailTextTwo}>{'02 Feb, 2022'}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 2,flexWrap:'wrap' }}>
                        <Image source={Images.jobDesc} style={styles.commonIconStyle} resizeMode='contain' />
                        <Text style={styles.detailTextOne}>{'Description: '}</Text>
                        <Text style={styles.detailTextTwo}>{'Hi there, I am looking for an electrician for my home.'}</Text>
                    </View>
                </View>
                {
                    twoBtns &&
                    <View style={styles.btnContainer}>

                        <AppButton
                            onPress={onCancelPress}
                            label={negativeBtn}
                            labelStyle={[styles.commomnTextStyle]}
                            style={styles.btnStyle}
                        />

                        <AppButton
                            onPress={onRequestClose}
                            gradient={true}
                            label={positiveBtn}
                            labelStyle={[styles.commomnTextStyle,]}
                            style={styles.btnStyle}
                        />
                    </View>
                }

            </View>









        </Modal >
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 12,
        paddingVertical: 29

    },
    infoContainer: {
        paddingLeft: 19,
        paddingRight: 10,

    },
    profileImage: {
        height: 65,
        width: 65,
    },
    name: {
        fontSize: 18,
        fontFamily: Fonts.Medium,
        color: '#383838',
    },
    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chatView: {
        height: 32,
        width: 32,
        borderRadius: 32,
        position: 'absolute',
        right: 10
    },
    chatIcon: {
        height: 15,
        width: 15,
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
    },
    location: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: '#3C3C3C',
        marginLeft: 5,
        marginTop: 3
    },
    detailView: {
        width:'100%',
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 19,
        marginTop: 10
    },
    detailTextOne: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: '#3C3C3C',
        marginLeft: 10,
    },
    detailTextTwo: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
    },
    commomnTextStyle: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
    },
    commonIconStyle: {
        height: 14,
        width: 14,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginTop: 24,
    },
    btnStyle: {
        backgroundColor: '#F24238',
        width: '47%',
        height: 52,
        alignSelf: 'center'
    }
});

export default BidDetailModal;


