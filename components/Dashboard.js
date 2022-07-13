import { StyleSheet, Text, View, Button } from "react-native";
import { commonStyle } from "../commonStyles";
import Exercise from "../exerciseEnum";

export default function Dashboard({ goToExercise }) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>Mobile Dev Exercises</Text>
      <Button
        title="JS Basics"
        onPress={() => goToExercise(Exercise.Jsbasic)}
      />
      <Button
        title="React Basics"
        onPress={() => goToExercise(Exercise.ReactBasics)}
      />
      <Button title="Kata" onPress={() => goToExercise(Exercise.Kata)} />
    </View>
  );
}
