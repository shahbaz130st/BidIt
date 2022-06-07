import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, Dimensions, TextInput } from "react-native";
import Modal from "react-native-modal";

import colors from '../Assets/Colors/Index';
import Fonts from "../Assets/Fonts/Index";
import Images from '../Assets/Images/Index'
import Strings from "../Assets/Strings/Index";
import AppButton from "./AppBtn";

const deviceWidth = Dimensions.get('window').width


const FilterModal = (props) => {

    const { visible, onRequestClose, selectedCategory, selectCity } = props
    return (
        <Modal
            isVisible={visible}
            animationIn='fadeInUp'
            animationOut='fadeOutDown'
            deviceWidth={deviceWidth}
            animationInTiming={250}
            onBackButtonPress={onRequestClose}
            hasBackdrop={true}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            backdropColor='rgba(0,0,0,0.8)'
            animationOutTiming={250}
            style={{ margin: 0 }}
        >


            <View style={styles.modalContainer}>
                <View style={styles.topView}>
                    <Text style={styles.filterTitle}>{Strings.Filter}</Text>
                    <Text>{Strings.Clear}</Text>
                </View>
                {/* --------------------------------------------------- */}

                <View style={styles.filterContentView}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Image source={Images.location} style={styles.icon} resizeMode='contain' />
                        <View style={{ marginLeft: 9 }}>
                            <Text style={styles.Title}>{Strings.City}</Text>
                            <Text style={styles.commomnTextStyle}>{'Lahore'}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={selectCity} activeOpacity={0.4}>
                        <Image source={Images.rightArrow} style={styles.arrow} resizeMode='contain' />
                    </TouchableOpacity>

                </View>
                {/* --------------------------------------------------- */}

                <View style={[styles.filterContentView, { flexDirection: 'column', alignItems: 'flex-start' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Image source={Images.experience} style={styles.icon} resizeMode='contain' />
                        <View style={{ marginLeft: 9 }}>
                            <Text style={styles.Title}>{Strings.Experience}</Text>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View>
                            <Text style={styles.commomnTextStyle}>{'FROM'}</Text>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="1 Year"
                                    placeholderTextColor={'#CCCCCC'}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.commomnTextStyle}>{'TO'}</Text>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Any"
                                    placeholderTextColor={'#CCCCCC'}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                {/* --------------------------------------------------- */}

                <View style={[styles.filterContentView, { borderBottomWidth: 0 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Image source={Images.type} style={styles.icon} resizeMode='contain' />
                        <View style={{ marginLeft: 9 }}>
                            <Text style={styles.Title}>{Strings.JobType}</Text>
                            <Text style={styles.commomnTextStyle}>{selectedCategory?.name}</Text>
                        </View>
                    </View>
                    <Image source={Images.rightArrow} style={styles.arrow} resizeMode='contain' />
                </View>

                <View style={styles.btnContainer}>
                    <AppButton
                        onPress={onRequestClose}
                        label={Strings.Cancel}
                        labelStyle={[styles.commomnTextStyle, { fontSize: 17 }]}
                        style={styles.btnStyle}
                    />
                    <AppButton
                        onPress={onRequestClose}
                        gradient={true}
                        label={Strings.Apply}
                        labelStyle={[styles.commomnTextStyle, { fontSize: 17, color: colors.white }]}
                        style={styles.btnStyle}
                    />

                </View>
            </View>




        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        width: deviceWidth,
        backgroundColor: colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        paddingVertical: 19

    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 19,
    },
    filterTitle: {
        fontSize: 20,
        fontFamily: Fonts.Medium,
        color: colors.textPrimary
    },
    subTitle: {
        fontSize: 16,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },
    filterContentView: {
        paddingHorizontal: 24,
        paddingVertical: 21,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.textInput,
    },
    Title: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },
    commomnTextStyle: {
        fontSize: 12,
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
        paddingHorizontal: 40,
        marginTop: 10

    },
    btnStyle: {
        backgroundColor: colors.nonActiveBtn,
        width: 147
    }
});

export default FilterModal;


