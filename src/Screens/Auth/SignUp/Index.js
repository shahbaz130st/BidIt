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




const SignUp = ({ navigation }) => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const addressRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();


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
                    onPress={() => navigation.goBack()}
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

                <Text style={styles.signupText}>{Strings.Signup}</Text>
                <Text style={styles.create}>{Strings.create}</Text>

                {/* ------------------------------Input Fields--------------------------- */}

                <InputField
                    onChangeText={val => setName(val)}
                    value={name}
                    autoCapitalize={'none'}
                    leftIcon={Images.user}
                    placeholder={"Name"}
                    returnKeyType={'next'}
                    fieldRef={nameRef}
                    onSubmitEditing={() => {
                        emailRef.current.focus()
                    }}
                    customStyle={{ marginTop: 35 }}
                />

                <InputField
                    onChangeText={val => setEmail(val)}
                    value={email}
                    leftIcon={Images.email}
                    placeholder={"Email"}
                    returnKeyType={'next'}
                    fieldRef={emailRef}
                    onSubmitEditing={() => {
                        numberRef.current.focus()
                    }}
                    customStyle={{ marginTop: 16 }}
                />

                <InputField
                    onChangeText={val => setNumber(val)}
                    value={number}
                    leftIcon={Images.phone}
                    placeholder={"Phone Number"}
                    returnKeyType={'next'}
                    fieldRef={numberRef}
                    onSubmitEditing={() => {
                        addressRef.current.focus()
                    }}
                    customStyle={{ marginTop: 16 }}
                />

                <InputField
                    onChangeText={val => setAddress(val)}
                    value={address}
                    leftIcon={Images.location}
                    placeholder={"Address"}
                    returnKeyType={'next'}
                    fieldRef={addressRef}
                    onSubmitEditing={() => {
                        passwordRef.current.focus()
                    }}
                    customStyle={{ marginTop: 16 }}
                />

                <InputField
                    onChangeText={val => setPassword(val)}
                    value={password}
                    leftIcon={Images.password}
                    placeholder={"Password"}
                    returnKeyType={'next'}
                    fieldRef={passwordRef}
                    onSubmitEditing={() => {
                        confirmPasswordRef.current.focus()
                    }}
                    isRightIcon={true}
                    rightIcon={passwordVisible ? Images.show : Images.hide}
                    rightIconOnPress={() => setPasswordVisible(!passwordVisible)}
                    password={passwordVisible ? false : true}
                    customStyle={{ marginTop: 16 }}
                />

                <InputField
                    onChangeText={val => setConfirmPass(val)}
                    value={confirmPass}
                    leftIcon={Images.password}
                    placeholder={"Confirm Password"}
                    returnKeyType={'done'}
                    fieldRef={confirmPasswordRef}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                    }}
                    isRightIcon={true}
                    rightIcon={confirmPasswordVisible ? Images.show : Images.hide}
                    rightIconOnPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    password={confirmPasswordVisible ? false : true}
                    customStyle={{ marginTop: 16 }}
                />

                <AppButton
                    gradient={true}
                    label={"SIGNUP"}
                    style={styles.btnStyle}
                    labelStyle={styles.label}
                />

                <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                    <Text style={styles.haveAccount}>{Strings.Have_Account}</Text>
                    <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.signIn}>{Strings.SignIn}</Text>
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

export default SignUp

