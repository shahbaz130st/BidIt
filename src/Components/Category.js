import React, { useState, useRef, useEffect } from 'react'
import {
    FlatList
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------
import Images from '../Assets/Images/Index'
import CategoryItem from './CategoryItem';
import colors from '../Assets/Colors/Index'
import Strings from '../Assets/Strings/Index';

const dummyData = [
    {
        id: '1',
        image: Images.userOne,
        name: 'Jhon Doe',
        rating: '4.3',
        location: 'Lahore,Punjab Pakistan'
    },
    {
        id: '2',
        image: Images.userTwo,
        name: 'Kevin Spacey',
        rating: '4.3',
        location: 'Lahore,Punjab Pakistan'
    },
    {
        id: '3',
        image: Images.userThree,
        name: 'Leonardo',
        rating: '4.3',
        location: 'Lahore,Punjab Pakistan'
    },
    {
        id: '4',
        image: Images.userFour,
        name: 'Christian Bale',
        rating: '4.3',
        location: 'Lahore,Punjab Pakistan'
    }
]

const renderCategoryItem = ({ item }) => {
    return (
        <CategoryItem Item={item} />
    )
}




const Category = (props) => {

    return (
        <FlatList
            data={dummyData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategoryItem}
            style={{ width: '100%', }}
        />

    )
}


export default Category;

