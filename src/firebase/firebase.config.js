// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe1rj7DxpPL7bqhBzKzQhBN6EVbQL5_ZA",
  authDomain: "assignment11-e566e.firebaseapp.com",
  projectId: "assignment11-e566e",
  storageBucket: "assignment11-e566e.appspot.com",
  messagingSenderId: "968811484607",
  appId: "1:968811484607:web:a7b6a39d6d52c0dee73d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth

