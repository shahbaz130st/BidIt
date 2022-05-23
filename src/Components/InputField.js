import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
// ------------------------------------------
import colors from '../Assets/Colors/Index';
import Fonts from '../Assets/Fonts/Index';

const InputField = props => {
  const {
    leftIcon,
    rightIcon,
    placeholder,
    value,
    onChangeText,
    isRightIcon,
    multiLine,
    textAlignVertical,
    password,
    autoCapitalize,
    labelStyle,
    keyBoardType,
    returnKeyType,
    onSubmitEditing,
    fieldRef,
    maxLength,
    customStyle,
    rightIconOnPress
  } = props;

  return (
    <View style={[styles.mainContainer, customStyle,]}>

      {
        isRightIcon ?
          <>
            <View style={styles.icon}>
              <Image source={leftIcon} style={styles.leftIconStyle} />
            </View>

            <View style={[styles.input, { width: '70%'}]}>
              <TextInput
                style={{ fontSize: 14, fontFamily: Fonts.Light }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                placeholderTextColor={'gray'}
                autoCapitalize={autoCapitalize}
                keyboardType={keyBoardType}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                ref={fieldRef}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.passwordIcon}>
              <TouchableOpacity
                onPress={rightIconOnPress}
                activeOpacity={0.4}
              >
                <Image source={rightIcon} style={styles.rightIconStyle} />
              </TouchableOpacity>
            </View>
          </>
          :
          <>
            <View style={styles.icon}>
              <Image source={leftIcon} style={styles.leftIconStyle} />
            </View>

            <View style={styles.input}>
              <TextInput
                style={{ fontSize: 14, fontFamily: Fonts.Light }}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                placeholderTextColor={'gray'}
                autoCapitalize={autoCapitalize}
                keyboardType={keyBoardType}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                ref={fieldRef}
                blurOnSubmit={false}
              />
            </View>
          </>
      }
    </View>

  )
};

export default InputField;

const styles = StyleSheet.create({

  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.textInput,
    height: 52,
    width: '100%',
    borderRadius: 11,
  },
  icon: {
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordIcon: {
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: colors.textSecondary,
    width: '85%',
    height: '100%',
    justifyContent: 'center',
  },
  leftIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.icnoPrimary
  },
  rightIconStyle: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    tintColor: '#808080'
  },
});
