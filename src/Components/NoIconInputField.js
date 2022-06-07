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

const NoIconInputField = props => {
  const {
    placeholder,
    value,
    onChangeText,
    password,
    autoCapitalize,
    keyBoardType,
    returnKeyType,
    onSubmitEditing,
    fieldRef,
    customStyle,
    label
  } = props;

  return (
    <View style={[styles.mainContainer, customStyle,]}>

      <View>
        <Text style={styles.labelStyle}>{label}</Text>
      </View>

      <View style={[styles.input]}>
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



    </View>


  )
};

export default NoIconInputField;

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: colors.textInput,
    height: 62,
    justifyContent: 'center',
    width: '100%',
    borderRadius: 11,
    paddingHorizontal: 8,
    paddingVertical: 20
  },
  input: {
    color: colors.textSecondary,
    height: 38,
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 13,
    fontFamily: Fonts.Regular,
    color: colors.textPrimary,
    marginTop:5,
    marginLeft:2
  }
});
