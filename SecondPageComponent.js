/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var config = require('./config');
import Button from 'apsl-react-native-button'
var {height, width} = Dimensions.get('window');
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    navigator,
    ScrollView,
} from 'react-native';


class FirstPageComponent extends Component {
    gotoLink(){
        this.props.navigator.push({ id: 'ImagePicker' });
    }
    render() {
        return (
            <View>
            <View style={styles.warp}>
                <View style={styles.messageText} >
                    <Text>步骤一</Text>
                    </View>
            </View>
            <View style={styles.container} >
    <Button style={styles.button} textStyle={styles.textStyle}   onPress={this.gotoLink.bind(this)}>+添加步骤</Button>
        </View>
                </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        top: 620,
        position: 'absolute',
        width:width,
    },
    warp: {
        flex: 1,
        flexDirection: 'row',
        marginTop:80,
        flexWrap:'wrap',

    },
    messageText: {
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        width:80,
        height:80,
    },
    input: {
        fontSize: 17,
        backgroundColor:'white',
        borderWidth:1,
        marginTop:15,
        borderColor:'white',
        flex:1,
    },
    text: {
        fontSize: 17,
        backgroundColor:'white',
        borderWidth:1,
        marginTop:15,
        borderColor:'white',
        flex:1,
    },
    button: {
        borderColor:'#ff6600',
        backgroundColor: '#ff6600',
    },
    textStyle: {
        color: 'white'
    },
    navBar: {
        backgroundColor: 'white',
    },
    scroll: {
        backgroundColor: 'yellow',
        height:25,
        flex:1
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: '#373E4D',
        fontWeight: '500',
        marginVertical: 9,
    },
    default: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#C0C0C0',
        width:100
    },
    block: {
        backgroundColor:'yellow',
        width:50,
        flex:1,
        flexDirection: 'column',
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: '#5890FF',
    },
    scene: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EAEAEA',
    },
    picker: {
        width: 100,
    },
});

module.exports = FirstPageComponent;
