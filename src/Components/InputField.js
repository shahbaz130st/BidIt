import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
// ------------------------------------------
import colors from '../Assets/Colors/Index';

const InputField = props => {
  const {
    label,
    leftIcon,
    iconStyle,
    placeholder,
    value,
    onChangeText,
    multiLine,
    textAlignVertical,
    password,
    editable,
    autoCapitalize,
    labelStyle,
    rightIcon,
    isLeftIcon,
    keyBoardType,
    rightIconOnPress,
    noIcon,
    returnKeyType,
    onSubmitEditing,
    fieldRef,
    maxLength
  } = props;
  return isLeftIcon ? (
    <View style={[styles.mainContainer]}>
      <Text style={[styles.label]}>{label}</Text>
      <View style={[styles.secondaryContainer, { paddingHorizontal: 15 }]}>
        <Image source={leftIcon} style={[iconStyle, { tintColor: colors.primary }]} />
        <TextInput
          style={{
            width: rightIcon ? '88%' : '100%',
            color: colors.black,
            // marginLeft:5
          }}
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

        {rightIcon && (
          <Pressable onPress={rightIconOnPress}>
            <Image source={rightIcon} style={[styles.rightStyle]} />
          </Pressable>
        )}
      </View>
    </View>
  ) :(
    <View style={[styles.mainContainer]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={[styles.secondaryContainer]}>
        <TextInput
          style={[
            {
              color: colors.black,
              width: rightIcon ? '90%' : '100%',
              paddingHorizontal: 15,
            },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={multiLine}
          textAlignVertical={textAlignVertical}
          secureTextEntry={password}
          placeholderTextColor={'gray'}
          editable={editable}
          autoCapitalize={autoCapitalize}
          keyboardType={keyBoardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={fieldRef}
          blurOnSubmit={false}
          maxLength={maxLength}
        />

        {rightIcon && (
          <Pressable onPress={rightIconOnPress}>
            <Image
              resizeMode="contain"
              source={rightIcon}
              style={[styles.rightStyle]}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    width: '100%',
    alignSelf:'center'
    // backgroundColor: colors.appBackground
  },
  label: {
    color: colors.white,
    // fontWeight: 'bold',
    marginLeft: 2,
  },
  secondaryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: colors.white,
    height: 50,
    width: '100%',
    borderRadius: 10,
    elevation: 3,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
  },
  inputStyle: {
    color: colors.black,
    // width: '95%',
    backgroundColor: 'red',
  },
  rightStyle: {
    width: 20,
    height: 20,
    tintColor: colors.gray,
  },
});
