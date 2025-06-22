// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Import the Authentication and Firestore SDKs (In order to use these services)
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Get instances of Auth and Firestore
export const auth = getAuth(app); // This gets the Authentication service for your app
export const db = getFirestore(app); // This gets the Cloud Firestore service for your app
