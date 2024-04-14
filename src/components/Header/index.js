import React from 'react';
import { Box, Text, Title } from '../../components';
import { SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {colors} from "../../styles/theme.json"


const Header = ({ title }) => {
  return (
    <Box fluid height = "100px" justify = 'center' border = {`1px solid ${colors.muted}50`}>
      <SafeAreaView style= {{flexDirection: 'row',}}>

        <Box width="80px" justify = 'center' align = 'center'>
        <Icon name= 'menu' size = {20} />
        </Box>
        <Box align = 'center' justify= 'center'>
          <Title bold>{title}</Title>
        </Box>
        <Box width = "80px"></Box>

      </SafeAreaView>
    </Box>
  );
};

export default Header;
