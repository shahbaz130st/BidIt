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
import { TextInput, Provider, DefaultTheme } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';

// --------------------------------------------
import styles from './Styles'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import Header from '../../../Components/Header';
import Images from '../../../Assets/Images/Index';
import AppButton from '../../../Components/AppBtn';
import InputField from '../../../Components/InputField';
import CreatePostModal from '../../../Components/AlertModal';
import DropdownPicker from '../../../Components/DropdownPicker';


const ChangePassword = ({ navigation, route }) => {

    const [isPostModal, setIsPostModal] = useState(false)
    const [jobCategory, setJobCategory] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState('')
    const [experience, setExperience] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [desc, setDesc] = useState('')
    const jobCategoryList = [
        {
            label: 'Full Time',
            value: 'Full Time',
        },
        {
            label: 'Part Time',
            value: 'Part Time',
        },
    ]
    const experienceList = [
        {
            label: 'none',
            value: 'none',
        },
        {
            label: '1 Year',
            value: '1 Year',
        },
        {
            label: '1+ Year',
            value: '1+ Year',
        },
    ]
    const startDateList = [
        {
            label: '02 Feb, 2020',
            value: '02 Feb, 2020',
        },
        {
            label: '03 Feb, 2020',
            value: '03 Feb, 2020',
        },
    ]
    const endDateList = [
        {
            label: '05 Feb, 2020',
            value: '05 Feb, 2020',
        },
        {
            label: '06 Feb, 2020',
            value: '06 Feb, 2020',
        },
    ]

    return (

        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    leftIcon={Images.arrow}
                    headerTitle={Strings.Create_Post}
                    onLeftIconPress={() => navigation.goBack()}
                />

                <View style={styles.mainContent}>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps='handled'
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    >
                        <Text style={styles.Title}>{Strings.Create_Post_Desc}</Text>
                        <View style={styles.rowContainer}>
                            <View style={styles.addImage}>
                                <Image source={Images.Gallery} style={styles.addIcon} resizeMode='contain' />
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 16 }}>
                                    <Text style={[styles.commonText, { color: colors.textPrimary }]}>{'Upload '}</Text>
                                    <Text style={styles.commonText}>{'an image/video '}</Text>
                                    <Text style={styles.commonText}>{'of a job'}</Text>
                                </View>
                            </View>
                            <View style={styles.addImage}>
                                <Image source={Images.Gallery} style={styles.addIcon} resizeMode='contain' />
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 16 }}>
                                    <Text style={[styles.commonText, { color: colors.textPrimary }]}>{'Upload '}</Text>
                                    <Text style={styles.commonText}>{'an image/video '}</Text>
                                    <Text style={styles.commonText}>{'of a job'}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>


                            <DropdownPicker
                                leftIcon={Images.type}
                                list={jobCategoryList}
                            />

                            <InputField
                                onChangeText={val => setAddress(val)}
                                value={address}
                                leftIcon={Images.location}
                                placeholder={"Address"}
                                customStyle={{ marginTop: 16 }}
                            />

                            <InputField
                                onChangeText={val => setSalary(val)}
                                value={salary}
                                leftIcon={Images.Amount}
                                placeholder={"Salary"}
                                customStyle={{ marginTop: 16 }}
                            />

                            <DropdownPicker
                                leftIcon={Images.experience}
                                list={experienceList}
                            />

                            <DropdownPicker
                                leftIcon={Images.calender}
                                list={startDateList}
                            />

                            <DropdownPicker
                                leftIcon={Images.calender}
                                list={endDateList}
                            />

                            <InputField
                                onChangeText={val => setDesc(val)}
                                value={desc}
                                leftIcon={Images.jobDesc}
                                placeholder={"Job Description"}
                                multiline={true}
                                customStyle={{ marginTop: 16, height: 160 }}
                            />
                        </View>

                        <View style={styles.btnContainer}>
                            <AppButton
                                label={Strings.Cancel}
                                labelStyle={[styles.label, { color: colors.textSecondary }]}
                                style={styles.btnStyle}
                            />
                            <AppButton
                                gradient={true}
                                label={Strings.Create}
                                labelStyle={[styles.label, { color: colors.white }]}
                                style={styles.btnStyle}
                                onPress={() => setIsPostModal(true)}
                            />
                        </View>


                    </KeyboardAwareScrollView>
                </View>

            </LinearGradient>
            <CreatePostModal
                visible={isPostModal}
                image={Images.confetti}
                onRequestClose={() => setIsPostModal(false)}
                onCancelPress={() => setIsPostModal(false)}
                title={Strings.Post_Created}
                desc={Strings.Created_Post_Desc}
                twoBtns={false}
                positiveBtn={'Ok'}
            />
        </SafeAreaView >


    )
}


export default ChangePassword;

