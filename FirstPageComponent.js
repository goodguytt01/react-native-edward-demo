/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Picker from 'react-native-picker';
var config = require('./config');
var global = require('./Global');
var MateriaList = require('./listView-demo');
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
    ScrollView
} from 'react-native';


class FirstPageComponent extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            level: ['初级','中级', '高级'],
            levelSelectedValue : '初级',
            levelValue:'',
            timeValue:'',
        };
    }
    componentDidMount() {
    }
    addMateria(){
        this.props.navigator.push({ id: 'materia' });
    }

    _onPressHandle(){
        this.picker.toggle();
    }

    _onPressHandle(){
        this.setState({ level: ['初级','中级', '高级'],levelSelectedValue:'初级'});
        this.picker.toggle();
    }
    _onPressHandleTime(){
        this.setState({ level: ['10分钟左右','10-30分钟','30-60分钟','一个小时以上'],levelSelectedValue:'10分钟左右'});
        this.picker.toggle();
    }
    render() {
        return (
            <View style={styles.default}
            >
                <TextInput onChangeText={(thingDesc) => this.setState({'thingDesc':thingDesc},global.name=thingDesc)}
                           style={[styles.messageText]}
                           placeholder='菜谱名称'
                />
                    <TouchableOpacity  onPress={this._onPressHandle.bind(this)}>
                        <Text  style={[styles.input]} >难度</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.input]}
                        value={this.state.levelValue}
                    />

                    <TouchableOpacity  onPress={this._onPressHandleTime.bind(this)}>
                        <Text  style={[styles.input]} >时间</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.input]}
                        value={this.state.timeValue}
                    />
                <MateriaList style={styles.default}/>
                <TouchableOpacity  onPress={this.addMateria.bind(this)}>
                    <Text  style={[styles.input]} >+再加一种用料</Text>
                </TouchableOpacity>
                <View style={{height: 400}}>

                    <Picker
                        ref={picker => this.picker = picker}
                        style={{height: 500}}
                        showDuration={300}
                        pickerData={this.state.level}
                        selectedValue={this.state.levelSelectedValue}
                        onPickerDone={(pickedValue) => {
                        if(pickedValue[0].indexOf('级')!=-1){
                            this.setState({ levelValue: pickedValue[0] });
                        }else if(pickedValue[0].indexOf('分')!=-1){
                           this.setState({ timeValue: pickedValue[0] });
                        }
					}}
                    />
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    messageText: {
        fontSize: 17,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'white',
        width:width,
        height:20,
    },
    input: {
        fontSize: 17,
        backgroundColor:'white',
        borderWidth:1,
        marginTop:15,
        borderColor:'white',
        width:width,
        height:20,
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
    default: {
        flex:1,
        backgroundColor: '#C0C0C0',
        marginTop:80,
        flexDirection:'column'
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
    box: {
        flexDirection:'column',
        flex:1,
        width:width,
        height:20,
    },
});

module.exports = FirstPageComponent;
