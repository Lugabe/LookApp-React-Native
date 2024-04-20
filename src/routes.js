import React from 'react';
import { Box, Text, Title } from './components';
import {colors} from '../src/styles/theme.json'
import util from '../src/util'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from '../src/pages/home'
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
import Feed from './pages/Feed';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerComponent = (props) =>{
    return(
        <DrawerContentScrollView {...props}>
            <Title 
                bold 
                color="light" 
                variant="big" 
                hasPadding>
                LOOKAPP
            </Title>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )

}

const DrawerComponent = () =>{
  return(
  <Drawer.Navigator 
    initialRouteName='Feed'
    drawerContent={ props =>
        <CustomDrawerComponent {...props} />}
    screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: util.toAlpha(colors.light, 75),
        drawerInactiveTintColor: util.toAlpha(colors.muted, 75),
        drawerStyle:{
            backgroundColor: colors.black
        }

    }}>
    <Drawer.Screen 
        name= "Feed"
        component={Feed}
        options={{
            drawerIcon: ({color}) =>
                (
                    <Icon name="people" color={color}/>
                )
    }}/>

    <Drawer.Screen 
        name= "Marketing" 
        component={Feed}
        options={{
            drawerIcon: ({color}) =>
                (
                    <Icon name="tag" color={color}/>
                )
    }}/>
  </Drawer.Navigator>
        )
}


const Routes = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen options={{
                    headerShown: false
                }} name='Home' component={Home}/>

                <Stack.Screen options={{
                    headerShown: false
                }} name='SignUp' component={SignUp}/>

                <Stack.Screen options={{
                    headerShown: false
                }} name='SignIn' component={SignIn}/>

                <Stack.Screen options={{
                    headerShown: false
                }} name='Feed' component={DrawerComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
};

export default Routes;
