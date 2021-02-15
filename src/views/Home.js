import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import Photo from '../components/Photo'
import Bg from '../assets/images/bg.png'
import Button from '../components/Button'
import Confetti from 'react-native-confetti'

export class Home extends Component {

    buttonHandle = () => {
        // PlaySound('effect')
        if (this._confettiView) {
            this._confettiView.startConfetti();
        }
        setTimeout(() => {
            // this.props.navigation.replace("Greeting")
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Confetti
                    ref={(node) => this._confettiView = node} />
                <StatusBar barStyle='light-content' backgroundColor='#24894A' />
                <View style={styles.flex}>
                    <Photo />
                    <Text style={styles.title}>Selamat Ulang Tahun{"\n"}Della Rianty</Text>
                    <Image source={Bg} style={styles.background} />
                </View>
                <View style={styles.flex}>
                    <View style={styles.footer}>
                        <Button onPress={() => this.buttonHandle()} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24894A',
        height: '100%',
        padding: 16,
    },
    flex: {
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins-Regular'
    },
    background: {
        marginTop: 20,
        height: 250,
        width: 300,
        marginBottom: 30,
        resizeMode: 'contain'
    },
    footer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
    },
})

export default Home
