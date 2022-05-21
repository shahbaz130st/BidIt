import React from "react";
import { ActivityIndicator } from "react-native";


const Loader = (props) => {

    const { color, size } = props


    return (
        <ActivityIndicator
            size={size}
            color={color ? color : 'white'}
        />
    )
}


export default Loader;


