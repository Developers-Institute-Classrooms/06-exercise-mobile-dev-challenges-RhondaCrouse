import { Button, Text, View, FlatList } from 'react-native';
import ButtonContainer from './ButtonContainer';
import { commonStyle, color } from '../../commonStyles';
import React, { useState } from 'react';

const peopleData = [
  { name: 'Ann', age: 15, email: 'a@test.com', birthMonth: 'Jan' },
  { name: 'Bob', age: 19, email: 'b@test.com', birthMonth: 'Mar' },
  { name: 'Cam', age: 18, email: 'c@test.com', birthMonth: 'Feb' },
  { name: 'Dan' },
  { name: 'Steve', age: 14, birthMonth: 'Jun' },
  { name: 'Tony', age: 20, birthMonth: 'Dec' },
];

export default function JSBasics({ onBack }) {
  const [individual, setIndividual] = useState(peopleData);

  const listItem = ({ item }) => (
    <Text style={commonStyle.text}>
      {JSON.stringify(`name:${item.name}`)}
      {item.age ? JSON.stringify(`age:${item.age}`) : ''}
    </Text>
  );

  const checkAge = () => {
    const filterAge = peopleData.filter((item) => item.age > 18);
    setIndividual(filterAge);
  };

  const checkEmail = () => {
    const filterEmail = peopleData.filter((item) => item.email);
    setIndividual(filterEmail);
  };

  const showAll = () => {
    setIndividual(peopleData);
  };

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>JS Basics</Text>
      <FlatList
        data={individual}
        renderItem={listItem}
        keyExtractor={(item) => item.name}
      />
      <ButtonContainer
        checkAge={checkAge}
        checkEmail={checkEmail}
        showAll={showAll}
      ></ButtonContainer>
      <Button title="Back" color={color.secondary} onPress={onBack} />
    </View>
  );
}
