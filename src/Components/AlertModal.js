import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, Dimensions, TextInput } from "react-native";
import Modal from "react-native-modal";

import colors from '../Assets/Colors/Index';
import Fonts from "../Assets/Fonts/Index";
import Images from '../Assets/Images/Index'
import Strings from "../Assets/Strings/Index";
import AppButton from "./AppBtn";

const deviceWidth = Dimensions.get('window').width


const AlertModal = (props) => {

    const { visible, onRequestClose, onCancelPress, title, desc, twoBtns, positiveBtn, negativeBtn } = props
    return (
        <Modal
            isVisible={visible}
            animationIn='fadeInRight'
            animationOut='fadeOutLeft'
            deviceWidth={deviceWidth}
            animationInTiming={300}
            animationOutTimixng={300}
            onBackButtonPress={onRequestClose}
            hasBackdrop={true}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            backdropColor='rgba(0,0,0,0.8)'
        >


            <View style={styles.modalContainer}>

                <Text style={styles.Title}>{title}</Text>
                <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={styles.desc}>{desc}</Text>
                </View>

                {
                    twoBtns ?
                        <View style={styles.btnContainer}>

                            <AppButton
                                onPress={onCancelPress}
                                label={negativeBtn}
                                labelStyle={[styles.commomnTextStyle, { fontSize: 17 }]}
                                style={styles.btnStyle}
                            />

                            <AppButton
                                onPress={onRequestClose}
                                gradient={true}
                                label={positiveBtn}
                                labelStyle={[styles.commomnTextStyle, { fontSize: 17, color: colors.white }]}
                                style={styles.btnStyle}
                            />
                        </View>
                        :
                        <AppButton
                            onPress={onRequestClose}
                            gradient={true}
                            label={positiveBtn}
                            labelStyle={[styles.commomnTextStyle, { fontSize: 17, color: colors.white }]}
                            style={[styles.btnStyle, { marginTop: 24 }]}
                        />
                }
            </View>




        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 12,
        paddingVertical: 26

    },
    Title: {
        fontSize: 20,
        fontFamily: Fonts.Medium,
        color: colors.textPrimary,
        alignSelf: 'center'
    },
    desc: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        marginTop: 24
    },
    commomnTextStyle: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },
    icon: {
        height: 18,
        width: 18,
        top: 3
    },
    arrow: {
        height: 20,
        width: 20
    },
    searchContainer: {
        marginTop: 15,
        width: '100%',
        paddingHorizontal: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: 95,
        height: 38,
        borderWidth: 0.8,
        borderColor: '#CCCCCC',
        paddingHorizontal: 7,
        marginTop: 7,
        borderRadius: 5,
        justifyContent: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginTop: 24,
    },
    btnStyle: {
        backgroundColor: colors.nonActiveBtn,
        width: '47%',
        alignSelf: 'center'
    }
});

export default AlertModal;


