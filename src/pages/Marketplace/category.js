import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import api from '../../services/api';
import Header from '../../components/Header';
import ProductList from '../../components/Product/list';
import Empty from '../../components/Empty';
import { Box, Text, Title, Touchable } from '../../components/index';

const Category = ({ route, navigation }) => {
  const { category } = route?.params;
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState();

  const getProducts = async () => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const { data: productsData } = await api.get(`/products`, {
          params: {
            categoryId: category.id,
          },
        });
        setProducts(productsData);
        setLoading(false);
      }, 800 * 2);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus',() => {
        getProducts();
      },[navigation]);
  });

  return (
    <>
      <Header
        title={category?.title}
        goBack={true}
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => alert('funcionou')}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      ></Header>

      {loading && <Empty loading />}
      {!loading && <ProductList products={products} />}
    </>
  );
};

export default Category;
