import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Keyboard,
    FlatList
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SimpleToast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

// --------------------------------------------
import styles from './Styles'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import JobStatus from '../../../Components/JobStatus';
import Header from '../../../Components/Header';




const MyJobs = ({ navigation, route }) => {

    const [search, setSearch] = useState('')
    const [categories, setCategories] = useState()
    const [tab, setTab] = useState(0)
    const categoryRef = useRef()

    const jobStatus = [
        {
            id: '1',
            name: 'Active'
        },
        {
            id: '2',
            name: 'Completed'
        },
        {
            id: '3',
            name: 'Cancelled'
        }

    ]

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                    setTab(index)
                    categoryRef.current.scrollToIndex({ animated: true, index: index })
                }}>
                <LinearGradient
                    colors={tab === index ?
                        ['#B75DF6', colors.gradientOne]
                        :
                        [colors.nonActiveBtn, colors.nonActiveBtn]
                    }
                    start={{ x: 0, y: 0.8 }}
                    end={{ x: 0, y: 0 }}
                    useAngle={true}
                    angle={75}
                    angleCenter={{ x: 0.55, y: 0.7 }}
                    // locations={[0.5, 1]}
                    style={[styles.categoryItem, { marginLeft: index == 0 ? 0 : 8 }]}>
                    <Text style={[styles.categoryName, { color: tab != index ? colors.textSecondary : colors.white }]}>{item.name}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    const switchCategory = () => {
        switch (tab) {
            case 0:
                return <JobStatus
                    Tab={tab}
                    navigation={navigation}
                    listHeaderComponent={listHeader}
                />;
            case 1:
                return <JobStatus
                    Tab={tab}
                    navigation={navigation}
                    listHeaderComponent={listHeader}
                />;
            case 2:
                return <JobStatus
                    Tab={tab}
                    navigation={navigation}
                    listHeaderComponent={listHeader}
                />;
            default:
                break;
        }
    };

    const listHeader = () => {
        return (
            <Text style={styles.date}>{'27 May 2022'}</Text>
        )
    }


    return (
        <SafeAreaView style={styles.mainContainer}>
            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Header
                    rightIcon={true}
                    headerTitle={Strings.MyJobs} />

                <View style={styles.mainContent}>

                    <View style={styles.jobStatusList}>
                        <FlatList
                            ref={categoryRef}
                            data={jobStatus}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}
                            style={{ width: '100%', }}
                            contentContainerStyle={{
                            }}
                        />
                    </View>
                    <View style={{ width: '100%' }}>
                        {switchCategory()}
                    </View>
                </View>

            </LinearGradient>


        </SafeAreaView >


    )
}


export default MyJobs

