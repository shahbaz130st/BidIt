import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
// ------------------------------------------
import colors from '../Assets/Colors/Index';
import Fonts from '../Assets/Fonts/Index';

const SearchInput = props => {
    const {
        onChangeText,
        value,
        autoCapitalize,
        leftIcon,
        placeholder,
        returnKeyType,
        onSubmitEditing,
        keyBoardType,
        rightIcon,
        customStyle
    } = props;

    return (
        <View style={[styles.mainContainer,customStyle]}>

            <View style={styles.searchIcon}>
                <Image source={leftIcon} style={styles.leftIconStyle} />
            </View>

            <View style={[styles.input]}>
                <TextInput
                    style={{ fontSize: 13, fontFamily: Fonts.Regular }}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={'gray'}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyBoardType}
                    returnKeyType={returnKeyType}
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={false}
                />
            </View>
            <View style={styles.filterIcon}>
                <TouchableOpacity
                    activeOpacity={0.4}>
                    <Image source={rightIcon} style={styles.rightIconStyle} />
                </TouchableOpacity>
            </View>


        </View >

    )
};

export default SearchInput;

const styles = StyleSheet.create({

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: colors.textInput,
        height: 43,
        width: '100%',
        borderRadius: 23,
        paddingHorizontal:15
    },
    searchIcon: {
        width: '9%',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    filterIcon: {
        width: '10%',
        justifyContent:'center',
        alignItems:'center',
    },
    input: {
        width: '81%',
        height: '100%',
        justifyContent: 'center',
    },
    leftIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    rightIconStyle: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        tintColor: colors.iconPrimary
    },
});
