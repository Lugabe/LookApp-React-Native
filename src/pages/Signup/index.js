import React, { Component } from 'react';
import {StatusBar} from "react-native"
import { Box, Text, Title, Spacer, Input, Button } from '../../components';

const SignUp = ({navigation: {navigate}}) => {
  return (
    <>
    <StatusBar backgroundColor={"#FFF"} barStyle={"dark-content"}/>
    <Box background="light" align="center" fluid justify="center" hasPadding>
      <Title bold color="dark">
        Create new account.
      </Title>
      <Spacer />
      <Text>Enter your details below:</Text>
      <Spacer size="30px" />

      <Input placeholder="Name" />
      <Spacer size="20px" />
      <Input placeholder="E-mail" />
      <Spacer size="20px" />
      <Input placeholder="Password" secureTextEntry />
      <Spacer size="40px" />

      <Button block onPress={() => navigate("Feed")}>
        <Text color = "light">Create new account</Text>
      </Button>
      <Spacer size="30px" />
      <Text underline onPress={() => navigate("SignIn")}>Back to signIn</Text>
    </Box>
    </>
  );
};

export default SignUp;
