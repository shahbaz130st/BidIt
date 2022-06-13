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
        paddingBottom: 10,
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
    mainRatingContainer: {
        marginTop: 15,
        marginBottom:10,
    },
    totalReviews: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        flexDirection: 'row',
        marginTop: 6

    },
    star: {
        height: 16,
        width: 16
    },
    ratingTitle: {
        fontSize: 13,
        fontFamily: Fonts.Medium,
        color: colors.textPrimary,
    },
    ratingText: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
        marginLeft: 5
    },

});
export default styles;