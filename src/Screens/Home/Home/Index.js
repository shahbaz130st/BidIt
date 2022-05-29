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
import Images from '../../../Assets/Images/Index'
import colors from '../../../Assets/Colors/Index'
import Strings from '../../../Assets/Strings/Index';
import SearchInput from '../../../Components/SearchInput'
import Category from '../../../Components/Category';
import FilterModal from '../../../Components/FilterModal';




const Home = ({ navigation, route }) => {

    const [search, setSearch] = useState('')
    const [categories, setCategories] = useState()
    const [filterModal, setFilterModal] = useState(false)
    const [tab, setTab] = useState(0)
    const categoryRef = useRef()

    const cat = [
        {
            id: '1',
            name: 'Plumber'
        },
        {
            id: '2',
            name: 'Construction'
        },
        {
            id: '3',
            name: 'Electrician'
        }

    ]

    const useKeyboardOpen = () => {
        const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
        useEffect(() => {
            const keyboardOpenListener = Keyboard.addListener("keyboardDidShow", () =>
                setIsKeyboardOpen(true)
            );
            const keyboardCloseListener = Keyboard.addListener("keyboardDidHide", () =>
                setIsKeyboardOpen(false)
            );

            return () => {
                if (keyboardOpenListener) keyboardOpenListener.remove();
                if (keyboardCloseListener) keyboardCloseListener.remove();
            };
        }, []);
        return isKeyboardOpen;
    };

    const keyboardVisible = useKeyboardOpen();



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
                return <Category />;
            case 1:
                return <Category />;
            case 2:
                return <Category />;
            default:
                break;
        }
    };


    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* <KeyboardAwareScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollView}> */}

            <LinearGradient
                colors={[colors.gradientTwo, colors.gradientOne]}
                start={{ x: 0, y: 0.6 }} end={{ x: 1, y: 0.6 }}
                style={styles.gradientView}>

                <Image source={Images.notification}
                    resizeMode='contain'
                    style={styles.notificationIcon} />

                <View style={styles.topView}>
                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <Text style={styles.greetings}>{'Hello, '}</Text>
                        <Text style={styles.name}>{'Robert Nicklas'}</Text>
                    </View>
                    <Text style={styles.name}>{'Search for contractors'}</Text>
                    <SearchInput
                        onChangeText={val => setSearch(val)}
                        value={search}
                        autoCapitalize={'none'}
                        leftIcon={Images.search}
                        rightIcon={Images.filter}
                        onRightIconPress={() => {

                            if (keyboardVisible) {
                                Keyboard.dismiss()
                                setTimeout(() => {
                                    setFilterModal(true)
                                }, 250);
                            } else {
                                setFilterModal(true)
                            }

                        }}
                        placeholder={"Search"}
                        returnKeyType={'done'}
                        keyBoardType={'default'}
                        onSubmitEditing={() => {
                            Keyboard.dismiss()
                        }}
                        customStyle={{ marginTop: 20 }}
                    />
                </View>

                <View style={styles.mainContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.catText}>{Strings.Categories}</Text>
                        <Text style={styles.viewAllText}>{Strings.ViewAll}</Text>
                    </View>

                    <View style={styles.catList}>
                        <FlatList
                            ref={categoryRef}
                            data={cat}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}
                            style={{ width: '100%', }}
                            contentContainerStyle={{
                            }}
                        />
                    </View>
                    <Text style={styles.date}>{'27 May 2022'}</Text>
                    <View style={{ width: '100%' }}>
                        {switchCategory()}
                    </View>
                </View>




            </LinearGradient>
            {/* </KeyboardAwareScrollView> */}
            {/* <FilterModal
                visible={filterModal}
                onRequestClose={() => setFilterModal(false)}
                selectedCategory={cat[tab]}
            /> */}

        </SafeAreaView >


    )
}


export default Home

