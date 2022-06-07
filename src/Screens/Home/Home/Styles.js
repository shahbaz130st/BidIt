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
        paddingBottom: 120,
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
    categoryTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryItem: {
        height: 38,
        width: 130,
        borderRadius: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },
    catList:
    {
        marginTop: 10,
        height: 45,
        // backgroundColor:'pink'
    },
    outerView: {
        height: 42,
        width: 145,
        backgroundColor: colors.white,
        borderRadius: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryName: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: colors.white

    },
    date: {
        fontSize: 13,
        fontFamily: Fonts.Medium,
        color: '#3C3C3C',
        marginTop: 14
    }
});
export default styles;