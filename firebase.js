import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhekF9bx-ETRfQuQ5Jopc0SWGlO0ZNJfA",
  authDomain: "fblog-27b6b.firebaseapp.com",
  projectId: "fblog-27b6b",
  storageBucket: "fblog-27b6b.firebasestorage.app",
  messagingSenderId: "583207757365",
  appId: "1:583207757365:web:0e1d19244fedf19a2bf37c",
  measurementId: "G-NL69J4Z53W",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
