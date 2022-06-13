import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------
import styles from './Styles'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import Header from '../../../Components/Header';
import Images from '../../../Assets/Images/Index';
import AppButton from '../../../Components/AppBtn';
import AlertModal from '../../../Components/AlertModal';


const PrivacyPolicy = ({ navigation, route }) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    leftIcon={Images.arrow}
                    headerTitle={Strings.Privacy}
                    onLeftIconPress={() => navigation.goBack()}
                />

                <View style={styles.mainContent}>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps='handled'
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}>

                        <Image source={Images.Privacy_Policy} style={styles.mainIcon} resizeMode='contain' />
                        <Text style={styles.Title}>{Strings.Privacy}</Text>

                        <View style={styles.innerContent}>
                            <Text style={styles.Desc}>
                                {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                `}
                            </Text>


                        </View>
                        <View style={styles.btnContainer}>
                            <AppButton
                                gradient={true}
                                label={Strings.Close}
                                labelStyle={[styles.label, { color: colors.white }]}
                                onPress={() => navigation.goBack()}
                            />

                        </View>

                    </KeyboardAwareScrollView>
                </View>

            </LinearGradient>

        </SafeAreaView >


    )
}


export default PrivacyPolicy;

