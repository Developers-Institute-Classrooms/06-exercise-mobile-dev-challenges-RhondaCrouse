# 06 Exercise - Week 2

You will be required to complete each week's exercise and demo it to your colleagues.

There are 4 exercises you must complete this week. You may complete these in any order and at anytime you want as long as it is before the end of the week.

You are encouraged to help your colleagues and discuss solutions. However, you may be required to present your solution in class where you have to explain your code. The purpose of this is to make sure you've actually understood the code that you wrote.

## Brief

This exercise codebase is a mobile app that you can run locally using `expo start`. This app contains all the exercises that you will be working on. Most of your coding will be done under the `/exercise` directory where you will be presented with bugs or problems that you must solve.

I would highly recommend taking 30 minutes to read through the code first then run the code locally to test it out before starting on any of the exercises.

## 1. Local Storage

### Brief

You can find this exercise under the directory `/exercise/LocalStorage`. When you open the app navigate to this exercise's UI by pressing the Local Storage button.

In this exercise you will need to utilize local storage to display a list of people with name and age. This should persist when you restart the app.

### Acceptance Criteria

- When a user has entered a name and age and pressed the Add User button then the data should immediately appear in the list above.
- When a user presses the Clear All Users button then all data in the list above should disappear.
- When a user presses the bin icon button next to a row in the list then only that row should disappear.
- When a user terminates the app and restarts it the data should persist in the list.

## 2. Styling

### Brief

This exercise does not have a directory. Instead you are required to re-style this entire app.

Here are some ideas from UI Kits that might help when thinking about redesigning the buttons, color, layout, spacing and font.

- [UI Kit for typography and colors on Figma.](https://www.figma.com/file/et5ufeiWn2cNyuobJoIRLQ/CoreDesignSystem?node-id=0%3A1) (You will need to log in with your Google account to be able to view the colors, font sizes, and spacing from the design file)

<img width="1333" alt="image" src="https://user-images.githubusercontent.com/39934421/175849512-79035414-2b7f-4196-95fd-d1bed879e15c.png">

- [UI Kit example of buttons](https://marketing.invisionapp-cdn.com/cms/images/lr1orcar/marketing-pages/8ddf3a57eb0e637f70277c424cb57db86efb8ea5-1600x1200.png?w=2000&fm=jpg&q=90)

- [UI Kit form ideas](https://www.justinmind.com/blog/best-ui-component-kits-forms/)

### Acceptance Criteria

- You will need to come up with a wireframe for every component and come up with a new color scheme. You will need to make the app more user friendly by changing the layout, spacing, font sizes and colors.
- You must use the `commonStyles.js` file to store styling used across multiple components. Styling that is not shared across components can be written in the individual Component JS files.
- The new style should follow these [graphic design principles](https://www.youtube.com/watch?v=a5KYlHNKQB8). As well as [mobile design principles](https://www.smashingmagazine.com/2018/02/comprehensive-guide-to-mobile-app-design/).

## 3. Kata - Password Strength

### Brief

You can find this exercise under the directory `/exercise/Kata`. When you open the app navigate to this exercise's UI by pressing the Kata button.

This is a brainteaser inspired by https://www.codewars.com/. When you navigate to the UI you will see 2 input fields for username and password. You will need to determine if the password complexity is strong enough for this Kata.

### Acceptance Criteria

- When a user has entered a username and a valid password and pressed the Create User button then call the `createUser()` function and `setPasswordValid(true)`.

- A password is only valid if it

  - Has a minimal length of 8 characters
  - Has at least 2 capital letters in it
  - Has at least 1 number in it

- Complete the unit tests in `Kata.test.js`
