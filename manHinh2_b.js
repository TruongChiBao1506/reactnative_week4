import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.infoProduct}>
                    <Image style={{ width: 70, height: 70, top: 20 }} source={require('./image/usb.png')} />
                    <Text style={{ width: 275, height: 21, left: 10, fontWeight: 700, fontSize: 16 }}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
                </View>
                <View style={styles.danhgia}>
                    <Text style={{ fontWeight: 700, fontSize: 16 }}>Cực kỳ hài lòng</Text>
                    <View style={{ top: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./image/Star.png')} style = {{marginHorizontal:8}}/>
                        <Image source={require('./image/Star.png')} style = {{marginHorizontal:8}}/>
                        <Image source={require('./image/Star.png')} style = {{marginHorizontal:8}}/>
                        <Image source={require('./image/Star.png')} style = {{marginHorizontal:8}}/>
                        <Image source={require('./image/Star.png')} style = {{marginHorizontal:8}}/>
                    </View>
                </View>
                <View style={styles.hinhAnh}>
                    <View style={styles.borderHinhAnh}>
                        <Image source={require('./image/camera.png')} />
                        <Text style={{ fontWeight: 700, fontSize: 18, left: 15 }}>Thêm hình ảnh</Text>
                    </View>
                </View>
                <View style={styles.shareProduct}>
                    <View style={styles.sharedContent}>
                        <Text style={{ color: '#C4C4C4', fontWeight: 700, fontSize: 18, left: 15, right: 15, top: 15 }}>Hãy chi sẻ những điều mà bạn thích về sản phẩm</Text>
                        <Text style={{ position: 'absolute', top: 195, right: 20, fontWeight: 700, fontSize: 12 }}>https://meet.google.com/nsj-ojwi-xpp</Text>
                    </View>

                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btnGui}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 20 }}>Gửi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto'
    },
    infoProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    danhgia: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hinhAnh: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderHinhAnh: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#1511EB',
        borderWidth: 1,
        borderRadius: 5,
        width: 293,
        height: 68
    },
    shareProduct: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sharedContent: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        width: 293,
        height: 222,
        borderRadius: 5,
        position:'relative'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnGui: {
        backgroundColor: '#0D5DB6',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1511EB',
        borderRadius: 5,
        width: 291,
        height: 41
    }

});
export default App;