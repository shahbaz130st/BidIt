import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
    ImageBackground
} from 'react-native'

// --------------------------------------------
import styles from './Styles'
import Images from '../../Assets/Images/Index'
import Strings from '../../Assets/Strings/Index'
import AppButton from '../../Components/AppBtn'


const OnBoarding = ({ navigation }) => {

    const [userType, setUserType] = useState(0)

    return (
        <View style={styles.mainContainer}>
            <Image
                source={Images.RightEllipse}
                style={styles.rightEclipse}
            />

            {/* <Text style={styles.projectName}>{Strings.Project}</Text> */}
            <Image
                source={Images.name}
                style={styles.name}
            />
            <Text style={styles.DummyText}>{Strings.Dummy_One}</Text>


            <Image
                source={Images.OnBoarding}
                style={styles.onBoarding}
            />
            <View style={styles.type}>
                <Pressable
                    onPress={() => setUserType(1)}
                    style={styles.userTypeBox}>
                    {
                        userType == 1 &&
                        <View style={styles.checked}>
                            <Image
                                source={Images.tick}
                                style={styles.tick}
                            />
                        </View>
                    }
                    <Image
                        source={Images.Client}
                        style={styles.user}
                    />
                    <Text style={styles.login}>{Strings.Login_Type_One}</Text>
                </Pressable>
                <Pressable
                    onPress={() => setUserType(2)}
                    style={styles.userTypeBox}>
                    {
                        userType == 2 &&
                        <View style={styles.checked}>
                            <Image
                                source={Images.tick}
                                style={styles.tick}
                            />
                        </View>
                    }
                    <Image
                        source={Images.Contractor}
                        style={styles.user}
                    />
                    <Text style={styles.login}>{Strings.Login_Type_Two}</Text>
                </Pressable>

            </View>

            <AppButton
                label={"CANCEL"}
                labelStyle={styles.label}
                style={styles.Btn}
            />

            {/* </ImageBackground> */}


        </View>
    )
}

export default OnBoarding;
