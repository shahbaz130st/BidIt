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
    userInfoContainer: {
        height: 85,
        width: 95,
        marginTop: 30,
        alignSelf: 'center',
    },
    profileImage: {
        height: 85,
        width: 85,
        alignSelf: 'center'
    },
    edit: {
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: colors.iconPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 15

    },
    editIcon: {
        height: 8,
        width: 8,
        tintColor: colors.white,
    },
    btnStyle:{
        marginTop:48
    },
    label:{
        fontSize:17,
        fontFamily:Fonts.Regular,
        color:colors.white
    }

});
export default styles;