import React from 'react';
import { ScrollView, Text } from '../../components/index';
import OrderItem from '.';

const OrderList = () => {
  return (
    <>
      <ScrollView 
        fluid 
        background="light" 
        hasPadding>
        {Array.from(Array(5))?.map(item => (
          <OrderItem/>
        ))}
      </ScrollView>
    </>
  );
};

export default OrderList;
