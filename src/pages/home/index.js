import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Box, Title, Text, Button, Spacer } from '../../components';
import { StatusBar } from 'react-native';
import { AppContext } from '../../contexts/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(AppContext);

  const checkLogged = async () => {
    // AsyncStorage.clear()
    setLoading(true)

    const loggedUser = await AsyncStorage.getItem("@user")
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
      navigation.replace('Feed')
    }else 
      setLoading(false)

  };

  useEffect(() => {
    checkLogged();
  }, []);

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
          {loading && (
            <>
              <Spacer  size ="35px"/>
              <ActivityIndicator size={'large'} color={'#fff'} />
            </>
          )}
        </Box>

        {!loading && (
          <Box justify="flex-end" align="center" fluid>
            <Button block onPress={() => navigation.navigate('SignIn')}>
              <Text color="light">SigIn my account</Text>
            </Button>
            <Spacer size="20px" />
            <Text color="light" underline onPress={() => navigation.navigate('SignUp')}>
              Create new account
            </Text>
          </Box>
        )}
        <Spacer size="40px" />
      </Box>
    </>
  );
};

export default Home;
