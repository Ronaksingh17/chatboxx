import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDljdx0ULyKvx7HifqLfqSGuodZRMN34yc",
  authDomain: "lecture-1-5d0e2.firebaseapp.com",
  databaseURL: "https://lecture-1-5d0e2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lecture-1-5d0e2",
  storageBucket: "lecture-1-5d0e2.appspot.com",
  messagingSenderId: "490810859152",
  appId: "1:490810859152:web:0f7010f8db52330ff64215",
  measurementId: "G-8L3H6QHFYH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const googleProvider = new GoogleAuthProvider();
