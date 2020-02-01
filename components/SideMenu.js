import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {List, ListItem} from "native-base";

const SideMenu = props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <List>
                    <ListItem onPress={() => props.navigation.navigate('Profile')}>
                        <Text>Profile</Text>
                    </ListItem>
                </List>
            </ScrollView>
            <List>
                <ListItem noBorder onPress={() => props.navigation.navigate('Auth')}>
                    <Text>Logout</Text>
                </ListItem>
            </List>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default SideMenu;
