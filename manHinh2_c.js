import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// expo install expo-linear-gradient
import * as Crypto from 'expo-crypto';
// expo install expo-crypto
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const colorList = ['#3B3B98', '#C4C4C400'];
const App = () => {
    const [passwordLength, setPasswordLength] = useState('');
    const [password, setPassword] = useState('');
    const generatePassword = async (length) => {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        let password = '';
        const randomBytes = await Crypto.getRandomBytesAsync(length);
        for (let i = 0; i < length; i++) {
            const randomIndex = randomBytes[i] % characters.length;
            password += characters[randomIndex];
        }
        console.log(password);
        setPassword(password);
    };
    const handleGeneratePassword = () => {
        const newPassword = generatePassword(passwordLength)
    };
    return (
        <LinearGradient colors={colorList}
            style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }}>
            <View style={styles.Background_in}>
                <View style={styles.Title}>
                    <Text style={{
                        width: 181, height: 64, fontSize: 25, color: '#FFFFFF', fontWeight: 700,
                        textAlign: 'center', marginBottom: 10
                    }}>PASSWORD GENERATOR</Text>
                    <TextInput style={styles.txtPassword} value={password} />
                </View>

                <View style={styles.Option}>
                    <View style={styles.ContentOption}>
                        <Text style={styles.Content}>Password length</Text>
                        <TextInput
                            style={{
                                backgroundColor: '#FFFFFF', width: 118, height: 33,
                                marginRight: 15, fontWeight: 700, fontSize: 18, textAlign: 'center'
                            }}
                            keyboardType='numberic'
                            onChangeText={(text) => setPasswordLength(parseInt(text))} />
                    </View >

                    <View style={styles.ContentOption}>
                        <Text style={styles.Content}>Include lower case letters</Text>
                        <Image source={require('./image/Group 9.png')} style={{ width: 25, height: 25, marginRight: 15 }} />
                    </View>

                    <View style={styles.ContentOption}>
                        <Text style={styles.Content}>Include upcase letters</Text>
                        <Image source={require('./image/Rectangle 21.png')} style={{ width: 25, height: 25, marginRight: 15 }} />
                    </View>

                    <View style={styles.ContentOption}>
                        <Text style={styles.Content}>Include number</Text>
                        <Image source={require('./image/Group 9.png')} style={{ width: 25, height: 25, marginRight: 15 }} />
                    </View>

                    <View style={styles.ContentOption}>
                        <Text style={styles.Content}>Include special symbol</Text>
                        <Image source={require('./image/Rectangle 21.png')} style={{ width: 25, height: 25, marginRight: 15 }} />
                    </View>
                    <TouchableOpacity style={styles.Button} onPress={handleGeneratePassword}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 18 }}>GENERATE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontWeight: 700
    },
    Background_in: {
        flex: 1,
        backgroundColor: '#23235B',
        borderRadius: 15,
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0,
        shadowRadius: 4,
        width: 332,
        margin: 15
    },
    Title: {
        flex: 1.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Password: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtPassword: {
        backgroundColor: '#151537',
        width: 297,
        height: 55,
        marginTop: 45,
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 700,
    },
    Option: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ContentOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 332,
        marginVertical: 15
    },
    Content: {
        fontWeight: 700,
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 12
    },
    Button: {
        backgroundColor: '#3B3B98',
        width: 269,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})
export default App;