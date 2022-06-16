import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";

import colors from '../Assets/Colors/Index';
import AppButton from "./AppBtn";
import Images from '../Assets/Images/Index'
import Fonts from "../Assets/Fonts/Index";



const AlertModal = (props) => {

    const { isVisible, onPress, message } = props
    return (
        <Modal
            isVisible={isVisible}
            animationIn='fadeInRight'
            animationOut='fadeOutLeft'
            animationInTiming={500}
            animationOutTiming={500}
            onBackButtonPress={onRequestClose}
            hasBackdrop={true}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            backdropColor='rgba(0,0,0,0.8)'>

            <View style={styles.modalContainer}>

                <Image source={Images.warning} resizeMode='contain' style={styles.icon} />

                <Text style={styles.modalText}>{message}</Text>

                <AppButton
                    onPress={onRequestClose}
                    gradient={true}
                    label={'OK'}
                    labelStyle={[styles.buttonText]}
                    style={[styles.btnStyle,]}
                />

            </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        width: 300,
        alignSelf: 'center',
        // alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 15,
        padding: 12
    },
    modalText: {
        fontSize: 15,
        fontWeight: '600',
        bottom: 15,
        alignSelf: 'center'
    },
    icon: {
        height: 60,
        width: 60,
        bottom: 30,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: colors.primary,
        width: 100,
        paddingVertical: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },
    btnStyle: {
        width: '47%',
        alignSelf: 'center',
        marginTop: 15
    }
});

export default AlertModal;


