// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAheV6g7HP71fcM7C6yp7TQkB_F8bpNgbU",
  authDomain: "blood-donation-3c4a3.firebaseapp.com",
  projectId: "blood-donation-3c4a3",
  storageBucket: "blood-donation-3c4a3.appspot.com",
  messagingSenderId: "438235675895",
  appId: "1:438235675895:web:a3a8ff9842c397c6fb67f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
