import React, { useState } from "react";
import { Text, TouchableOpacity, FlatList, View, Image, StyleSheet, Dimensions, TextInput, Keyboard } from "react-native";
import Modal from "react-native-modal";

import colors from '../Assets/Colors/Index';
import Fonts from "../Assets/Fonts/Index";
import Images from '../Assets/Images/Index'
import Strings from "../Assets/Strings/Index";
import AppButton from "./AppBtn";

const deviceWidth = Dimensions.get('window').width

const cities = [
    {
        id: '1',
        cityName: 'Gujranwala'
    },
    {
        id: '2',
        cityName: 'Lahore'
    },
    {
        id: '3',
        cityName: 'Islamabad'
    },
    {
        id: '4',
        cityName: 'Rawalpindi'
    },
    {
        id: '5',
        cityName: 'Karachi'
    },
    {
        id: '6',
        cityName: 'Abbotabad'
    }
]
const recentCities = [
    {
        id: '10',
        cityName: 'Gujranwala'
    },
    {
        id: '11',
        cityName: 'Lahore'
    }
]


const CityModal = (props) => {

    const { visible, onRequestClose, selectedCategory } = props
    const [selectedCity, setSelectedCity] = useState('')

    const renderCity = ({ item, index }) => {
        return (
            <View style={{
                width: '100%',
                paddingVertical: 5,
                borderBottomWidth: 2,
                borderBottomColor: colors.textInput,
                marginTop: index == 0 ? 13 : 0,
            }}>
                <View style={{ paddingHorizontal: 13, }}>
                    <TouchableOpacity onPress={() => setSelectedCity(index)}>
                        <Text style={[styles.city, { color: selectedCity === index ? colors.textPrimary : colors.textSecondary }]}>{item.cityName}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }



    const listFooter = () => {
        return (
            <FlatList
                data={cities}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={renderCity}
                style={{ width: '100%', marginTop: 10 }}
                ListHeaderComponent={() => {
                    return (
                        <Text style={[styles.commomnTextStyle, { fontSize: 18, paddingHorizontal: 13 }]}>{Strings.AllCitites}</Text>
                    )
                }}
                contentContainerStyle={{
                }}
            />
        )
    }
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
            backdropColor='rgba(0,0,0,0)'
            animationOutTiming={250}
            style={{ margin: 0 }}
        >


            <View style={styles.modalContainer}>
                <View style={styles.topView}>
                    <Text style={styles.filterTitle}>{Strings.SelectCity}</Text>
                    <TouchableOpacity onPress={() => {
                        Keyboard.dismiss()
                        onRequestClose()

                    }} activeOpacity={0.4}>
                        <Image source={Images.cross} style={styles.crossIcon} resizeMode='contain' />
                    </TouchableOpacity>

                </View>
                {/* --------------------------------------------------- */}

                <View style={{ paddingHorizontal: 7 }}>
                    <View style={styles.inputContainer}>
                        <View style={{ height: '100%', width: '10%', justifyContent: 'center' }}>
                            <Image source={Images.search} style={styles.searchIcon} resizeMode='contain' />
                        </View>
                        <View style={styles.inputStyle}>
                            <TextInput
                                placeholder={Strings.SearchCity}
                                style={styles.inputText}
                            />
                        </View>
                    </View>


                    <View style={{ height: 215, marginTop: 25 }}>
                        <FlatList
                            data={recentCities}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderCity}
                            style={{ width: '100%', }}
                            ListHeaderComponent={() => {
                                return (
                                    <Text style={[styles.commomnTextStyle, { fontSize: 18, paddingHorizontal: 13 }]}>{Strings.RecentCitites}</Text>

                                )
                            }}
                            ListFooterComponent={listFooter}
                            contentContainerStyle={{
                            }}
                        />
                    </View>

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
        paddingVertical: 19,
        paddingHorizontal: 8

    },
    topView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: colors.textInput,
    },

    inputContainer: {
        width: '100%',
        height: 44,
        marginTop: 23,
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#F8F8F8'
    },
    inputStyle: {
        width: '90%',
        height: '100%',
        justifyContent: 'center'
    },
    inputText: {
        fontSize: 15,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },
    searchIcon: {
        height: 24,
        width: 24,
        tintColor: colors.textSecondary
    },
    filterTitle: {
        fontSize: 20,
        fontFamily: Fonts.Medium,
        color: colors.textPrimary
    },

    city: {
        fontSize: 14,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },

    commomnTextStyle: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },
    crossIcon: {
        height: 20,
        width: 20
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        marginTop: 25

    },
    btnStyle: {
        backgroundColor: colors.nonActiveBtn,
        width: 147
    }
});

export default CityModal;


