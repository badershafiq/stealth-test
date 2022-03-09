
# Stealth Language Learning
## React Native Test Project

Stealth is a react native test project app, which consist of multiple exciting exercises.
For each exercise, an english phrase is given and an equivalent phrase in german language with a word missing.
User has to guess that word and check if the answer is right or wrong.

![App Demo 1](https://media.giphy.com/media/0cw2AA0wa1xE5O5zhF/giphy.gif)
![App Demo 1](https://media.giphy.com/media/CwsfgqM3fYswFHoNvE/giphy.gif)

# Contents

- [Project Requirements](#-project-requirements)
- [Tech Stack](#-tech-stack)
- [Workflow](#-workflow)
- [How to Install and run](#-how-to-install-and-run)

# Project Requirements

- User is provided with an english phrase with a word missing, and user has to guess that word correctly.
- User must complete the exercise with a correct answer.
- User must guess a correct translation for the word.
- After the exercise is completed, it is reset with a new exercise.

# Tech Stack

- Expo
- React Native
- Typescript
- Firebase Firestore

# Workflow

- User can see exercises one by one after running the app
- User can guess an answer from the given options
- User can't continue without guessing an answer
- User can check whether the selected option is correct or not
- User can continue to the next exercise after guessing an answer for current exercise
- User can restart the exercises after completing all exercises

# How to install dependencies and run

### Follow the following instruction to get this app up and running on your local machine

- Clone the reposity [Stealth Test App React Native](https://github.com/badershafiq/stealth-test.git).

```
git clone https://github.com/badershafiq/stealth-test.git
cd stealth-test
```

- Node v14

- EXpo CLI

```
yarn global add expo-cli
```

- Install packages/dependencies
```
yarn install
```
- Run app
```
expo start
```
