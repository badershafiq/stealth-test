import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const app = initializeApp({
  apiKey: "AIzaSyC78EBdOqlURFmmC8c9U_Js_tpIrm0_NZw",
  authDomain: "stealth-learning.firebaseapp.com",
  databaseURL: "https://stealth-learning-default-rtdb.firebaseio.com",
  projectId: "stealth-learning",
  storageBucket: "stealth-learning.appspot.com",
  messagingSenderId: "444184637140",
  appId: "1:444184637140:web:5db2a20918b901d47f1541",
});

export default { app };

export const getExercises = async () => {
  const fireStore = getFirestore();

  const exercisesCol = collection(fireStore, "exercises");
  const exerciseSnapshot = await getDocs(exercisesCol);

  const exerciseData = exerciseSnapshot.docs.map((doc) => doc.data());
  return exerciseData;
};
