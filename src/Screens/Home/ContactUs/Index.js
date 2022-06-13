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
import InputField from '../../../Components/InputField';
import AlertModal from '../../../Components/AlertModal';


const ContactUs = ({ navigation, route }) => {

    const [email, setEmail] = useState('')
    const [desc, setDesc] = useState('')

    // ----------------Refs--------------------
    const emailRef = useRef()
    const descRef = useRef()


    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    leftIcon={Images.arrow}
                    headerTitle={Strings.ContactUs}
                    onLeftIconPress={() => navigation.goBack()}
                />

                <View style={styles.mainContent}>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps='handled'
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    >

                        <Image source={Images.Contact_Us} style={styles.mainIcon} resizeMode='contain' />


                        <InputField
                            onChangeText={val => setEmail(val)}
                            value={email}
                            leftIcon={Images.email}
                            placeholder={"Email"}
                            returnKeyType={'next'}
                            fieldRef={emailRef}
                            onSubmitEditing={() => {
                                descRef.current.focus()
                            }}
                            customStyle={{ marginTop: 35 }}
                        />

                        <InputField
                            onChangeText={val => setDesc(val)}
                            value={desc}
                            leftIcon={Images.Desc}
                            placeholder={"Description"}
                            returnKeyType={'done'}
                            fieldRef={descRef}
                            multiline={true}
                            customStyle={{ marginTop: 16, height: 160 }}
                        />



                        <View style={styles.btnContainer}>
                            <AppButton
                                label={Strings.Cancel}
                                labelStyle={[styles.label, { color: colors.textSecondary }]}
                                style={styles.btnStyle}
                            />
                            <AppButton
                                gradient={true}
                                label={Strings.Submit}
                                labelStyle={[styles.label, { color: colors.white }]}
                                style={styles.btnStyle}
                                onPress={() => setIsAlertVisible(true)}
                            />

                        </View>


                    </KeyboardAwareScrollView>
                </View>

            </LinearGradient>

        </SafeAreaView >


    )
}


export default ContactUs;

