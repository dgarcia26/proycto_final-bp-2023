// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhYLiatdgktoRVenufOWS0J8Ka7lGO-Ps",
  authDomain: "bp-2023-2f090.firebaseapp.com",
  projectId: "bp-2023-2f090",
  storageBucket: "bp-2023-2f090.appspot.com",
  messagingSenderId: "1060204256275",
  appId: "1:1060204256275:web:3011e88a1fd8d8946db3e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };


