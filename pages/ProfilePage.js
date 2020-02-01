import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from 'native-base';
import CustomHeader from "../components/CustomHeader";

const ProfilePage = props => {
    return (
        <View style={{flex: 1}}>
            <CustomHeader title='Profile' isHome={false} navigation={props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>ProfilePage!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProfilePage;
