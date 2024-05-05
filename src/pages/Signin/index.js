import React, { Component, useContext, useState } from 'react';
import { StatusBar } from 'react-native';
import api from '../../services/api';
import { Box, Text, Title, Spacer, Input, Button } from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from "../../contexts/app"

const SignIn = ({ navigation: { replace } }) => {
  const {setUser: setUserContext} = useContext(AppContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const requestLogin = async () => {
    try {

      if(user.email?.length === 0 || user.password?.length === 0){
        alert("Fill all field")
        return false
      }

      const { data: users } = await api.get('/users', 
      {
        params: { 
          email: user.email.toLocaleLowerCase(),
          password: user.password 
        },
      });

      const [loggedUser] = users

      if(!loggedUser){
        alert("User not found")
        return false
      }

      // STORE IN DIVICE
      await AsyncStorage.setItem("@user",JSON.stringify(loggedUser))

      // PÚT USER IN CONTEXT
      setUserContext(loggedUser)

      //  GO TO FEED
      replace("Feed")

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Box background="light" align="center" fluid justify="center" hasPadding>
        <Icon name="star" size={50} color="#000" />
        <Title bold color="dark" variant="big">
          LOOKAPP
        </Title>
        <Spacer size="50px" />
        <Title bold>SignIn my account.</Title>
        <Spacer size="30px" />

        <Input
          placeholder="E-mail"
          value={user.email}
          onChangeText={(email) =>
            setUser({
              ...user,
              email,
            })
          }
        />
        <Spacer size="20px" />
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => {
            setUser({
              ...user,
              password,
            });
          }}
        />
        <Spacer size="40px" />

        <Button block onPress={() => requestLogin()}>
          <Text color="light">SignIn into my account</Text>
        </Button>
        <Spacer size="30px" />
        <Text underline onPress={() => navigate('SignUp')}>
          Create new account
        </Text>
      </Box>
    </>
  );
};

export default SignIn;
