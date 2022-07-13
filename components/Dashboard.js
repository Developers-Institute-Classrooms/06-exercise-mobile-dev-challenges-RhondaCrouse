import { StyleSheet, Text, View, Button } from "react-native";
import { commonStyle } from "../commonStyles";
import Exercise from "../exerciseEnum";

export default function Dashboard({ goToExercise }) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>Mobile Dev Exercises</Text>
      <Button
        title="Local Storage"
        onPress={() => goToExercise(Exercise.LocalStorage)}
      />
      <Button title="Kata" onPress={() => goToExercise(Exercise.Kata)} />
    </View>
  );
}
