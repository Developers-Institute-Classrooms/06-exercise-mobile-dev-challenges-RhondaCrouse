import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Kata from "./exercises/Kata/Kata";
import LocalStorage from "./exercises/LocalStorage/LocalStorage";
import Exercise from "./exerciseEnum";
import { color } from "./commonStyles";

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
          case Exercise.Kata:
            return <Kata></Kata>;
          case Exercise.LocalStorage:
            return <LocalStorage></LocalStorage>;
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
