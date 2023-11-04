// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "myblog-403622.firebaseapp.com",
    projectId: "myblog-403622",
    storageBucket: "myblog-403622.appspot.com",
    messagingSenderId: "102969110608",
    appId: "1:102969110608:web:91ce9cb506b523e9f5e155"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);