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
import InputField from '../../../Components/InputField'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';




const SignIn = ({ navigation }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const emailRef = useRef();
    const passwordRef = useRef();


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
                contentContainerStyle={styles.scrollView}
                extraHeight={50}>

                <Text style={styles.signInText}>{Strings.SignIn}</Text>
                <Text style={styles.Login}>{Strings.Login}</Text>

                <Image
                    source={Images.login}
                    style={styles.loginIcon}
                />

                {/* ------------------------------Input Fields--------------------------- */}


                <InputField
                    onChangeText={val => setEmail(val)}
                    value={email}
                    leftIcon={Images.email}
                    placeholder={"Email"}
                    returnKeyType={'next'}
                    fieldRef={emailRef}
                    onSubmitEditing={() => {
                        passwordRef.current.focus()
                    }}
                    customStyle={{ marginTop: 56 }}
                />

                <InputField
                    onChangeText={val => setPassword(val)}
                    value={password}
                    leftIcon={Images.password}
                    placeholder={"Password"}
                    returnKeyType={'done'}
                    fieldRef={passwordRef}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    isRightIcon={true}
                    rightIcon={passwordVisible ? Images.show : Images.hide}
                    rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                    password={passwordVisible ? false : true}
                    customStyle={{ marginTop: 16 }}
                />
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.forgotText}>{Strings.forgot}</Text>
                </TouchableOpacity>



                <AppButton
                    gradient={true}
                    label={"SIGNIN"}
                    style={styles.btnStyle}
                    labelStyle={styles.label}
                    onPress={() => navigation.navigate('OTP', { routeName: 'SignIn' })}
                />

                <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                    <Text style={styles.haveAccount}>{Strings.no_Account}</Text>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => {
                            Keyboard.dismiss()
                            navigation.goBack()
                        }}>
                        <Text style={styles.signIn}>{Strings.Signup}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.OR}>{Strings.OR}</Text>
                <Text style={styles.social}>{Strings.Social}</Text>

                <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'center' }}>
                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Image
                                source={Images.google}
                                style={styles.socialIcon}
                            />
                        </View>
                    </View>

                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Image
                                source={Images.facebook}
                                style={styles.socialIcon}
                            />
                        </View>
                    </View>

                    <View style={styles.outer}>
                        <View style={styles.inner}>
                            <Image
                                source={Images.apple}
                                style={styles.socialIcon}
                            />
                        </View>
                    </View>
                </View>







            </KeyboardAwareScrollView>
        </SafeAreaView>


    )
}

export default SignIn

