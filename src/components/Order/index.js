import React, {useEffect,useState, useContext} from 'react';
import OrderList from './list';
import { Box, Spacer, Text, Title } from '..';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';
import util from '../../util';
import moment from 'moment';


const OrderItem = ({order}) => {

    const stepEnum = {
        waiting: {
            icon: 'clock',
            color: 'warning'
        },
        delivered: {
            icon: 'check',
            color: 'success'
        },
        canceled: {
            icon: 'close',
            color: 'danger'
        }
    }

    const stepDate = stepEnum[order?.step]


  return (
    <>
        <Spacer size={"5px"}/>
        <Box
            radius="5px"
            spacing="0px 0px 10px 0px"
            border={`1px solid ${util.toAlpha(colors.muted, 50)}`}
        >
            <Box
            row
            hasPadding
            justify="space-between"
            width="100%"
            style={{
                borderBottomWidth: 1,
                borderBottomColor: util.toAlpha(colors.muted, 50),
            }}
            >
            <Box align="center" row>
                <Icon 
                    name='check' 
                    size={20} 
                    color={colors[stepDate?.color]} />
                <Text bold color={stepDate.color} spacing="0px 0px 0px 6px">
                {order?.step?.toUpperCase()}
                </Text>
            </Box>
            <Text>{moment(order?.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
            </Box>
            <Box
            hasPadding
            width="100%"
            style={{
                borderBottomWidth: 1,
                borderBottomColor: util.toAlpha(colors.muted, 50),
            }}
            >
            <Title bold variant = "small">Order N° {order?.orderNumber}</Title>
            <Spacer size={'5px'} />
            <Text  color="dark" variant= "normal">
                Tracking Number: <Text color="dark">{order?.trackingNumber}</Text>
            </Text>
            </Box>
            <Box 
                row 
                hasPadding 
                justify="space-between" 
                width="100%"
                >
            <Text bold color="dark">
                VALUE OF ITEMS: <Text color="dark">R${order?.totalValue}</Text>
            </Text>
            <Text bold color="dark">
                QUANTITY: <Text color="dark">{order?.totalItems}</Text>
            </Text>
            </Box>
        </Box>
    </>
  );
};

export default OrderItem;
