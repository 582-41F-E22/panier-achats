import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import objeConfig from './config'

// Initialiser Firebase
export const firebaseApp = initializeApp(objeConfig);

// Initialiser Firestore
export const bdFirestore = getFirestore();