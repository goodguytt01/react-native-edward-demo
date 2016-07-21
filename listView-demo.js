import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    RefreshControl,
    Text,
    View,
    TextInput
} from 'react-native';

var config = require('./config');



var REQUEST_URL = config.baseUrl+'/Dish/Materias?sessionId=111&randomKey='+config.randomKey+"&secretKey="+config.secretKey;
console.info(REQUEST_URL);
class MateriaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            refreshing:false
        };
    }


t
    componentDidMount() {
        this.fetchData();
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.returnObject),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View style={styles.container}>
            <ListView
                refreshControl={<RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this.fetchData.bind(this))}
          />}
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
                </View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
                <View style={styles.default}>
    <Text  style={[styles.input]} >用料:</Text>
            <TextInput
        style={[styles.input]}
        value={movie.thingDesc}
    />
    <Text  style={[styles.input]} >用量:</Text>
            <TextInput
        style={[styles.input]}
        value={movie.dosage}
    />

    </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#C0C0C0',
        marginTop:10
    },
    rightContainer: {
        flex: 0,
    },
    rightContainerInsider: {
        flex:0
    },
    title: {
        fontSize: 20,
        marginRight:0
    },
    year: {
        flex:1,
        fontSize: 12,
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        backgroundColor: 'white',
    },
    default: {
        flexDirection: 'row',
        backgroundColor: '#C0C0C0'
    },
    input: {
        fontSize: 17,
        backgroundColor:'white',
        borderWidth:1,
        marginTop:15,
        borderColor:'white',
        flex:1,
    },
});

module.exports = MateriaList;
/**
 * Created by tiantian on 16/7/2.
 */
