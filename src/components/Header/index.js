import React from 'react';
import { Box, Text, Title, Touchable } from '../../components';
import { SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles/theme.json';


const Header = ({ title }) => {
  return (
    <>
    <StatusBar barStyle={'dark-content'} />
    <Box fluid height="100px" 
    justify="center" 
    border={`1px solid ${colors.muted}50`}>

      <SafeAreaView style={{ flexDirection: 'row' }}>
        <Touchable
         onPress={() => alert('Sarinha é Busticuda mas eu amo')} 
         width="80px" 
         justify="center" 
         align="center">

          <Icon name="menu" size={20} />
        </Touchable>

        <Box align="center" 
        justify="center">
          <Title >{title}</Title>
        </Box>
        <Touchable width="80px"></Touchable>
      </SafeAreaView>
    </Box>
    </>
  );
};

export default Header;
