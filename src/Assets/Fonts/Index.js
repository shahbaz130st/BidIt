import { Platform } from "react-native";

const font_android = {
    Regular: 'Poppins-Regular',
    Medium: 'Poppins-Medium',
    Bold: 'Poppins-Bold',
    SemiBold: 'Poppins-SemiBold',
    Light: 'Poppins-Light',
    Rationale: 'Rationale-Regular'
}
const font_ios = {
    Regular: 'Poppins-Regular',
    Medium: 'Poppins-Medium',
    Bold: 'Poppins-Bold',
    SemiBold: 'Poppins-SemiBold',
    Light: 'Poppins-Light',
    Rationale: 'Rationale-Regular'

}
const Fonts = Platform.select({
    ios: font_ios,
    android: font_android
})
export default Fonts