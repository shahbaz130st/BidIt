import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../Assets/Colors/Index";
import Fonts from "../../../Assets/Fonts/Index";

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: 388
    },
    back: {
        height: 25,
        width: 25,
        tintColor: colors.white,
        position: 'absolute',
        top: 20,
        left: 15
    },

    jobDetailView: {
        height: height / 1.62,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 17,
        paddingVertical: 17,
        backgroundColor: colors.white
    },
    profileContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    profileImage: {
        height: 85,
        width: 85
    },
    name: {
        fontSize: 18,
        fontFamily: Fonts.Medium,
        color: '#383838',
    },
    price: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: colors.textPrimary,
        marginTop: 2
    },
    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
    locationView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
    locationIcon: {
        height: 15,
        width: 15
    },
    commonIconStyle: {
        height: 15,
        width: 15
    },
    star: {
        height: 16,
        width: 16
    },
    rating: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color: '#262626',
        marginLeft: 3,
    },
    location: {
        fontSize: 12,
        fontFamily: Fonts.Regular,
        color: '#3C3C3C',
        marginLeft: 10,
        marginTop: 3
    },
    deleteIcon: {
        height: 34,
        width: 34,
        borderRadius: 32,
        backgroundColor: '#F24238',
        justifyContent: 'center',
        alignItems: 'center'
    },
    editIcon: {
        height: 34,
        width: 34,
        borderRadius: 32,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 15,
        width: 15,
        tintColor: colors.white
    },
    detailsView: {
        width: '100%',
        paddingVertical: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: Fonts.Medium,
        color: colors.textPrimary
    },
    subTitle: {
        fontSize: 13,
        fontFamily: Fonts.Medium,
        color: '#3C3C3C',
        marginLeft: 10
    },
    requirements: {
        fontSize: 13,
        fontFamily: Fonts.Regular,
        color: '#3C3C3C',
    },
    btnContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        marginTop: 20
    },
    btnStyle: {
        backgroundColor: colors.nonActiveBtn,
        width: 147
    },
    btnLabel: {
        fontSize: 18,
        fontFamily: Fonts.Regular
    }

});
export default styles;