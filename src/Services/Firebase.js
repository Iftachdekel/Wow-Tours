// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrutmjZCyxIS798eBGdxXFa_iyQQnLAcg",
  authDomain: "real-wowtours.firebaseapp.com",
  projectId: "real-wowtours",
  storageBucket: "real-wowtours.appspot.com",
  messagingSenderId: "26834414190",
  appId: "1:26834414190:web:036541ab12e7f6baa7147f",
  measurementId: "G-T8BT2S45G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);