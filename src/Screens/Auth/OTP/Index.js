import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard,
    ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux'

// --------------------------------------------
import styles from './Styles'
import Images from '../../../Assets/Images/Index'
import AppButton from '../../../Components/AppBtn'
import OTPInput from '../../../Components/OTPInput'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';




const OTP = ({ navigation, route }) => {


    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.back}
                activeOpacity={0.4}
                onPress={() => {
                    Keyboard.dismiss()
                    setTimeout(() => {
                        navigation.goBack()
                    }, 25);
                }}>
                <Image
                    source={Images.arrow}
                    style={styles.arrow}
                />
            </TouchableOpacity>
            <Image
                source={Images.RightEllipse}
                style={styles.rightEclipse}
            />



            <KeyboardAwareScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollView}>

                <Text style={styles.otp}>{loading ? Strings.verified : Strings.otp}</Text>
                <Text style={styles.otpGuide}>{loading ? Strings.verify_msg : Strings.otp_guide}</Text>

                {
                    loading ?
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '47%'
                        }}>
                            <View style={styles.verifiedView}>
                                <View style={styles.innerView}>
                                    <Image
                                        source={Images.tick}
                                        style={styles.checked}
                                    />
                                </View>
                            </View>
                        </View>
                        :
                        <>
                            <Image
                                source={route?.params?.routeName === 'ForgotPassword' ? Images.authenticationTwo : Images.authentication}
                                style={route?.params?.routeName === 'ForgotPassword' ? styles.authenticationIconTwo : styles.authenticationIcon}
                            />

                            {/* ------------------------------OTPInput--------------------------- */}

                            <OTPInput
                                onComplete={(code) => {
                                    setOtp(code)
                                }}
                            />

                            <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                                <Text style={styles.code}>{Strings.didnotGetCode}</Text>
                                <TouchableOpacity
                                    activeOpacity={0.4}>
                                    <Text style={styles.sendAgain}>{Strings.Send_Again}</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                }

                <AppButton
                    gradient={true}
                    label={"Continue"}
                    style={styles.btnStyle}
                    labelStyle={styles.label}
                    onPress={() => {
                        route?.params?.routeName === 'ForgotPassword' ?
                            navigation.navigate('ResetPassword')
                            :
                            (
                                setTimeout(() => {
                                    setLoading(!loading)
                                }, 1000),
                                setTimeout(() => {
                                    navigation.navigate('HomeStack')
                                }, 1500)
                            )

                    }}
                />

            </KeyboardAwareScrollView>
        </SafeAreaView>


    )
}

export default OTP

