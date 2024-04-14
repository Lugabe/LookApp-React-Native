import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Box, Title, Text, Button, Spacer } from '../../components';

const Home = () => {
  return (
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
        <Button block>
          <Text color="light">Sigin my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text color="light" underline onPress={() => alert('Create your account!')}>
          Create new account
        </Text>
      </Box>
      <Spacer size="40px" />
    </Box>
  );
};

export default Home;
