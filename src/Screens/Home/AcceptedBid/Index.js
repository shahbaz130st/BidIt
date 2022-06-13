import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    FlatList,
    ImageBackground,
    ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------
import styles from './Styles'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import JobStatus from '../../../Components/JobStatus';
import Header from '../../../Components/Header';
import Images from '../../../Assets/Images/Index';
import Fonts from '../../../Assets/Fonts/Index';
import AppButton from '../../../Components/AppBtn';




const AcceptedBid = ({ navigation, route }) => {

    const Item = route?.params?.ItemDetail

    useEffect(() => {
        console.log(Item);
    }, [])


    return (
        <SafeAreaView style={styles.mainContainer}>

            <ImageBackground source={Images.jobDetail} style={styles.backgroundImage}>
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()}>
                    <Image source={Images.arrow} style={styles.back} resizeMode='contain' />
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.jobDetailView}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.profileContainer}>
                        <View style={{ width: '25%', justifyContent: 'center' }}>
                            <Image
                                style={styles.profileImage}
                                source={Images.userOne}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={{ width: '55%', justifyContent: 'center' }}>
                            <Text style={styles.name}>{'Jhone'}</Text>
                            <Text style={styles.price}>{'$500-$1800'}</Text>

                            <View style={styles.ratingView}>
                                <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                                <Text style={styles.rating}>{'4.8'}</Text>
                            </View>
                            <View style={styles.locationView}>
                                <Image source={Images.location} style={styles.locationIcon} resizeMode='contain' />
                                <Text style={styles.location}>{'Indus park, california'}</Text>
                            </View>


                        </View>
                        <View style={{ width: '25%', flexDirection: 'row', }}>
                            <TouchableOpacity activeOpacity={0.4} style={styles.deleteIcon}>
                                <Image source={Images.delete} style={styles.icon} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.4}>
                                <LinearGradient
                                    colors={['#B75DF6', colors.gradientOne]}
                                    start={{ x: 0, y: 0.8 }}
                                    end={{ x: 0, y: 0 }}
                                    useAngle={true}
                                    angle={75}
                                    angleCenter={{ x: 0.55, y: 0.7 }}
                                    style={[styles.editIcon]}>
                                    <Image source={Images.edit} style={styles.icon} resizeMode='contain' />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.detailsView}>
                        <Text style={styles.title}>{Strings.JobDetails}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Image source={Images.location} style={styles.commonIconStyle} resizeMode='contain' />
                            <Text style={styles.subTitle}>{Strings.Location}</Text>
                            <Text style={[styles.subTitle, { fontFamily: Fonts.Regular, color: colors.textSecondary, marginLeft: 0 }]}>{'Indus park, california'}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            <Image source={Images.calender} style={styles.commonIconStyle} resizeMode='contain' />
                            <Text style={styles.subTitle}>{Strings.StartDate}</Text>
                            <Text style={[styles.subTitle, { fontFamily: Fonts.Regular, color: colors.textSecondary, marginLeft: 0 }]}>{'02 feb, 2022'}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            <Image source={Images.calender} style={styles.commonIconStyle} resizeMode='contain' />
                            <Text style={styles.subTitle}>{Strings.EndDate}</Text>
                            <Text style={[styles.subTitle, { fontFamily: Fonts.Regular, color: colors.textSecondary, marginLeft: 0 }]}>{'04 feb, 2022'}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            <Image source={Images.checked} style={styles.commonIconStyle} resizeMode='contain' />
                            <Text style={styles.subTitle}>{Strings.JobStatus}</Text>
                            <Text style={[styles.subTitle, { fontFamily: Fonts.Regular, color: colors.textSecondary, marginLeft: 0 }]}>{'Pending'}</Text>
                        </View>
                    </View>

                    {/* ---------------------------Requirements------------------ */}
                    <View style={styles.detailsView}>
                        <Text style={styles.title}>{Strings.Requirements}</Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={[styles.requirements]}>{'. Lorem ipsum dolor sit amet, consectetur adipiscing.'}</Text>
                            <Text style={[styles.requirements]}>{'. Lorem ipsum dolor sit amet, consectetur adipiscing.'}</Text>
                            <Text style={[styles.requirements]}>{'. Lorem ipsum dolor sit amet, consectetur adipiscing.'}</Text>
                        </View>

                    </View>

                    {/* ---------------------------Description------------------ */}
                    <View style={styles.detailsView}>
                        <Text style={styles.title}>{Strings.Description}</Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={[styles.requirements]}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Text>
                        </View>

                    </View>
                    <View style={styles.detailsView}>
                        <Text style={styles.title}>{Strings.Accepted_Bid}</Text>
                        <View style={styles.acceptedBid}>
                            <TouchableOpacity activeOpacity={0.4} style={styles.innerContainer}>
                                <View style={{ width: '20%' }}>
                                    <Image
                                        style={styles.image}
                                        source={Images.userFour}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={{ width: '60%', justifyContent: 'center', }}>
                                    <Text style={styles.nameTwo}>{'Jhon'}</Text>

                                    <View style={styles.ratingViewTwo}>
                                        <Image source={Images.Star} style={styles.starIcon} resizeMode='contain' />
                                        <Text style={styles.rating}>{'4.8'}</Text>
                                    </View>
                                    <View style={styles.locationViewTwo}>
                                        <Image source={Images.location} style={styles.locationIcon} resizeMode='contain' />
                                        <Text style={styles.location}>{'Indus park, california'}</Text>
                                    </View>
                                    <View style={styles.amountView}>
                                        <Image source={Images.Amount} style={styles.locationIcon} resizeMode='contain' />
                                        <Text style={styles.priceTitle}>{'Requested Amount: '}</Text>
                                        <Text style={styles.priceTwo}>{'$1800'}</Text>
                                    </View>
                                </View>
                                <View style={{ width: '20%' }}>

                                    <TouchableOpacity activeOpacity={0.4}>
                                        <Text style={[styles.details, { color: '#676767' }]}>{Strings.ViewDetails}</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                        <AppButton
                            gradient={true}
                            label={Strings.Close}
                            labelStyle={[styles.btnLabel, { color: colors.white }]}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                </ScrollView>
            </View>


        </SafeAreaView >


    )
}


export default AcceptedBid

