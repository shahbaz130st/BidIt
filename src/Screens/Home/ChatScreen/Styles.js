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
    header: {
        width: '100%',
        height: 60,
        paddingHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainContent: {
        flex: 1,
        paddingHorizontal: 22,
        paddingVertical: 17,
        paddingBottom: 95,
        backgroundColor: colors.white
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
        height: 45,
        paddingHorizontal: 15,
        width: '100%',
        borderRadius: 40,
        backgroundColor: '#EDEDED',
    },
    sendIcon: {
        height: 35,
        width: 35
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        height: 25,
        width: 25,
        tintColor: colors.white
    },
    profileImage: {
        height: 40,
        width: 40,
        marginLeft: 15
    },
    userName: {
        fontSize: 12,
        fontFamily: Fonts.Medium,
        color:colors.white,
        marginLeft:8
    },
    videoCall:{
        height:20,
        width:20,
        marginRight:10
    },
    voiceCall:{
        height:17,
        width:17
    }
});
export default styles;