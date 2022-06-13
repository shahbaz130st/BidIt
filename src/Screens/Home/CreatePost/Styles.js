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
        paddingVertical: 15,
        backgroundColor: colors.white
    },
    addImage: {
        height: 130,
        width: 130,
        borderRadius: 8,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 9,
        paddingVertical: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        marginTop: 43
    },
    Title: {
        fontSize: 18,
        fontFamily: Fonts.Medium,
        color: colors.textSecondary,
    },
    addIcon: {
        height: 55,
        width: 55
    },
    commonText: {
        fontSize: 9,
        fontFamily: Fonts.Regular,
        color: colors.textSecondary,
    },
    label: {
        fontSize: 18,
        fontFamily: Fonts.Regular,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 32,
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