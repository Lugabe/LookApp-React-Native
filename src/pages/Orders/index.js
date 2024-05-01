import React from 'react';
import Header from '../../components/Header';
import OrderList from '../../components/Order/list';

const OrdersPage = () => {
  return (
    <>
      <Header title="Orders" />
      <OrderList />
    </>
  );
};

export default OrdersPage;
