import { StyleSheet, Text, View, Button } from 'react-native';

// You must NOT remove this component when working on the JS Basics exercise.
// You may modify the code for this component.
export default function ButtonContainer({ checkAge, checkEmail, showAll }) {
  return (
    <View>
      <Button onPress={checkAge} title="Show over 18s" />
      <Button onPress={checkEmail} title="Hide people with no email" />
      <Button onPress={showAll} title="Show all" />
    </View>
  );
}
