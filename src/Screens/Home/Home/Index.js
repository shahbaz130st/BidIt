import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TextInput,
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




const Home = ({ navigation, route }) => {

    const [search, setSearch] = useState('')
    const [categories, setCategories] = useState()

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


    const renderItem = ({ item }) => {

        <View style={{width: 50, height: 50 }}>

        </View>
    }


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


                    <FlatList
                        data={cat}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        contentContainerStyle={{
                            height: 100,
                            width: '100%',
                            paddingHorizontal: 50,
                        }}
                    />
                </View>



            </LinearGradient>
            {/* </KeyboardAwareScrollView> */}

        </SafeAreaView >


    )
}


export default Home

