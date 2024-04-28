import { useState } from 'react';
import React from 'react';
import { Box, ScrollView, Spacer, Text, Title, Button } from '../../components';
import Header from '../../components/Header';
import Tables from '../../components/Tables';
import Product from '../../components/Product';
import { colors } from '../../styles/theme.json';
import util from '../../util';
import Payment from '../../components/Forms/payment'; 
const Cart = ({navigation: {navigate}}) => {
  const [tab, setTab] = useState('cart');

  return (
    <>
      <Header title="Cart" goBack />

      <Tables
        active={tab}
        onChange={(value) => setTab(value)}
        tabs={[
          { label: 'Cart', value: 'cart' },
          { label: 'Payment', value: 'payment' },
        ]}
      />
      <ScrollView hasPadding background="light">
        <Spacer size="20px" />
        <Title variant="small">Order number is 343532</Title>
        <Spacer size="20px" />

        {tab === 'cart' && (
          <>
            {Array.from(Array(3))?.map((item) => (
              <Product
                brand="Zara"
                title={'Wide jeans'}
                price="$435"
                cover="https://ecommercenapratica.com/wp-content/uploads/2020/12/mix-de-produtos-capa-1.png"
                selected
              />
            ))}
            <Spacer size="30px" />
            <Box row justify="space-between">
              <Text color="dark">Order: </Text>
              <Text color="dark">R$434,00</Text>
            </Box>

            <Spacer size="10px" />
            <Box row justify="space-between">
              <Text color="#00E655">Discount: </Text>
              <Text color={colors.primary}>R$-34,00</Text>
            </Box>

            <Spacer size="10px" />
            <Box row justify="space-between">
              <Text color="dark">Delivery: </Text>
              <Text color="dark">R$10,00</Text>
            </Box>

            <Spacer size="10px" />
            <Box row justify="space-between">
              <Text bold color="dark">
                Total order:{' '}
              </Text>
              <Text bold color="dark">
                R$1000
              </Text>
            </Box>

            <Spacer size="30px" />
            <Button block onPress={() => setTab('payment')}>
              <Text color="light">Place order</Text>
            </Button>
          </>
        )}

        {tab === 'payment' && (
          <>
            <Spacer size="20px" />
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: util.toAlpha(colors.muted, 50),
                paddingBottom: 10,
              }}
            >
              <Text bold color="dark">
                Shipping address
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Text color="dark">Rua: Piu da silva, 69. Brazil</Text>
            <Spacer size="30px" />
            <Box
              row
              width="100%"
              justify="space-between"
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: util.toAlpha(colors.muted, 50),
                paddingBottom: 10,
              }}
            >
              <Text bold color="dark">
                Delivery details
              </Text>
              <Text color="danger">Change</Text>
            </Box>
            <Text color="dark">Standard Delivery</Text>
            <Text color="dark">Saturday 27 - Tuesday 30</Text>
            <Text color="dark">Cost: $10</Text>

            <Spacer size="30px" />
            <Button block onPress={() => navigate("PaymentForm")}>
              <Text color="light">Confirmation</Text>
            </Button>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Cart;
