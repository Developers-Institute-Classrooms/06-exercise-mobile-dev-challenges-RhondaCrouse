import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import JSDate from "./exercises/JSDate/JSDate";
import ExpoLibs from "./exercises/ExpoLibs/ExpoLibs";
import Exercise from "./exerciseEnum";
import { color } from "./commonStyles";
import ChessBoard from "./exercises/ChessBoard/ChessBoard";

export default function App() {
  const [exerciseShown, setExerciseShown] = useState();
  const goToExercise = (exercise) => {
    if (exercise) {
      setExerciseShown(exercise);
    } else {
      setExerciseShown();
    }
  };
  return (
    <View style={styles.container}>
      {(() => {
        switch (exerciseShown) {
          case Exercise.ChessBoard:
            return <ChessBoard></ChessBoard>;
          case Exercise.ExpoLibs:
            return <ExpoLibs></ExpoLibs>;
          case Exercise.JSDate:
            return <JSDate></JSDate>;
          default:
            return <Dashboard goToExercise={goToExercise} />;
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
