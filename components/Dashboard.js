import { StyleSheet, Text, View, Button } from "react-native";
import { commonStyle } from "../commonStyles";
import Exercise from "../exerciseEnum";

export default function Dashboard({ goToExercise }) {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.heading}>Mobile Dev Exercises</Text>
      <Button
        title="Refactor Chess Board"
        onPress={() => goToExercise(Exercise.ChessBoard)}
      />
      <Button title="JS Date" onPress={() => goToExercise(Exercise.JSDate)} />
      <Button
        title="Expo Accelerometer"
        onPress={() => goToExercise(Exercise.ExpoLibs)}
      />
    </View>
  );
}
