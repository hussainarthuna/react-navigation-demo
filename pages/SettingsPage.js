import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "native-base";
import CustomHeader from "../components/CustomHeader";

const SettingsPage = props => {
    return (
        <View style={{flex: 1}}>
            <CustomHeader title='Settings' isHome={true} navigation={props.navigation}/>
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
                <Button light onPress={()=>props.navigation.navigate('SettingsDetails')}>
                    <Text>Go to Settings Details</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SettingsPage;
