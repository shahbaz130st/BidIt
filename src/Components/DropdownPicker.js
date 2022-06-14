import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    StyleSheet
} from 'react-native'
import { Picker } from '@react-native-picker/picker';

// --------------------------------------------
import colors from '../Assets/Colors/Index'
import Strings from '../Assets/Strings/Index';
import Header from '../Components/Header';
import Images from '../Assets/Images/Index';


const DropdownPicker = (props) => {

    const { leftIcon, list, pickerStyle } = props

    const [value, setValue] = useState('')


    return (

        <View style={[styles.mainContainer, pickerStyle]}>

            <View style={{ width: '9%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={leftIcon} resizeMode='contain' style={styles.leftIconStyle} />
            </View>

            <Picker
                // prompt='llll'
                mode='dialog'
                dropdownIconColor={'#BFBFBF'}
                dropdownIconRippleColor={'transparent'}
                style={{
                    backgroundColor: colors.textInput,
                    height: 52,
                    width: '91%',
                    borderRadius: 11,
                }}
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) =>
                    setValue(itemValue)
                }>
                {
                    list.map((item) => {
                        return (
                            <Picker.Item label={item.label} value={item.value} />
                        )
                    })
                }
            </Picker>

        </View>



    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: colors.textInput,
        height: 52,
        width: '100%',
        borderRadius: 11,
        paddingHorizontal: 12,
        marginTop: 16,
        alignSelf:'center'
    },
    leftIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: colors.iconPrimary
    },

})

export default DropdownPicker;

