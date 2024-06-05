import React, {useEffect,useState, useContext} from 'react';
import Header from '../../components/Header';
import OrderList from '../../components/Order/list';
import { AppContext } from '../../contexts/app';
import Empty from '../../components/Empty';
import api from '../../services/api';

const OrdersPage = ({navigation}) => {

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const {user} = useContext(AppContext)

    const getOrders = async () => {
      try {
        setLoading(true);
        setTimeout(async () => {
          const { data: ordersData } = await api.get(`/orders`, {
            params: {
              userId: user?.id,
            },
          });
          setOrders(ordersData);
          setLoading(false);
        }, 800 * 2);
      } catch (error) {
        setLoading(false);
        alert(error.message);
      }
    };


    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () =>{
        getOrders();
      })

      return unsubscribe;
    },[navigation])


  return (
    <>
      <Header title="Orders" />
      {loading && <Empty loading/>}
      {!loading && <OrderList orders={orders}/>}
    </>
  );
};

export default OrdersPage;
