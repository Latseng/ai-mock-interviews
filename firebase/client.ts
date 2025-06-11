import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy5Bjv1ApUEbOXsSdeN2LyIqFtmKcvszI",
  authDomain: "prep-wise-7127c.firebaseapp.com",
  projectId: "prep-wise-7127c",
  storageBucket: "prep-wise-7127c.firebasestorage.app",
  messagingSenderId: "136442126058",
  appId: "1:136442126058:web:ff3e5e010c5b2743adc193",
  measurementId: "G-49CBX6WW38",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)