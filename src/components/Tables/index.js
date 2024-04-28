import React from 'react';
import { ScrollView, Text, Touchable, Box } from '..';
import { colors } from '../../styles/theme.json';

const Tables = ({ tabs = [], active = '', onChange = (tab) => {} }) => {
  const totalTabs = tabs?.length;
  const activeTabStyle = {
    borderBottomWidth: 3,
    borderBottomColor: colors.danger,
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        style={{
          maxHeight: 70,
          backgroundColor: colors.light,
        }}
      >
        {tabs?.map((tab) => (
          <Touchable
            onPress={() => onChange(tab.value)}
            hasPadding
            style={[
              {
                flex: 1,
                minWidth: `${100 / totalTabs}%`,
                alignItems: 'center',
              },
              active === tab.value ? activeTabStyle : {},
            ]}
          >
            <Text bold color={active === tab.value ? 'primary' : undefined}>{tab.label}</Text>
          </Touchable>
        ))}
      </ScrollView>
    </>
  );
};

export default Tables;
