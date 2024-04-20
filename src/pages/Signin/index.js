import React, { Component } from 'react';
import {StatusBar} from "react-native"
import { Box, Text, Title, Spacer, Input, Button } from '../../components';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const SignIn = ({navigation: {navigate}}) => {
  return (
    <>
    <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
    <Box background="light" align="center" fluid justify="center" hasPadding>
      <Icon name ="star" size = {50} color= "#000"/>
      <Title bold color="dark" variant = "big">
        LOOKAPP
      </Title>
      <Spacer size="50px" />
      <Title bold>SignIn my account.</Title>
      <Spacer size="30px" />

      <Input placeholder="E-mail" />
      <Spacer size="20px" />
      <Input placeholder="Password" secureTextEntry />
      <Spacer size="40px" />

      <Button block onPress={() => navigate('Feed')}>
        <Text color="light">SignIn into my account</Text>
      </Button>
      <Spacer size="30px" />
      <Text
        underline
        onPress={() =>navigate('SignUp')
        }
      >Create new account</Text>
    </Box>
    </>
  );
};

export default SignIn;
