import { StyleSheet } from 'react-native'
import Fonts from '../../Assets/Fonts/Index';
import colors from '../../Assets/Colors/Index';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 17
    },
    innerContent: {
        // alignSelf: 'center',
        // alignItems:'center'
    },
    logo: {
        height: 155,
        width: 155,
        resizeMode: 'contain'
    },
    name: {
        height: 105,
        width: 105,
        resizeMode: 'contain'
    },
    rightEclipse: {
        height: 320,
        width: 320,
        position: 'absolute',
        top: -25,
        alignSelf: 'flex-end',
        resizeMode: 'contain'
    },
    onBoarding: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginTop: 45
    },
    checked: {
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: colors.green,
        position: 'absolute',
        top: 12,
        right:12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-end'
    },
    tick: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        tintColor: colors.white
    },

    projectName: {
        fontSize: 48,
        fontFamily: Fonts.Regular,
        color: colors.textPrimary,
    },
    DummyText: {
        fontSize: 13,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        // marginTop: 3
    },
    type: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userTypeBox: {
        height: 180,
        width: '46%',
        borderRadius: 12,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    user: {
        height: 115,
        width: 115,
        resizeMode: 'contain'
    },
    login: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        marginTop: 15
    },
    Btn: {
        marginTop: 50
    },
    label: {
        fontSize: 15,
        fontFamily: Fonts.Regular,
        color: colors.white
    }

})


export default styles;