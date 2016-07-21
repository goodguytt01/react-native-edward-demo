/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'apsl-react-native-button'
var config = require('./config');

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
    AlertIOS
} from 'react-native';


class MateriaAdd extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            thingDesc: '',
            dosage:''
        };
    }
    addMateria() {
        fetch(config.baseUrl+'/Dish/Materia', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                randomKey: config.randomKey,
                secretKey: config.secretKey,
                sessionId:'111',
                dosage:this.state.dosage,
                thingDesc:this.state.thingDesc
            })
        }).then((response) => response.text())
            .then((responseText) => {
                this.props.navigator.push({ id: 'firstPage' });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        return (
                <View style={styles.wrap}>
                <View style={styles.default}>
                    <TextInput onChangeText={(thingDesc) => this.setState({'thingDesc':thingDesc})}
                        style={[styles.input]}
                        placeholder='用料:例如芝士'
                        ref= "thingDesc"
                    />

                    <TextInput onChangeText={(dosage) => this.setState({'dosage':dosage})}
                        style={[styles.input]}
                        placeholder='用量:例如250g'
                    />

                </View>
                    <View style={styles.corton}>
                        <Button style={{borderColor:'#CDCDCD',backgroundColor: '#CDCDCD',width:80,height:20}} textStyle={{fontSize: 12}}      onPress={this.addMateria.bind(this)}>
                            确定
                        </Button>
                    </View>
                </View>
        );
    }
}

var styles = StyleSheet.create({
    messageText: {
        fontSize: 17,
        marginTop: 80,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'white',
        height:25,
        flex:1
    },
    input: {
        fontSize: 17,
        backgroundColor:'white',
        borderWidth:1,
        marginTop:15,
        borderColor:'white',
        flex:1,
        height:25
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
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CDCDCD',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500',
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
    wrap: {
        flexDirection: 'column',
        backgroundColor: '#C0C0C0',
        marginTop:40
    },
    default: {
        flexDirection: 'row',
        backgroundColor: '#C0C0C0',
        marginTop:20
    },
    corton: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#C0C0C0',
        justifyContent:'flex-end',
        marginTop:10
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

module.exports = MateriaAdd;
