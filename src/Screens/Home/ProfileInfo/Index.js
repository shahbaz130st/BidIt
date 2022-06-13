import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    FlatList,
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
import Header from '../../../Components/Header';
import Images from '../../../Assets/Images/Index';
import ProfileSettingsComponent from '../../../Components/ProfileSettingsComponent';


const ProfileInfo = ({ navigation, route }) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    rightIcon={true}
                    headerTitle={Strings.MyProfile} />

                <View style={styles.mainContent}>
                    <View style={styles.userInfoContainer}>
                        <Image source={Images.userThree} style={styles.profileImage} resizeMode='contain' />
                        <Text style={styles.username}>{'Jimmy Anderson'}</Text>
                        <View style={styles.ratingContainer}>
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Text style={styles.rating}>{'4.9'}</Text>
                            <Text style={styles.reviews}>{'('}</Text>
                            <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Ratings')}>
                                <Text style={[styles.reviews, { color: colors.textPrimary, marginLeft: 0, textDecorationLine: 'underline' }]}>{'67 Reviews'}</Text>
                            </TouchableOpacity>
                            <Text style={[styles.reviews, { marginLeft: 0 }]}>{')'}</Text>
                        </View>

                        {/* -----------------------------Details-------------------------- */}

                        <View style={styles.userDetails}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.commonTextStyleOne}>{Strings.FullName}</Text>
                                    <Text style={styles.commonTextStyleTwo}>{'Jimmy Anderson'}</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('EditProfile')}>
                                    <Text style={styles.edit}>{Strings.EditProfile}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Number}</Text>
                                <Text style={styles.commonTextStyleTwo}>{'+923124587415'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Address}</Text>
                                <Text style={styles.commonTextStyleTwo}>{'32 Walington,Indus Park USA'}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Email}</Text>
                                <Text style={styles.commonTextStyleTwo}>{'testing123@hotmail.com'}</Text>
                            </View>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ProfileSettingsComponent
                            leftIcon={Images.notification}
                            Title={Strings.Notification}
                            onPress={() => navigation.navigate('Notifications')}
                        />
                        <ProfileSettingsComponent
                            leftIcon={Images.key}
                            rightIcon={Images.rightArrow}
                            Title={Strings.Change_Password}
                            onPress={() => navigation.navigate('ChangePassword')}
                        />
                        <ProfileSettingsComponent
                            leftIcon={Images.bids}
                            rightIcon={Images.rightArrow}
                            Title={Strings.My_Bids}
                        />
                        <ProfileSettingsComponent
                            leftIcon={Images.language}
                            rightIcon={Images.rightArrow}
                            Title={Strings.Language_Settings}
                        />
                        <ProfileSettingsComponent
                            leftIcon={Images.contact}
                            rightIcon={Images.rightArrow}
                            Title={Strings.ContactUs}
                            onPress={() => navigation.navigate('ContactUs')}
                        />
                        <ProfileSettingsComponent
                            leftIcon={Images.terms}
                            rightIcon={Images.rightArrow}
                            Title={Strings.Terms}
                            onPress={() => navigation.navigate('TermsOfUse')}
                        />
                        <ProfileSettingsComponent
                            leftIcon={Images.policy}
                            rightIcon={Images.rightArrow}
                            Title={Strings.Privacy}
                            onPress={() => navigation.navigate('PrivacyPolicy')}
                        />
                        <ProfileSettingsComponent
                            leftIcon={Images.logout}
                            Title={Strings.Logout}
                            titleColor={{ color: '#FF2828' }}
                            iconColor={{ tintColor: '#FF2828' }}
                        />
                    </ScrollView>
                </View>

            </LinearGradient>


        </SafeAreaView >


    )
}


export default ProfileInfo

