import { useState, useContext } from 'react';
import React from 'react';
import { Box, ScrollView, Spacer, Text, Title, Button } from '../../components';
import Header from '../../components/Header';
import Tables from '../../components/Tables';
import Product from '../../components/Product';
import { colors } from '../../styles/theme.json';
import util from '../../util';
import Payment from '../../components/Forms/payment';
import CongratsModel from '../../components/Modals/congrats';
import { AppContext } from '../../contexts/app';
import Empty from '../../components/Empty';
import api from '../../services/api';
import moment, { now } from 'moment';
import {ActivityIndicator} from "react-native"

const Cart = ({ navigation: { navigate } }) => {
  const {cart, user, DISCOUNT_PERCENTAGE, ORDER_NUMBER } = useContext(AppContext);
  const [showModalCongrats, setShowModalCongrats] = useState(false);
  const [tab, setTab] = useState('cart');
  const [creditCard, setCreditCartd] = useState({});
  const [loading, setLoading] = useState(false);

  const cartIsEmpty = cart?.lenght === 0;
  const orderPlace = cart?.reduce((acc, product) => {
    return (acc += product.price);
  }, 0);

  const delivery = 10;
  const totalDiscount = (orderPlace * DISCOUNT_PERCENTAGE).toFixed(2);
  const totalOrderPrice = ((orderPlace - totalDiscount) + delivery).toFixed(2);


  const buyCart = async () =>{
    try {
      setLoading(true)

      //VALIDANDO OS DADOS DO CARTÃO DE CREDITO
      const creditCardValidation = util.isValidCreditCard(creditCard)
      if (creditCardValidation.error) {
        alert(creditCardValidation.message)
        return false
      }
      //CRIAR A ORDEM
    const {data: orderData} = await api.post("/orders",

      {
        "userId": user.id,
        "step": "waiting",
        "createdAt": moment().format(),
        "orderNumber": ORDER_NUMBER,
        "trackingNumber": new Date().getTime(),
        "totalValue": totalOrderPrice,
        "totalItems": cart?.lenght
      });

      if (!orderData.id){
        alert("Order creation error... try again later.")
        setLoading(false)
        return false;
      }

      setShowModalCongrats(true)
    } catch (error) {
      setLoading(false)
      alert(error.message)
    }
  }

  return (
    <>
      {showModalCongrats && <CongratsModel />}

      <Header title="Cart" goBack />

      {cartIsEmpty && <Empty messagem="Cart is Empty!" />}
      {!cartIsEmpty && (
        <>
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
            <Title variant="small">Order number is: {ORDER_NUMBER}</Title>
            <Spacer size="20px" />

            {tab === 'cart' && (
              <>
                {cart?.map((product) => (
                  <Product product={product} selected />
                ))}
                <Spacer size="30px" />
                <Box fluid align= "flex-start">
                  <Box row justify="space-between">
                    <Text color="dark">Order: </Text>
                    <Text color="dark">R${orderPlace}</Text>
                  </Box>

                  <Spacer size="10px" />
                  <Box row justify="space-between">
                    <Text color="success">Discount: </Text>
                    <Text color="success"> R$-{totalDiscount} </Text>
                  </Box>

                  <Spacer size="10px" />
                  <Box row justify="space-between">
                    <Text color="dark">Delivery: </Text>
                    <Text color="dark">R${delivery.toFixed(2)}</Text>
                  </Box>

                  <Spacer size="10px" />
                  <Box row justify="space-between">

                    <Text bold color="dark" 
                      style = {{
                        fontSize: 18
                      }} 
                    >
                      Total Order:{' '}
                    </Text>

                    <Text bold color="dark" 
                      style = {{
                        fontSize: 18
                      }}
                      >
                      R${totalOrderPrice}
                    </Text>
                  </Box>
                </Box>

                <Spacer size="30px" />
                <Button block onPress={() => setTab('payment')}>
                  <Text color="light" bold>Place order</Text>
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

                <Payment onChange={(creditCardData) => setCreditCartd(creditCardData)} />
                <Spacer size="30px" />
                <Button
                  block
                  onPress={() => {
                    buyCart();
                  }}
                >
                  {!loading && ( <Text color="light">Confirmation</Text>)}
                  {loading && <ActivityIndicator />}
                </Button>
                <Spacer size="40px" />
              </>
            )}
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Cart;
