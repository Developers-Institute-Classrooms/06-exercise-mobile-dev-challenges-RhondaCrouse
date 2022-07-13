# 06 Exercise - Week 1

You will be required to complete each week's exercise and demo it to your colleagues.

There are 3 exercises you must complete this week. You may complete these in any order and at anytime you want as long as it is before the end of the week.

You are encouraged to help your colleagues and discuss solutions. However, you may be required to present your solution in class where you have to explain your code. The purpose of this is to make sure you've actually understood the code that you wrote.

## Brief

This exercise codebase is a mobile app that you can run locally using `expo start`. This app contains all the exercises that you will be working on. Most of your coding will be done under the `/exercise` directory where you will be presented with bugs or problems that you must solve.

I would highly recommend taking 30 minutes to read through the code first then run the code locally to test it out before starting on any of the exercises.

## 1. Javascript Basics

### Brief

You can find this exercise under the directory `/exercise/JSBasics`. When you open the app navigate to this exercise's UI by pressing the JS Basics button.

You are presented with a list of data. It is your job to use your JavaScript skills to manipulate this list to meet the acceptance criteria of this exercise.

### Acceptance Criteria

- When a user navigates to this page they should be presented with a list of people's name and age ONLY. If their age data is unavailable don't display the age.

- When a user presses the "Show over 18" button then only the people who's age are 19 or above are shown with their name and age displayed ONLY.

- When a user presses the "Hide people with no email" button then only the people with emails are shown with their name and age displayed ONLY.

- When a user presses the "Show all" button then all people are shown with their name and age displayed ONLY.

- When a user presses the "Back" button then they are taken back to the dashboard page.

- You must not remove or refactor the `ButtonContainer` component.

## 2. React Basics

### Brief

You can find this exercise under the directory `/exercise/ReactBasics`. When you open the app navigate to this exercise's UI by pressing the React Basics button.

You are presented with a two input fields, one for `name` and one for `age`. These are linked with two React states of the same name. There is a third state called `user` which is an object. This state is updated with the values inside the input fields whenever the Update User button is pressed.

In the code you will notice there are several console logs. The contents of these console logs tell you when that line of code should be run.

You can see a completed example on lines 10 to 12 where `console.log("name state was updated")` will only run when the name state is updated.

### Acceptance Criteria

- Add code around `console.log("age state was updated")` so that this line is only run when the age state is updated.

- Add code around `console.log("age OR name state was updated")` so that this line is only run when the age or name state is updated.

- Add code around `console.log("user state was updated, but not necessarily changed ;)");` so that this line is only run when the user state is updated.

## 3. Kata - Is the King in Check?

### Brief

You can find this exercise under the directory `/exercise/Kata`. When you open the app navigate to this exercise's UI by pressing the Kata button.

This is a brainteaser inspired by https://www.codewars.com/. When you navigate to the UI you will see a chess board with a black King on it. You can tap any of the other tiles to add a white piece. Your job to to determine if the piece you added puts the King in check or not.

### Acceptance Criteria

- Correctly determine if the piece (Bishop, Knight, Rook, or Queen) you added puts the King in check or not. You will only need to add code to the `updatePiece()` function below the TODO.
