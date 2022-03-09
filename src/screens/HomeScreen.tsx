import React, { FC, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { getExercises } from "../firebase/config";
import { Exercise } from "../types";

import Button from "../components/Button";
import COLORS from "../constants/colors";
import CorrectPhrase from "../components/CorrectPhrase";
import FillBlank from "../components/FillBlank";
import Option from "../components/Option";
import NavBar from "../components/NavBar";

const HomeScreen: FC = () => {
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  const [execiseNo, setExeciseNo] = useState<number>(0);
  const [exerciseCompleted, setExerciseCompleted] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [startAgain, setStartAgain] = useState<boolean>(false);

  const exercise = exercises[execiseNo];

  useEffect(() => {
    getExercises()
      .then((data) => {
        setExercises(data);
      })
      .catch(() => console.log("Error occoured"));
  }, []);

  const submit = () => {
    if (selected) {
      setResult(
        selected === exercise.correctOption
          ? "Great Job!"
          : `Answer: ${exercise.correctOption}`
      );
      setExerciseCompleted(true);
      setSelected("");
    } else if (exerciseCompleted) {
      setExerciseCompleted(false);
      if (exercises.length - 1 == execiseNo) {
        setResult("All Exercises completed");
        setStartAgain(true);
        return;
      }
      setExeciseNo((prevExerciseNo) => prevExerciseNo + 1);
      setResult("");
    } else {
      setResult("Select an option");
    }
  };

  const restart = () => {
    setResult("");
    setExeciseNo(0);
    setStartAgain(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      {exercise ? (
        <>
          <Text style={styles.header}>Fill in the missing word</Text>
          <CorrectPhrase phrase={exercise.en} />
          <FillBlank question={exercise.de} option={selected} />
          <View style={styles.optionsContainer}>
            {exercise.options.map((option: string) => (
              <Option
                key={option}
                text={option}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </View>
          {result.length ? (
            <View
              style={[
                styles.answerContainer,
                result === "Great Job!" ? styles.correct : styles.incorrect,
              ]}
            >
              <Text style={styles.result}>{result}</Text>
            </View>
          ) : null}
          <Button
            selected={selected}
            completed={startAgain}
            submit={submit}
            restart={restart}
          />
        </>
      ) : (
        <Text style={styles.noExercise}>No Exercise Found</Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },
  header: {
    color: COLORS.primary,
    fontSize: 22,
    marginTop: "5%",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-evenly",
  },
  noExercise: {
    color: COLORS.primary,
    fontSize: 22,
    fontWeight: "700",
    marginTop: "50%",
  },
  answerContainer: {
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    marginTop: "auto",
    padding: "10%",
  },
  result: {
    fontSize: 22,
    fontWeight: "700",
  },
  incorrect: {
    backgroundColor: COLORS.danger,
  },
  correct: {
    backgroundColor: COLORS.success,
  },
});
