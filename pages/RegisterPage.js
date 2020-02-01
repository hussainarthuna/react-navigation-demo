import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from 'native-base';
import CustomHeader from "../components/CustomHeader";

const RegisterPage = props => {
    return (
        <View style={{flex: 1}}>
            <CustomHeader title='Register' isHome={false} navigation={props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button info onPress={()=>props.navigation.navigate('App')}>
                    <Text>Register</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default RegisterPage;
