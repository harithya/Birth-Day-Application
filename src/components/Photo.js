import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Della from '../assets/images/photo.png'

export default function Photo() {
    return (
        <View style={styles.border}>
            <Image source={Della} style={styles.photo} />
        </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 20
    },

})
