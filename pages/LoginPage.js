import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from 'native-base';
import CustomHeader from "../components/CustomHeader";

const LoginPage = props => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button info style={{marginTop:10}} onPress={()=>props.navigation.navigate('App')}>
                    <Text>LOGIN</Text>
                </Button>
                <Button info style={{marginTop:10}} onPress={()=>props.navigation.navigate('Register')}>
                    <Text>Register</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default LoginPage;
