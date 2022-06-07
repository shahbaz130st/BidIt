import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
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
import NotificationComponent from '../../../Components/NotificationComponent';

const notofications = [
    {
        id: '1',
        image: Images.dummyuser,
        title: 'New Job Proposal Received',
        desc: 'James sent you a job proposal, please have a look!',
        time: '3 sec ago'
    },
    {
        id: '2',
        image: Images.dummyuser,
        title: 'Job Alert',
        desc: 'Your job alert for xyz!',
        time: 'Yesterday'
    },
    {
        id: '3',
        image: Images.dummyuser,
        title: 'Lorem Ipsum',
        desc: 'Your job alert for abc!',
        time: '02/05/2022'
    }
]


const Notifications = ({ navigation, route }) => {


    const renderItem = ({ item }) => {
        return (
            <NotificationComponent Item={item} />
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    leftIcon={Images.arrow}
                    headerTitle={Strings.Notifications}
                    onLeftIconPress={() => navigation.goBack()}
                />

                <View style={styles.mainContent}>
                    <FlatList
                        data={notofications}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        style={{ width: '100%', }}
                        contentContainerStyle={{
                        }}
                    />
                </View>

            </LinearGradient>


        </SafeAreaView >


    )
}


export default Notifications;

