import React from 'react';
import { StretchyScrollView } from 'react-native-stretchy';
import { Box, Button, Spacer, Text, Title, Touchable } from '../../components/index';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Picker from '../../components/Picker';
import Cart from '../Cart';

import util from '../../util';
import { colors } from '../../styles/theme.json';

const Product = ({navigation: {navigate}}) => {


  return (
    <>
      <Header
        title="Product"
        goBack
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('eeee')}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      ></Header>
      <StretchyScrollView
        image={{
          uri: 'https://newsus.cgtn.com/news/2023-03-08/Colombia-s-cocaine-hippos-to-be-sent-to-India-and-Mexico-1hZFPdpCVl6/img/24bad5cde8af48cd9aabe796f2825223/24bad5cde8af48cd9aabe796f2825223.jpeg',
        }}
        imageOverlay={<Box background={util.toAlpha(colors.dark, 40)}></Box>}
        foreground={
          <Box hasPadding justify="flex-end">
            <Title color="light" bold variant="big">
              R$954,00
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">Rock</Text>
          <Spacer size="20px" />
          <Title color="black">Rock bebendo água</Title>
          <Spacer size="30px" />
          <Text color="dark" bold>
            Rock é flagrado bebendo água no rio, e após ver nego preto em cima da arvore, ele saiu
            correndo com medo.
          </Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            onChange= {(value => alert(value))}
            initialValue="M"
            options={[
              { label: 'P', value: 'P' },
              { label: 'M', value: 'M' },
              { label: 'G', value: 'G' },
              { label: 'XG', value: 'XG' },
            ]}
          />
          <Spacer size="30px" />
          <Button 
            block
            onPress={() => navigate("Cart")}
            >
            <Text color="light">Add to Cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
};

export default Product;
