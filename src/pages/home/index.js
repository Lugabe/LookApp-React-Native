import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Box, Title, Text, Button, Spacer } from '../../components';
import {StatusBar} from "react-native"

const Home = ({navigation: {navigate}}) => {
  return (
    <>
    <StatusBar barStyle={'light-content'} />
      <Box justify="center" back hasPadding align="center" background="dark">
        <Box justify="center" align="center" fluid>
          <Title color="light" justify="center" align="center">
            LOOKAPP
          </Title>
          <Spacer />
          <Text align="center" spacing="0px 20px">
            Stay on top of the fashion world and buy your favorite looks.
          </Text>
        </Box>

        <Box justify="flex-end" align="center" fluid>
          <Button block onPress={() => navigate("SignIn")}>
            <Text color="light">SigIn my account</Text>
          </Button>
          <Spacer size="20px" />
          <Text color="light" underline onPress={() => navigate("SignUp")}>
            Create new account
          </Text>
        </Box>
        <Spacer size="40px" />
      </Box>
    </>
  );
};

export default Home;
