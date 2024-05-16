import React from 'react';
import { ScrollView, Text } from '../../components/index';
import Product from '.';

const ProductList = ({ products }) => {
  return (
    <ScrollView fluid>
      {products?.map((product) => (
        <Product
          product = {product}
        />
      ))}
    </ScrollView>
  );
};

export default ProductList;
