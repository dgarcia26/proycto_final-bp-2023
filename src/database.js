import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyOKzYtIs-XUjhNd4yEspKg48nOITVeHQ",
  authDomain: "proyecto-bp-2023.firebaseapp.com",
  projectId: "proyecto-bp-2023",
  storageBucket: "proyecto-bp-2023.appspot.com",
  messagingSenderId: "312125058207",
  appId: "1:312125058207:web:c0874487baecfbc26c86aa"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb);
export { db };
