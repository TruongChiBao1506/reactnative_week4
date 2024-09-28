import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App2 = () => {
    return (
        <LinearGradient colors={colorList}
            style={styles.container} start={{ x: 1, y: 0.75 }} end={{ x: 1, y: 1 }}>
            <View style={{ flex: 1}}>
                <View style={styles.Login}>
                    <Text style={styles.titleLogin}>LOGIN</Text>
                </View>
                <View style={styles.Input}>
                    <View style={{flex:1, width:300, position:'relative'}}>
                        <TextInput placeholder='Name' placeholderTextColor='#000000' style={styles.inputText} />
                        <Image source={require('./image/avatar_user 1.png')} style={{ height: 32, width: 32, left: 10, top:8, position: 'absolute' }} />
                    </View>

                </View>
                <View style={styles.Input}>
                    <View style={{flex:1, width:300, position:'relative'}}> 
                        <TextInput placeholder='Password' placeholderTextColor='#000000' style={styles.inputText} />
                        <Image source={require('./image/Vector_White.png')} style={{ height: 35, width: 30, left: 10, top:5, position: 'absolute' }} />
                        <Image source={require('./image/Vector_Black.png')} style={{ height: 35, width: 30, left: 10, top:5,position: 'absolute' }} />
                        <Image source={require('./image/eye 2.png')} style={{height: 32, width: 32, right:15, top:5, position:'absolute'}} />
                    </View>

                </View>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btns}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18,color:'#FFFFFF' }}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Title}>
                    <Text style={{fontWeight:700, fontSize:20}}>Forgot your password?</Text>
                </View>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Login: {
        flex: 3,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'flex-start',
        left: 30,
    },
    titleLogin: {
        fontWeight: 700,
        fontSize: 30,
        left: 0,
    },
    Input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        width: 300,
        height: 45,
        backgroundColor: '#C4C4C44D',
        borderWidth: 1,
        borderColor: '#F2F2F2',
        paddingLeft: 50,
        fontSize: 18,
        fontWeight: 400,

    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        top: 30,
    },
    btns: {
        backgroundColor: '#060000',
        height: 48,
        width: 300,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title:{
        flex:3,
        top: 40, 
        alignItems:'center',
    }
});
const colorList = ['#FBCB00', '#BF9A00'];
export default App2;