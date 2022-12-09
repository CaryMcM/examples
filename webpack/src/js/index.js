// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABMisPUC1LLuiJm4h4jM7-ZRu9FtSRfu8",
  authDomain: "flood-quote.firebaseapp.com",
  projectId: "flood-quote",
  storageBucket: "flood-quote.appspot.com",
  messagingSenderId: "604231199113",
  appId: "1:604231199113:web:5e83a5289d3d2461d6d958",
  measurementId: "G-6XG5RWVMWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);