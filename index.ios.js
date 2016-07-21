/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
'use strict';


var React = require('react');
var ReactNative = require('react-native');
var global = require('./Global');
var {
    Navigator,
    ScrollView,
    Picker,
    StyleSheet,
    Text,
    View,
    TextInput,
    AppRegistry,
    TouchableHighlight,
    TouchableOpacity,
} = ReactNative;

var FirstPage = require('./FirstPage');
var SecondPage = require('./SecondPage');
var materia = require('./materia');
var MateriaList = require('./listView-demo');


class NavButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

var NavigationBarRouteMapper = {

    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }


        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    上传菜谱
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                onPress={() => {
            navigator.push({ id: 'SecondPage' });
          }}
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    下一步
                </Text>
            </TouchableOpacity>
        );
    },

    jump: function(route, navigator, index, navState) {
        return (
            console.info(global.name)
        );
    },



    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                上传菜谱
            </Text>
        );
    },

};

function newRandomRoute() {
    return {
        title: '#' + Math.ceil(Math.random() * 1000),
        id:'FirstPage'
    };
}


function ListView() {
    return {
        title: '#' + Math.ceil(Math.random() * 1000),
        id:'ListView'
    };
}
var NavigationBarSample = React.createClass({

    componentWillMount: function() {

    },

    componentWillUnmount: function() {
        this._listeners && this._listeners.forEach(listener => listener.remove());
    },


    getInitialState: function() {
        return {
            selected1: 'key0',
            selected2: 'key1',
            selected3: 'key2',
            color: 'red',
            mode: Picker.MODE_DIALOG,
        };
    },
    renderScene: function(route, nav) {
        switch (route.id) {
            case 'FirstPage':
                return <FirstPage navigator={nav} />;
            case 'SecondPage':
                return <SecondPage navigator={nav} />;
            case 'jumping':
                return <JumpingNavSample navigator={nav} />;
    

        }
    },
    render: function() {
        return (
            <Navigator style={styles.default}
                       debugOverlay={false}
                       initialRoute={newRandomRoute()}
                       renderScene={this.renderScene}
                       navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
            />
        );
    },

});

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
        marginTop:10,
        borderColor:'white',
        height:25,
        flex:1
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
        flexDirection: 'row',
        backgroundColor: '#C0C0C0'
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
});



AppRegistry.registerComponent('AwesomeProject', () => NavigationBarSample);
