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
    }
});
export default styles;