import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import JSBasics from './exercises/JSBasics/JSBasics';
import ReactBasics from './exercises/ReactBasics/ReactBasics';
import Exercise from './exerciseEnum';
import { color } from './commonStyles';
import Kata from './exercises/Kata/Kata';

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
          case Exercise.Jsbasic:
            return <JSBasics onBack={goToExercise}></JSBasics>;
          case Exercise.ReactBasics:
            return <ReactBasics></ReactBasics>;
          case Exercise.Kata:
            return <Kata></Kata>;
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
