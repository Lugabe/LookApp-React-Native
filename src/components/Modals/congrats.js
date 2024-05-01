import React from 'react';
import { Box, Spacer, Text, Title, Button, Cover } from '..';

const CongratsModel = () => {
  return (
    <Box
      background="light"
      hasPadding
      justify="center"
      align="center"
      style={{
        position: 'absolute',
        zIndex: 9999,
        width: '100%',
        height: '100%',
      }}
    >
      <Cover 
        width={"200px"}
        height={"200px"}
        source={require("../../assets/check-circle.png")}
        background= "transparent"
      />
      <Spacer size="40px" />
      <Title bold color="dark">
        Congratulations!
      </Title>
      <Spacer />
      <Text bold>Your items are on the way and should arrive shortly</Text>
      <Spacer size="40px" />
      <Button justify="flex-end" block onPress={() => {}}>
        <Text color="light">Track your order</Text>
      </Button>
      <Spacer size="40px" />
    </Box>
  );
};

export default CongratsModel;
