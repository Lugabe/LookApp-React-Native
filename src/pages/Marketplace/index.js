import React from 'react';
import { Box, Text, Title, Touchable } from '../../components/index';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CategoryList from '../../components/Category/list';

const Marketplace = () => {
  return (
    <>
      <Header
        title="Categories"
        right={() => (
          <Touchable hasPadding width="70px" onPress={() => (alert("funcionou"))}>
            <Icon name="bag" size={20} />
          </Touchable>
        )}
      />
      <CategoryList />
    </>
  );
};

export default Marketplace;
