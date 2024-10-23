// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnIu6UEZQ4gZ524QB-nfv9aDxGS3cDwlY",
  authDomain: "testprojectweb2024.firebaseapp.com",
  projectId: "testprojectweb2024",
  storageBucket: "testprojectweb2024.appspot.com",
  messagingSenderId: "789347287636",
  appId: "1:789347287636:web:e9f106c74a65c743bda3c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);