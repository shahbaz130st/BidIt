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
        backgroundColor: colors.white
    },

    mainIcon: {
        height: 230,
        width: 230,
        alignSelf: 'center'
    },
    Title: {
        fontSize: 26,
        fontFamily: Fonts.Medium,
        color: colors.textPrimary,
        marginTop: 10
    },
    Desc: {
        fontSize: 17,
        fontFamily: Fonts.Medium,
        color: colors.textSecondary,
        marginTop: 3
    },
    label: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 45,
    },
    btnStyle: {
        backgroundColor: colors.nonActiveBtn,
        width: '47%',
    },
    label: {
        fontSize: 17,
        fontFamily: Fonts.Regular,
        color: colors.white
    }

});
export default styles;