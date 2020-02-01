import React from "react";
import {StyleSheet} from "react-native";
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';


const CustomHeader = props => {

    const {title, isHome} = props;

    return (
        <Header>
            <Left>
                {
                    isHome ?
                        <Button transparent onPress={()=>props.navigation.toggleDrawer()}>
                            <Icon name='menu'/>
                        </Button>
                        :
                        <Button transparent onPress={()=>props.navigation.goBack()}>
                            <Icon name='arrow-back'/>
                        </Button>
                }
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                {/*<Button transparent>*/}
                {/*    <Icon name='menu'/>*/}
                {/*</Button>*/}
            </Right>
        </Header>
    );
};

const styles = StyleSheet.create({});

export default CustomHeader;
