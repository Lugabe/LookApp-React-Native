import React, {useEffect, useState, useContext} from 'react';
import { ScrollView, Text } from '../../components/index';
import OrderItem from '.';
import { AppContext } from '../../contexts/app';

const OrderList = ({orders}) => {

  return (
    <>
      <ScrollView 
        fluid 
        background="light" 
        hasPadding>
        {orders?.map(order => (
          <OrderItem order = {order}/>
        ))}
      </ScrollView>
    </>
  );
};

export default OrderList;
