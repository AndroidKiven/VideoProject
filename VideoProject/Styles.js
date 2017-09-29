/**
 * Created by hepengcheng on 2017/9/28.
 */
import {StyleSheet} from 'react-native';
var Dimensions = require("Dimensions");
var {width, height}=Dimensions.get('window');

let styles = {
    publicWidth: {
        width: width * 0.9,
        marginLeft: width * 0.05
    },
    img: {
        height: 120,
        width: 120
    },
    imgView: {
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 30
    },
    inputView: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    input: {
        flex: 1,
        fontSize: 15,
        paddingLeft: 13
    },
    inputImg: {
        width: 35,
        height: 35
    },
    textInputView: {
        backgroundColor: '#fff'
    },
    btnView: {
        height: 40,
        backgroundColor: '#0070cd',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#0565b5'
    },
    btnText: {
        color: '#fff',
        fontSize: 15
    },
    forgetView: {
        marginTop: 10
    },
    forgetText: {
        color: '#888'
    },
    loginIconImage: {
        height: 50,
        width: 50,
        marginRight: 8
    },
    otherView: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20
    },
    container: {
        flex: 1
    },
    otherText: {
        marginRight: 10
    }

};

export {styles as default};