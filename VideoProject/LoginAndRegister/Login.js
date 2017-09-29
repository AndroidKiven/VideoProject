/**
 * Created by hepengcheng on 2017/9/28.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import styles from '../Styles'
export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*图标*/}
                <View style={styles.imgView}>
                    <Image source={require('../images/news_icon.png')}
                           style={styles.img}
                    ></Image>
                </View>

                {/*输入框*/}
                <View style={styles.textInputView}>
                    <View style={[styles.inputView, styles.publicWidth]}>
                        <Image source={require("../images/email.png")}
                               style={styles.inputImg}
                        />
                        <TextInput style={styles.input}
                                   placeholder={"手机号码"}
                        ></TextInput>
                    </View>
                    <View style={[styles.inputView, styles.publicWidth]}>
                        <Image source={require("../images/password.png")}
                               style={styles.inputImg}
                        />
                        <TextInput style={styles.input}
                                   placeholder={"密码"}
                                   secureTextEntry={true}
                                   underlineColorAndroid='transparent'
                        ></TextInput>
                    </View>
                </View>
                {/*登录按钮*/}
                <View style={styles.btnTopView}>
                    <View style={[styles.btnView, styles.publicWidth]}>
                        <Text style={styles.btnText}>{'登录'}</Text>
                    </View>
                </View>

                {/*忘记密码*/}
                <View style={[styles.forgetView, styles.publicWidth]}>
                    <Text style={styles.forgetText}>
                        {'忘记密码?'}
                    </Text>
                </View>
                {/*qq登录*/}
                <View style={[styles.otherView, styles.publicWidth]}>
                    <Text style={styles.otherText}>{'第三方登录:'}</Text>
                    <Image style={styles.loginIconImage} source={require("../images/qq.png")}></Image>
                    <Image style={[styles.loginIconImage, {width: 45, height: 45}]}
                           source={require("../images/wx.png")}></Image>
                </View>
            </View>
        );
    }
}

