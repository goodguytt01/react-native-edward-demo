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
import NavigationBar from 'react-native-navbar';
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
    AlertIOS
} = ReactNative;

var FirstPage = require('./FirstPage');
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
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    下一步
                </Text>
            </TouchableOpacity>
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

class NavigationBarSample extends React.Component {


    constructor(props, context){
        super(props, context);

        this.state = {
            name: global.name,
        };
    }


    renderScene(route, nav) {
        switch (route.id) {
            case 'FirstPage':
                return <FirstPage navigator={nav} />;
            case 'ListView':
                return <MateriaList navigator={nav} />;
            case 'jumping':
                return <JumpingNavSample navigator={nav} />;
        }
    }
    render() {
        var rightButtonConfig = {
            title: 'Next',
            handler: function onNext() {
                alert('hello!');
            }
        };

        var titleConfig = {
            title: 'Hello, world',
        };
        var statusBarConfig = {
            hidden: true,
            style: 'light-content',
        };
        return (
            <View style={{ flex: 1, }}>
                <NavigationBar style={styles.navBar}
                               title={titleConfig}
                               rightButton={rightButtonConfig}
                               statusBar={statusBarConfig}
                />
                <View style={{ flex: 1, marginTop:0}}>
                    <Navigator
                        debugOverlay={false}
                        initialRoute={newRandomRoute()}
                        renderScene={this.renderScene}

                    />
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
        backgroundColor: '#C0C0C0',
        flex:1
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
