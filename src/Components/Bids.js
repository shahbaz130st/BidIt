import React, { useState, useRef, useEffect } from 'react'
import {
    FlatList,
    StyleSheet
} from 'react-native'

// --------------------------------------------
import Images from '../Assets/Images/Index'
import colors from '../Assets/Colors/Index';
import Fonts from '../Assets/Fonts/Index';
import BidsItem from './BidsItem';
import AppButton from './AppBtn';
import Strings from '../Assets/Strings/Index';

const dummyData = [
    {
        id: '1',
        image: Images.userOne,
        name: 'Jhon Doe',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$500'
    },
    {
        id: '2',
        image: Images.userTwo,
        name: 'Kevin Spacey',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$1000'
    },
    {
        id: '3',
        image: Images.userThree,
        name: 'Leonardo',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$1000'
    },
    {
        id: '4',
        image: Images.userFour,
        name: 'Christian Bale',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$1200'
    },
]

const renderCategoryItem = ({ item, index }, Tab, navigation) => {
    return (
        Tab == '0' ?
            <BidsItem
                Item={item}
                Tab={Tab}
                navigation={navigation}
            />
            :
            Tab == '1' ?
                <BidsItem
                    Item={({
                        ...item,
                        accepted: true
                    })}
                    navigation={navigation}
                />
                :
                <BidsItem
                    Item={({
                        ...item,
                        rejected: true
                    })}
                    navigation={navigation}
                />

    )
}




const Bids = (props) => {

    const { listHeaderComponent, Tab, navigation } = props


    return (
        <FlatList
            data={dummyData}
            ListHeaderComponent={listHeaderComponent}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => renderCategoryItem(item, Tab, navigation)}
            style={{ width: '100%', }}
            ListFooterComponent={() => {
                return (
                    <AppButton
                        gradient={true}
                        label={Strings.Close}
                        labelStyle={[styles.label]}
                        style={styles.btnStyle}
                        onPress={() => navigation.goBack()}
                    />

                )
            }}
        />

    )
}

const styles = StyleSheet.create({
    btnStyle: {
        marginTop: 35
    },
    label: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
    }
})


export default Bids;

