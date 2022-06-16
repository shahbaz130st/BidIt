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


const ChangePassword = ({ navigation, route }) => {

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmNewPass, setConfirmNewPass] = useState('')
    const [oldVisible, setOldVisible] = useState(false)
    const [newVisible, setNewVisible] = useState(false)
    const [confirmVisible, setConfirmVisible] = useState(false)
    const [isAlertVisible, setIsAlertVisible] = useState(false)

    // ----------------Refs--------------------
    const oldPassRef = useRef()
    const newPassRef = useRef()
    const confirmNewPassRef = useRef()


    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    leftIcon={Images.arrow}
                    headerTitle={Strings.Change_Password}
                    onLeftIconPress={() => navigation.goBack()}
                />

                <View style={styles.mainContent}>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps='handled'
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    >

                        <Image source={Images.ChangePassword} style={styles.mainIcon} resizeMode='contain' />
                        <Text style={styles.Title}>{Strings.resetPass}</Text>
                        <Text style={styles.Desc}>{Strings.reset_guide}</Text>

                        <InputField
                            onChangeText={val => setOldPass(val)}
                            value={oldPass}
                            leftIcon={Images.password}
                            placeholder={"Old Password"}
                            returnKeyType={'next'}
                            fieldRef={oldPassRef}
                            onSubmitEditing={() => {
                                newPassRef.current.focus()
                            }}
                            isRightIcon={true}
                            rightIcon={oldVisible ? Images.show : Images.hide}
                            rightIconOnPress={() => setOldVisible(!oldVisible)}
                            password={oldVisible ? false : true}
                            customStyle={{ marginTop: 35 }}
                        />

                        <InputField
                            onChangeText={val => setNewPass(val)}
                            value={newPass}
                            leftIcon={Images.password}
                            placeholder={"New Password"}
                            returnKeyType={'next'}
                            fieldRef={newPassRef}
                            onSubmitEditing={() => {
                                confirmNewPassRef.current.focus()
                            }}
                            isRightIcon={true}
                            rightIcon={newVisible ? Images.show : Images.hide}
                            rightIconOnPress={() => setNewVisible(!newVisible)}
                            password={newVisible ? false : true}
                            customStyle={{ marginTop: 16 }}
                        />

                        <InputField
                            onChangeText={val => setConfirmNewPass(val)}
                            value={confirmNewPass}
                            leftIcon={Images.password}
                            placeholder={"New Password"}
                            returnKeyType={'done'}
                            fieldRef={confirmNewPassRef}
                            onSubmitEditing={() => {
                                Keyboard.dismiss()
                            }}
                            isRightIcon={true}
                            rightIcon={confirmVisible ? Images.show : Images.hide}
                            rightIconOnPress={() => setConfirmVisible(!confirmVisible)}
                            password={confirmVisible ? false : true}
                            customStyle={{ marginTop: 16 }}
                        />

                        <View style={styles.btnContainer}>
                            <AppButton
                                label={Strings.Cancel}
                                labelStyle={[styles.label, { color: colors.textSecondary }]}
                                style={styles.btnStyle}
                            />
                            <AppButton
                                gradient={true}
                                label={Strings.Confirm}
                                labelStyle={[styles.label, { color: colors.white }]}
                                style={styles.btnStyle}
                                onPress={() => setIsAlertVisible(true)}
                            />

                        </View>
                        {/* <AppButton
                            gradient={true}
                            label={Strings.Save_Changes}
                            style={styles.btnStyle}
                            labelStyle={styles.label}
                        /> */}

                    </KeyboardAwareScrollView>
                </View>

            </LinearGradient>
            <AlertModal
                visible={isAlertVisible}
                onRequestClose={() => setIsAlertVisible(false)}
                onCancelPress={() => setIsAlertVisible(false)}
                title={Strings.passChange}
                desc={Strings.passChangeMsg}
                twoBtns={false}
                positiveBtn={'Ok'}
            />

        </SafeAreaView >


    )
}


export default ChangePassword;

