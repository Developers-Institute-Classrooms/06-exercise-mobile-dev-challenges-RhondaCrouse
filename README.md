# 06 Exercise - Week 5

You will be required to complete each week's exercise and demo it to your colleagues.

There are 3 exercises you must complete this week. You may complete these in any order and at anytime you want as long as it is before the end of the week.

You are encouraged to help your colleagues and discuss solutions. However, you may be required to present your solution in class where you have to explain your code. The purpose of this is to make sure you've actually understood the code that you wrote.

## Brief

This exercise codebase is a mobile app that you can run locally using `expo start`. This app contains all the exercises that you will be working on. Most of your coding will be done under the `/exercise` directory where you will be presented with bugs or problems that you must solve.

I would highly recommend taking 30 minutes to read through the code first then run the code locally to test it out before starting on any of the exercises.

## 1. Refactor Chess Board

### Brief

You can find this exercise under the directory `/exercise/ChessBoard`. When you open the app navigate to this exercise's UI by pressing the Refactor Chess Board button.

This exercise has the same code as the Kata from week 1. Your job is to refactor the code so that it is more readable and maintainable.

### Acceptance Criteria

- Refactor repetitive code by putting them in reusable functions or loops.
- Refactor "magic number" or "magic value" variables.
- Refactor inline functions to be more readable.
- Rename variables to be more readable.
- The final functionality of the chess board should not change.

## 2. Expo Accelerometer API

### Brief

You can find this exercise under the directory `/exercise/ExpoLibs`. When you open the app navigate to this exercise's UI by pressing the Expo Accelerometer button.

This exercise's existing code tracks the devices X, Y, and Z acceleration. This will only work on a device or emulated device.

### Acceptance Criteria

- Using the X, Y, Z acceleration determine whether the device is being shaken back and forth. Toggle on the state if the device is being shaken. Toggle off the state if the device stops shaking.

## 3. Javascript Date

### Brief

You can find this exercise under the directory `/exercise/JSDate`. When you open the app navigate to this exercise's UI by pressing the JS Date button.

This exercise contains a date picker which only works on a device or an emulated device.

### Acceptance Criteria

- Determine if the selected date is in the past, today, or future.
- If it is in the past or future determine how many days in the past or future it is.
