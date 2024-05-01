import React from 'react';
import OrderList from './list';
import { Box, Spacer, Text, Title } from '..';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles/theme.json';
import util from '../../util';

const OrderItem = () => {
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
                    name="check" 
                    size={20} 
                    color={colors.success} />
                <Text bold color="success" spacing="0px 0px 0px 6px">
                DELIVERED
                </Text>
            </Box>
            <Text>August 17, 2024 3:58 PM</Text>
            </Box>
            <Box
            hasPadding
            width="100%"
            style={{
                borderBottomWidth: 1,
                borderBottomColor: util.toAlpha(colors.muted, 50),
            }}
            >
            <Title>Order N° 2342</Title>
            <Spacer size={'5px'} />
            <Text bold color="dark">
                Tracking Number: <Text color="dark">4234</Text>
            </Text>
            </Box>
            <Box 
                row 
                hasPadding 
                justify="space-between" 
                width="100%"
                >
            <Text bold color="dark">
                VALUE OF ITEMS: <Text color="dark">R$53,30</Text>
            </Text>
            <Text bold color="dark">
                QUANTITY: <Text color="dark">3</Text>
            </Text>
            </Box>
        </Box>
    </>
  );
};

export default OrderItem;
