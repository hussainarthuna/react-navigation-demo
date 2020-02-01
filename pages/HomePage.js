import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from 'native-base';
import CustomHeader from "../components/CustomHeader";

const HomePage = props => {
    return (
        <View style={{flex: 1}}>
            <CustomHeader title='Home' isHome={true} navigation={props.navigation}/>
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
                <Button light onPress={()=>props.navigation.navigate('HomeDetails')}>
                    <Text>Go to Home Details</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomePage;
