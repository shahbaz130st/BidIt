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
    mainContent: {
        flex: 1,
        marginTop: '3%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 17,
        paddingVertical: 17,
        paddingBottom: 50,
        backgroundColor: colors.white
    },
    userInfoContainer: {
        alignItems: 'center'
    },
    profileImage: {
        height: 85,
        width: 85
    },
    username: {
        fontSize: 16,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        marginTop: 6
    },
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 6

    },
    star: {
        height: 16,
        width: 16
    },
    rating: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        marginLeft: 5
    },
    reviews: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        marginLeft: 8
    },
    userDetails: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        marginTop: 25,
        paddingHorizontal: 12,
        paddingVertical:12
    },
    commonTextStyleOne: {
        fontSize: 13,
        fontFamily: Fonts.Medium,
        color: colors.textSecondary
    },
    commonTextStyleTwo: {
        fontSize: 13,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary
    },
    edit: {
        fontSize: 11,
        fontFamily: Fonts.Regular,
        color: colors.textPrimary,
        textDecorationLine: 'underline'
    }
});
export default styles;