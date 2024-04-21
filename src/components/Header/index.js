import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView, StatusBar,View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Box, Text, Title, Touchable } from '../../components';
import { colors } from '../../styles/theme.json';
import util from '../../util'

const Header = ({ title="Explore", right = null }) => {


  const navigation = useNavigation();


  return (
    <>
    <StatusBar barStyle={'dark-content'} />
    <View style={{
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderBottomColor: util.toAlpha(colors.muted, 60),
      backgroundColor: colors.light,
    }}>

      <SafeAreaView style={{ 
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-between', 
        alignItems: 'center' }}>
        <Touchable
          onPress={() => navigation.openDrawer()} 
          width="70px" 
          height= "80px"
          justify="center" 
          align="center"
          hasPadding
        >

          <Icon name="menu" size={20} />
        </Touchable>

        <Box align="center" 
        justify="center">
          <Title >{title}</Title>
        </Box>
        {right? right() : <Touchable hasPadding width="70px"></Touchable>}
      </SafeAreaView>
    </View>
    </>
  );
};

export default Header;
