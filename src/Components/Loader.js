import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";


const Loader = (props) => {

    const { color, size } = props


    return (
        <Modal
            animationType='fade'
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                <ActivityIndicator
                    size={size}
                    color={color ? color : 'white'}
                />
            </View>
        </Modal>
    )
}


export default Loader;


