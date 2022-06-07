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
import AppButton from '../../../Components/AppBtn';
import NoIconInputField from '../../../Components/NoIconInputField';


const EditProfile = ({ navigation, route }) => {

    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [country, setCountry] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [id, setId] = useState('')

    // ----------------Refs--------------------
    const fullNameRef = useRef()
    const usernameRef = useRef()
    const countryRef = useRef()
    const numberRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const idRef = useRef()


    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    leftIcon={Images.arrow}
                    headerTitle={Strings.EditProfile}
                    onLeftIconPress={() => navigation.goBack()}
                />

                <View style={styles.mainContent}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.userInfoContainer}>
                            <Image source={Images.userThree} style={styles.profileImage} resizeMode='contain' />
                            <TouchableOpacity activeOpacity={0.4} style={styles.edit}>
                                <Image source={Images.edit} style={styles.editIcon} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>

                        <NoIconInputField
                            onChangeText={val => setFullName(val)}
                            value={fullName}
                            placeholder={"Jhon Smith"}
                            returnKeyType={'next'}
                            fieldRef={fullNameRef}
                            onSubmitEditing={() => {
                                usernameRef.current.focus()
                            }}
                            label={Strings.Full_Name}
                            customStyle={{ marginTop: 45 }}
                        />
                        <NoIconInputField
                            onChangeText={val => setUsername(val)}
                            value={username}
                            placeholder={"Jhon"}
                            returnKeyType={'next'}
                            fieldRef={usernameRef}
                            onSubmitEditing={() => {
                                countryRef.current.focus()
                            }}
                            label={Strings.User_Name}
                            customStyle={{ marginTop: 12 }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
                            <NoIconInputField
                                onChangeText={val => setCountry(val)}
                                value={country}
                                placeholder={"+92"}
                                returnKeyType={'next'}
                                fieldRef={countryRef}
                                onSubmitEditing={() => {
                                    numberRef.current.focus()
                                }}
                                label={Strings.Country}
                                customStyle={{ width: '40%' }}
                            />
                            <NoIconInputField
                                onChangeText={val => setNumber(val)}
                                value={number}
                                placeholder={"3200000000"}
                                returnKeyType={'next'}
                                fieldRef={numberRef}
                                onSubmitEditing={() => {
                                    emailRef.current.focus()
                                }}
                                label={Strings.Number}
                                customStyle={{ width: '55%' }}
                            />
                        </View>
                        <NoIconInputField
                            onChangeText={val => setEmail(val)}
                            value={email}
                            placeholder={"johndoe@gmail.com"}
                            returnKeyType={'next'}
                            fieldRef={emailRef}
                            onSubmitEditing={() => {
                                addressRef.current.focus()
                            }}
                            label={Strings.Email}
                            customStyle={{ marginTop: 12 }}
                        />
                        <NoIconInputField
                            onChangeText={val => setAddress(val)}
                            value={address}
                            placeholder={"42 Indus, California"}
                            returnKeyType={'next'}
                            fieldRef={addressRef}
                            onSubmitEditing={() => {
                                idRef.current.focus()
                            }}
                            label={Strings.Personal_Address}
                            customStyle={{ marginTop: 12 }}
                        />
                        <NoIconInputField
                            onChangeText={val => setId(val)}
                            value={id}
                            placeholder={"34101-0000000-0"}
                            returnKeyType={'done'}
                            fieldRef={idRef}
                            onSubmitEditing={() => {
                                Keyboard.dismiss()
                            }}
                            label={Strings.CNIC}
                            customStyle={{ marginTop: 12 }}
                        />

                        <AppButton
                            gradient={true}
                            label={Strings.Save_Changes}
                            style={styles.btnStyle}
                            labelStyle={styles.label}
                        />

                    </KeyboardAwareScrollView>
                </View>

            </LinearGradient>


        </SafeAreaView >


    )
}


export default EditProfile;

