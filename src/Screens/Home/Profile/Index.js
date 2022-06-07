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
import AlertModal from '../../../Components/AlertModal';


const Profile = ({ navigation, route }) => {

    const [isAlertVisible, setIsAlertVisible] = useState(false)

    return (
        <SafeAreaView style={styles.mainContainer}>

            <Header
                rightIcon={true}
                leftIcon={Images.menu}
                leftIconStyle={{ tintColor: colors.iconPrimary }}
            />
            <View style={styles.innerContainer}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[styles.rowContainer, { marginTop: 16 }]}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')} activeOpacity={0.4} style={styles.profileItemContainer}>
                            <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Images.info} style={styles.icon} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={{ height: '40%', alignItems: 'center' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.ProfileInfo}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')} activeOpacity={0.4} style={styles.profileItemContainer}>
                            <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Images.password} style={styles.icon} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={{ height: '40%', alignItems: 'center' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Password}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* -------------------------------------------- */}

                    <View style={[styles.rowContainer, { marginTop: 12 }]}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Notifications')} activeOpacity={0.4} style={styles.profileItemContainer}>
                            <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Images.notification} style={styles.icon} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={{ height: '40%', alignItems: 'center' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Notifications}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setIsAlertVisible(true)} activeOpacity={0.4} style={styles.profileItemContainer}>
                            <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Images.user} style={styles.icon} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={{ height: '40%', alignItems: 'center' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Delete_Account}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* -------------------------------------------- */}

                    <View style={[styles.rowContainer, { marginTop: 12 }]}>
                        <TouchableOpacity activeOpacity={0.4} style={styles.profileItemContainer}>
                            <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Images.language} style={styles.icon} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={{ height: '40%', alignItems: 'center' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Language}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.4} style={styles.profileItemContainer}>
                            <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.iconContainer}>
                                    <Image source={Images.privacy} style={styles.icon} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={{ height: '40%', alignItems: 'center' }}>
                                <Text style={styles.commonTextStyleOne}>{Strings.Privacy}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* -------------------------------------------- */}

                    <TouchableOpacity activeOpacity={0.4} style={[styles.profileItemContainer, { marginTop: 12, alignSelf: 'center' }]}>
                        <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.iconContainer}>
                                <Image source={Images.question} style={styles.icon} resizeMode='contain' />
                            </View>
                        </View>
                        <View style={{ height: '40%', alignItems: 'center' }}>
                            <Text style={styles.commonTextStyleOne}>{Strings.Terms}</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <AlertModal
                visible={isAlertVisible}
                onRequestClose={() => setIsAlertVisible(false)}
                onCancelPress={() => setIsAlertVisible(false)}
                title={Strings.Delete_Account}
                desc={Strings.Confirm_Delete}
                twoBtns={true}
                positiveBtn={'Yes'}
                negativeBtn={'No'}
            />
        </SafeAreaView >


    )
}


export default Profile

