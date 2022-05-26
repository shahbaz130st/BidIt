import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../Assets/Colors/Index";
import Fonts from "../../../Assets/Fonts/Index";

const { height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    gradientView: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        // flexDirection:'column-reverse'
    },
    topView: {
        paddingHorizontal: 17
    },
    mainContent: {
        flex: 1,
        marginTop: '6%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 22,
        paddingVertical: 17,
        backgroundColor: colors.white
    },
    greetings: {
        fontSize: 22,
        fontFamily: Fonts.Regular,
        color: colors.white
    },
    name: {
        fontSize: 22,
        fontFamily: Fonts.SemiBold,
        color: colors.white
    },
    notificationIcon: {
        height: 21,
        width: 21,
        position: 'absolute',
        right: 23,
        top: 23
    },
    catText: {
        fontSize: 18,
        fontFamily: Fonts.Medium,
        color: colors.black
    },
    viewAllText: {
        fontSize: 11,
        fontFamily: Fonts.Regular,
        color: '#676767',
        textDecorationLine: 'underline'
    },
    categoryView: {
        height: 70,
        backgroundColor: colors.textInput
    },
    categoryItem: {
        height: 36,
        width: 130
    }
});

export default styles;