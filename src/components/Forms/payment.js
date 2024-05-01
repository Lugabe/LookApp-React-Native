import React, { useState, useRef, useEffect } from 'react';
import { Box, Input, Spacer, Text, Title, Touchable } from '..';
import SegmentedPicker from 'react-native-segmented-picker';

const PaymentForm = ({ onChange = (creditCard) => {} }) => {
  const pickerRef = useRef(null);
  const [data, setData] = useState({
    holder_name: '',
    number: '',
    valid_date: '',
    cvv: '',
  });

  useEffect(() =>{
    onChange(data)
  },[data])

  return (
    <>
      <SegmentedPicker
        ref={pickerRef}
        onConfirm={(data) => setData({...data, valid_date: `${data.Moth}/${data.Year}` })}
        options={[
          {
            key: 'Moth',
            items: [
              { label: 'Option 1', value: 'option_1' },
              { label: 'Option 2', value: 'option_2' },
            ],
          },
          {
            key: 'Year',
            items: [{ label: 'Option 3', value: 'option 3' }],
          },
        ]}
      ></SegmentedPicker>

      <Box>
        <Title bold variant="small">
          Select and enter your payment details
        </Title>
        <Spacer />
        <Text color="dark">By continuing you agree to our Terms</Text>
        <Spacer size="20px" />

        <Input
          placeholder="Holder Name"
          value={data.holder_name}
          onChangeText={(holder_name) => setData({ ...data, holder_name })}
        />
        <Spacer size="10px" />

        <Input
          placeholder="Credit Card Number"
          value={data.number}
          onChangeText={(number) => setData({ ...data, number })}
        />
        <Spacer size="10px" />

        <Touchable width ="100%" onPress={() => pickerRef.current.show()}>
          <Input
            editable={false}
            placeholder="09/25"
          />
        </Touchable>
        <Spacer size="10px" />

        <Box row>
          <Box spacing="0px 10px 0px 0px">
            <Input
              placeholder="CVV"
              value={data.cvv}
              onChangeText={(cvv) => setData({ ...data, cvv })}
            />
          </Box>
          <Box>
            <Spacer />
            <Text bold variant="small">
              3 or 4 digits usually found on the signature strip
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentForm;
