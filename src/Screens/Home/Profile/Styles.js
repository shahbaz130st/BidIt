import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../Assets/Colors/Index";
import Fonts from "../../../Assets/Fonts/Index";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    innerContainer: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 17,
        paddingBottom:40
    },
    gradientView: {
        flex: 1,
    },
    commonTextStyleOne: {
        fontSize: 14,
        fontFamily: Fonts.Medium,
        color: '#3B414B'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileItemContainer: {
        width: '47%',
        height: 140,
        backgroundColor: colors.textInput,
        borderRadius: 6
    },
    iconContainer: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: colors.iconPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 16,
        width: 16,
        tintColor: colors.white
    }
});
export default styles;