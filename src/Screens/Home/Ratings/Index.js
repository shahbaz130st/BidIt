import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    FlatList,
    ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------
import styles from './Styles'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import Header from '../../../Components/Header';
import Images from '../../../Assets/Images/Index';
import RatingItem from '../../../Components/RatingItem';

const reviews = [
    {
        id: '1',
        name: 'Williams Brown',
        rating: '4.9',
        text: 'Hi there, I really enjoyed working with you. See you again',
        image: Images.dummyuser
    },
    {
        id: '2',
        name: 'Williams Brown',
        rating: '4.9',
        text: 'Hi there, I really enjoyed working with you. See you again',
        image: Images.dummyuser
    },
    {
        id: '3',
        name: 'Williams Brown',
        rating: '4.9',
        text: 'Hi there, I really enjoyed working with you. See you again',
        image: Images.dummyuser
    },
    {
        id: '4',
        name: 'Williams Brown',
        rating: '4.9',
        text: 'Hi there, I really enjoyed working with you. See you again',
        image: Images.dummyuser
    },
    {
        id: '5',
        name: 'Williams Brown',
        rating: '4.9',
        text: 'Hi there, I really enjoyed working with you. See you again',
        image: Images.dummyuser
    },

]

const renderReviews = ({ item, index }) => {
    return (
        <RatingItem Item={item} Index={index} />
    )
}
const listHeader = () => {
    return (
        <Text style={[styles.ratingTitle,{marginTop:10}]}>{Strings.Reviews}</Text>
    )
}


const Ratings = ({ navigation, route }) => {

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    leftIcon={Images.arrow}
                    onLeftIconPress={() => navigation.goBack()}
                    headerTitle={Strings.Rating} />

                <View style={styles.mainContent}>
                    <View style={styles.userInfoContainer}>
                        <Image source={Images.userThree} style={styles.profileImage} resizeMode='contain' />
                        <Text style={styles.username}>{'Jimmy Anderson'}</Text>
                    </View>

                    {/* -----------------------------Reviews-------------------------- */}
                    <View style={styles.mainRatingContainer}>
                        <Text style={styles.ratingTitle}>{Strings.Rating}</Text>
                        <View style={styles.totalReviews}>
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Image source={Images.Star} style={styles.star} resizeMode='contain' />
                            <Text style={styles.ratingText}>{'4.9 of 5'}</Text>
                            <Text style={styles.ratingText}>{'(3537)'}</Text>
                        </View>
                    </View>

                    <FlatList
                        data={reviews}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderReviews}
                        style={{ width: '100%' }}
                        ListHeaderComponent={listHeader}
                        contentContainerStyle={{
                        }}
                    />

                </View>

            </LinearGradient>


        </SafeAreaView >


    )
}


export default Ratings;

