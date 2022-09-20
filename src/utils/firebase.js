// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5gXJLUWJ8zVge1VY9D6_qADkR0nLJMsw",
  authDomain: "ecommerce-giraudo.firebaseapp.com",
  projectId: "ecommerce-giraudo",
  storageBucket: "ecommerce-giraudo.appspot.com",
  messagingSenderId: "999613037396",
  appId: "1:999613037396:web:cf940e350d56da597026c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// necesitamos acceder a la DB
export const db = getFirestore(app); // esto retorna la conxion a la DB