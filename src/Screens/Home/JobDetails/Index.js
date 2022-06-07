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




const JobDetails = ({ navigation, route }) => {

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

                <TouchableOpacity activeOpacity={0.4} style={styles.profileContainer}>
                    <View style={{ width: '25%', justifyContent: 'center' }}>
                        <Image
                            style={styles.profileImage}
                            source={Item.image}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={{ width: '55%', justifyContent: 'center', }}>
                        <Text style={styles.name}>{Item.name}</Text>
                        <Text style={styles.price}>{Item?.price}</Text>

                        <View style={styles.ratingView}>
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Text style={styles.rating}>{Item.rating}</Text>
                        </View>
                        <View style={styles.locationView}>
                            <Image source={Images.location} style={styles.locationIcon} resizeMode='contain' />
                            <Text style={styles.location}>{Item.location}</Text>
                        </View>


                    </View>
                    <View style={{ width: '25%', flexDirection: 'row', }}>
                        <View style={styles.deleteIcon}>
                            <Image source={Images.delete} style={styles.icon} resizeMode='contain' />
                        </View>
                        <View>
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
                        </View>
                    </View>
                </TouchableOpacity>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.detailsView}>
                        <Text style={styles.title}>{Strings.JobDetails}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Image source={Images.location} style={styles.commonIconStyle} resizeMode='contain' />
                            <Text style={styles.subTitle}>{Strings.Location}</Text>
                            <Text style={[styles.subTitle, { fontFamily: Fonts.Regular, color: colors.textSecondary, marginLeft: 0 }]}>{Item.location}</Text>
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

                    <View style={styles.btnContainer}>
                        <AppButton
                            label={Strings.Close}
                            labelStyle={[styles.btnLabel,{ color: colors.textSecondary }]}
                            style={styles.btnStyle}
                        />
                        <AppButton
                            gradient={true}
                            label={Strings.ViewAllBids}
                            labelStyle={[styles.btnLabel, { color: colors.white }]}
                            style={styles.btnStyle}
                        />
                    </View>
                </ScrollView>
            </View>


        </SafeAreaView >


    )
}


export default JobDetails

