import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 141800;
    const total = price * quantity;
    const formatTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.Info_parent}>
                    <View style={styles.Info}>
                        <View style={styles.ProductImage}>
                            <Image source={require('./image/book.png')} style={{ width: 104, height: 127 }} />
                        </View>
                        <View>
                            <Text style={styles.InfoNameAndSupplier}>Nguyên hàm tích phân và ứng dụng</Text>
                            <Text style={styles.InfoNameAndSupplier}>Cung cấp bởi Tiki Trading</Text>
                            <Text style={styles.Price}>{formatPrice}</Text>
                            <Text style={styles.DropPrice}>{formatPrice}</Text>
                            <View style={styles.Info_2}>
                                <View style={styles.Quantity}>
                                    <TouchableOpacity style={styles.ButtonQuantity} onPress={()=>{
                                        if(quantity>1){
                                            setQuantity(quantity-1);
                                        }
                                            }}>
                                        <Text style={{ color: '#808080', marginBottom: 2, fontWeight: 700 }}>-</Text>
                                    </TouchableOpacity>
                                    <TextInput value={quantity} style={{ width: 35, height: 14, paddingLeft: 13, fontWeight: 700, fontSize: 15 }} />
                                    <TouchableOpacity style={styles.ButtonQuantity} onPress={()=>{
                                        setQuantity(quantity+1);
                                        }}>
                                        <Text style={{ color: '#011627', marginBottom: 2, fontWeight: 700 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity><Text style={styles.Link}>Mua sau</Text> </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Status}>
                        <Text style={{ color: '#011627', fontWeight: 700, fontSize: 12, marginLeft: 15 }}>Mã giảm giá đã lưu</Text>
                        <TouchableOpacity style={{ marginLeft: 30 }}>
                            <Text style={{ color: '#134FEC', fontWeight: 700, fontSize: 12 }}>Xem tại đây</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Discount}>
                        <View style={{ position: 'relative', marginLeft: 15 }}>
                            <TextInput placeholder='Mã giảm giá'
                                style={{
                                    color: '#011627', fontWeight: 700, fontSize: 18, paddingLeft: 48, borderColor: '#E539350', borderWidth: 1, borderRadius:2,
                                    width: 208, height: 45
                                }} />
                            <Image source={require('./image/yellow_block.png')} style={{ width: 32, height: 16, position: 'absolute', left: 10, top: 15 }} />
                        </View>
                        <TouchableOpacity style={styles.ButtonApDung}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 20 }}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Gift_Certificate}>
                    <Text style={{ color: '#011627', fontWeight: 700, fontSize: 12, marginLeft:10 }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.Link,{marginLeft:10}]}>Nhập tại đây?</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.TamTinh}>
                    <Text style = {{color:'#011627', fontWeight:700, fontSize:18, marginLeft: 15, marginTop:5}}>Tạm tính</Text>
                    <TextInput value={formatTotal} style = {[styles.Price,{width:110}]} editable = {false}/>
                </View>
                <View style = {styles.ThanhTien}>
                    <View style = {styles.TongTien}>
                        <Text style = {{color:'#808080', fontWeight:700, fontSize:18, marginLeft: 15}}>Thành tiền</Text>
                        <TextInput value={formatTotal} style = {[styles.Price,{width:110}]} editable = {false}/>
                    </View>
                    <TouchableOpacity style = {styles.ButtonDatHang}>
                        <Text style = {{color:'#FFFFFF', fontWeight:700, fontSize:20}}>TIẾN HÀNH ĐẶT HÀNG</Text>
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
        fontFamily: 'Roboto',
        backgroundColor: '#C4C4C4'
    },
    Info_parent: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 283,
        width: screenWidth,
        backgroundColor: '#FFFFFF'
    },
    Info: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        // height: 170,
        // width:screenWidth,
        // backgroundColor:'#FFFFFF'
    },
    ProductImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
        marginLeft: -10,
        marginRight: 30
    },
    InfoNameAndSupplier: {
        fontWeight: 700,
        fontSize: 12,
        marginVertical: 5
    },
    Price: {
        color: '#EE0D0D',
        fontWeight: 700,
        fontSize: 18,
        marginVertical: 5
    },
    DropPrice: {
        textDecorationLine: 'line-through',
        color: '#808080',
        fontSize: 12,
        fontWeight: 700,
        marginVertical: 5
    },
    Info_2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    Quantity: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    ButtonQuantity: {
        backgroundColor: '#C4C4C4',
        width: 14,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Link: {
        color: '#134FEC',
        fontWeight: 700,
        fontSize: 12
    },
    Status: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginLeft: 10,
        width: screenWidth,
        backgroundColor: '#FFFFFF',
        marginTop:15,
        marginBottom:20
    },
    Discount: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenWidth,
        backgroundColor: '#FFFFFF',
        marginTop:20,
        marginBottom:20
    },
    ButtonApDung: {
        backgroundColor: '#0A5EB7',
        width: 99,
        height: 45,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    Gift_Certificate: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        height:51,
        marginVertical:20
    },
    TamTinh:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        width:screenWidth,
        height:51,
        marginBottom:40
    },
    ThanhTien:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
        height:120,
        marginTop:80
    },
    TongTien:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:screenWidth,
        marginTop:10,
        marginBottom:5
    },
    ButtonDatHang:{
        backgroundColor:'#E53935',
        width:331,
        height:45,
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    }, PriceValue: {

    }
});
export default App;