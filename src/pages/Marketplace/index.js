import React, {useEffect, useState} from 'react';
import { Box, Text, Title, Touchable } from '../../components/index';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CategoryList from '../../components/Category/list';
import api from '../../services/api';
import Empty from '../../components/Empty';

const Marketplace = ({navigation}) => {

  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])

  const getCategories = () =>{
    try {
      setLoading(true)
      setTimeout( async () =>{
        const {data: categoriesData} = await api.get("/categories")
        setCategories (categoriesData)
        setLoading(false);
      }, 500 * 2)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect( () =>{
    const unsubscribe = navigation.addListener("focus", () =>{
      getCategories()
    })
    return unsubscribe
  }, [navigation])

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
      {loading && (<Empty loading/>)}
      {!loading && ( <CategoryList categories= {categories} />)}
    </>
  );
};

export default Marketplace;
