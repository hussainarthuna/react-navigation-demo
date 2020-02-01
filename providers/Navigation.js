import React from "react";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import {createStackNavigator} from "react-navigation-stack";
import HomeDetailsPage from "../pages/HomeDetailsPage";
import SettingsDetailsPage from "../pages/SettingsDetailsPage";
import {Icon} from "native-base";
import {createDrawerNavigator} from "react-navigation-drawer";
import ProfilePage from "../pages/ProfilePage";
import {Dimensions} from "react-native";
import SideMenu from "../components/SideMenu";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


const navOptionsHandler = (navigation) => ({
    headerShown: false,
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => {
                return <Icon name='home' fontSize={25}/>
            }
        }
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => {
                return <Icon name='settings' fontSize={25}/>
            }
        }
    },
});

const MainStack = createStackNavigator({
    Tabs: {
        screen: TabNavigator,
        navigationOptions: navOptionsHandler
    },
    HomeDetails: {
        screen: HomeDetailsPage,
        navigationOptions: navOptionsHandler
    },
    SettingsDetails: {
        screen: SettingsDetailsPage,
        navigationOptions: navOptionsHandler
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: navOptionsHandler
    },
});

MainStack.navigationOptions = ({navigation}) => {
    let drawerLockMode = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode = 'locked-closed';
    }

    return {
        drawerLockMode,
    };
};

const drawerNavigator = createDrawerNavigator({
    drawer: MainStack
}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 3 / 4,
});

const authStack = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: navOptionsHandler
    },
    Register: {
        screen: RegisterPage,
        navigationOptions: navOptionsHandler
    },
});

const appNavigator = createSwitchNavigator({
    Auth: authStack,
    App: drawerNavigator
}, {
    initialRouteName: 'Auth'
});

export default createAppContainer(appNavigator);

