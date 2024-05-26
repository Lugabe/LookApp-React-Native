import React, {useState, useEffect, useContext} from 'react';
import { StretchyScrollView } from 'react-native-stretchy';
import { Box, Button, Spacer, Text, Title, Touchable } from '../../components/index';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Picker from '../../components/Picker';
import Cart from '../Cart';

import util from '../../util';
import { colors } from '../../styles/theme.json';
import { AppContext } from '../../contexts/app';

const Product = ({navigation, route}) => {

  const {product} = route?.params;
  const {addToCart, cart} = useContext(AppContext)
  const [size , setSize ] = useState()
  useEffect(() =>{
    setSize (product?.size?.[0]?.value)
  },[product])

  console.log( route)
  return (
    <>
      <Header
        title= {product?.title}
        goBack
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => navigation.navigate("Cart")}>
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
              {product?.price}
            </Title>
          </Box>
        }
      >
        <Box hasPadding background="light">
          <Text color="black">{product?.type}</Text>
          <Spacer size="20px" />
          <Title color="black">{product?.title}</Title>
          <Spacer size="30px" />
          <Text color="dark" bold>
            {product?.description}
          </Text>
          <Spacer size="30px" />
          <Picker
            title="Size"
            options={product?.sizes}
            initialValue={product?.sizes?.[0]?.value}
            onChange= {value => setSize(value)}
          />
          <Spacer size="30px" />
          <Button 
            block
            onPress={() => {addToCart({...product, size});
             navigation.navigate("Cart")}}
            >
            <Text color="light">Add to Cart</Text>
          </Button>
        </Box>
      </StretchyScrollView>
    </>
  );
};

export default Product;
