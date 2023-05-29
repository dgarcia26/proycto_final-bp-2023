// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyOKzYtIs-XUjhNd4yEspKg48nOITVeHQ",
  authDomain: "proyecto-bp-2023.firebaseapp.com",
  projectId: "proyecto-bp-2023",
  storageBucket: "proyecto-bp-2023.appspot.com",
  messagingSenderId: "312125058207",
  appId: "1:312125058207:web:bcda0265b0cd0c936c86aa"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb);
export { db };
