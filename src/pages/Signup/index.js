import React, { Component,useState, useContext } from 'react';
import {StatusBar, ActivityIndicator} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import { AppContext } from '../../contexts/app';
import { Box, Text, Title, Spacer, Input, Button } from '../../components';

const SignUp = ({navigation: {navigate, replace}}) => {

  const {setUser: setUserContext} = useContext(AppContext)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const requestSignup = async () =>{
    try {
      setLoading(true)

      if(user.email?.length === 0 ||
         user.password?.length === 0 ||
         user.email?.length === 0 ) {
        alert("Fill all field")
        setLoading(false)
        return false
      }

      const {data: logguedUser} = await api.post("/users", user)

    
      await AsyncStorage.setItem("@user",JSON.stringify(logguedUser))

      if(!logguedUser){
        alert("Não foi possível criar o usuário.")
        setLoading(false)
      }

      setUserContext(logguedUser)
      replace("Feed")

    } catch (err) {
      alert(err.message)
    }
  }

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

      <Input 
        placeholder="Name" 
        editable={!loading}
        value={user.name} 
        onChangeText={name => 
          setUser({...user,name
      })}/>

      <Spacer size="20px" />

      <Input 
        placeholder="E-mail" 
        editable={!loading}
        value={user.email} 
        onChangeText={email =>
          setUser({...user, email: email?.toLowerCase()})}
      />

      <Spacer size="20px" />
      <Input 
        editable={!loading}
        placeholder="Password" 
        value={user.password} 
        onChangeText={password =>
          setUser({...user,password})} 
        secureTextEntry 
      />

      <Spacer size="40px" />

      {loading && <ActivityIndicator size= "big" />}
      {!loading  && ( 
      <> 
      <Button block onPress={() => requestSignup()}>
        <Text color = "light">Create new account</Text>
      </Button>
      <Spacer size="30px" />
      <Text underline onPress={() => navigate("SignIn")}>Back to signIn</Text>
      </>
      )}
    </Box>
    </>
  );
};

export default SignUp;
