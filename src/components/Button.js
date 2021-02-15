import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

export default function Button(props) {
    return (
        <View style={styles.button}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View style={styles.child}>
                    <Text style={styles.text}>Get Started</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FFD200'
    },
    text: {
        fontSize: 16,
        color: '#484343',
        fontFamily: 'Poppins-Regular'
    },
    child: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
