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
import DropDownPicker from 'react-native-dropdown-picker';


// --------------------------------------------
import styles from './Styles'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import Header from '../../../Components/Header';
import Images from '../../../Assets/Images/Index';
import AppButton from '../../../Components/AppBtn';
import InputField from '../../../Components/InputField';
import CreatePostModal from '../../../Components/AlertModal';


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
                        <View style={{ marginTop: 26 }}>

                            <Picker
                                placeholder={'Job Category'}
                                onValueChange={(value) => {
                                    setJobCategory(value);
                                }}
                                selectedValue={jobCategory}>
                                <Picker.Item style={{ color: 'grey' }} label="Membership Category *" value="default" />
                                <Picker.Item label="Tulip" value="2" />
                                <Picker.Item label="Orchid" value="3" />
                                <Picker.Item label="Dhalia" value="4" />
                            </Picker>

                            {/* <InputField
                                onChangeText={val => setJobCategory(val)}
                                value={jobCategory}
                                leftIcon={Images.type}
                                placeholder={"Job Category"}
                                isRightIcon={true}
                                rightIcon={Images.down}
                                editable={false}
                                rightIconStyle={{ height: 15, width: 15, tintColor: '#BFBFBF' }}
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

                            <InputField
                                onChangeText={val => setExperience(val)}
                                value={experience}
                                leftIcon={Images.experience}
                                placeholder={"Experience"}
                                isRightIcon={true}
                                rightIcon={Images.down}
                                editable={false}
                                rightIconStyle={{ height: 15, width: 15, tintColor: '#BFBFBF' }}
                                customStyle={{ marginTop: 16 }}
                            />
                            <InputField
                                onChangeText={val => setStartDate(val)}
                                value={startDate}
                                leftIcon={Images.calender}
                                placeholder={"Start Date"}
                                isRightIcon={true}
                                rightIcon={Images.down}
                                editable={false}
                                rightIconStyle={{ height: 15, width: 15, tintColor: '#BFBFBF' }}
                                customStyle={{ marginTop: 16 }}
                            />

                            <InputField
                                onChangeText={val => setEndDate(val)}
                                value={endDate}
                                leftIcon={Images.calender}
                                placeholder={"End Date"}
                                isRightIcon={true}
                                rightIcon={Images.down}
                                editable={false}
                                rightIconStyle={{ height: 15, width: 15, tintColor: '#BFBFBF' }}
                                customStyle={{ marginTop: 16 }}
                            />

                            <InputField
                                onChangeText={val => setDesc(val)}
                                value={desc}
                                leftIcon={Images.jobDesc}
                                placeholder={"Job Description"}
                                multiline={true}
                                customStyle={{ marginTop: 16, height: 160 }}
                            /> */}
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

