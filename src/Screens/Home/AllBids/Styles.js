import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../Assets/Colors/Index";
import Fonts from "../../../Assets/Fonts/Index";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    gradientView: {
        flex: 1,
    },
    topView: {
        paddingHorizontal: 17
    },
    mainContent: {
        flex: 1,
        marginTop: '3%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 22,
        paddingVertical: 17,
        paddingBottom: 95,
        backgroundColor: colors.white
    },
    categoryItem: {
        height: 38,
        width: width / 3.48,
        borderRadius: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BidsList:
    {
        marginTop: 10,
        height: 45,
        alignSelf: 'center'
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
    },
    label: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
    }
});
export default styles;