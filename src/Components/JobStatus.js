import React, { useState, useRef, useEffect } from 'react'
import {
    FlatList
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------
import Images from '../Assets/Images/Index'
import JobStatusItem from './JobStatusItem';

const dummyData = [
    {
        id: '1',
        image: Images.userOne,
        name: 'Jhon Doe',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$500 - $1000'
    },
    {
        id: '2',
        image: Images.userTwo,
        name: 'Kevin Spacey',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$500 - $1000'
    },
    {
        id: '3',
        image: Images.userThree,
        name: 'Leonardo',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$500 - $1000'
    },
    {
        id: '4',
        image: Images.userFour,
        name: 'Christian Bale',
        rating: '4.3',
        location: 'Lahore, Punjab Pakistan',
        price: '$500 - $1000'
    },

]

const renderCategoryItem = ({ item, index }, Tab, navigation) => {
    return (
        Tab == '0' ?
            <JobStatusItem onPress={() => navigation.navigate('JobDetails', { ItemDetail: item })} Item={item} />
            :
            Tab == '1' ?
                <JobStatusItem
                    onPress={() => navigation.navigate('JobDetails', { ItemDetail: item })}
                    Item={({
                        ...item,
                        completed: true
                    })} />
                :
                <JobStatusItem
                    onPress={() => navigation.navigate('JobDetails', { ItemDetail: item })}
                    Item={({
                        ...item,
                        cancelled: true
                    })} />

    )
}




const JobStatus = (props) => {

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
        />

    )
}


export default JobStatus;

