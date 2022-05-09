import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAqJQ90z1dtAZobRrbjYTNTxbgwQ8o93Q",
  authDomain: "europe-destinations-4f01c.firebaseapp.com",
  projectId: "europe-destinations-4f01c",
  storageBucket: "europe-destinations-4f01c.appspot.com",
  messagingSenderId: "416231779021",
  appId: "1:416231779021:web:ca8e85470407cb8adbd784"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();