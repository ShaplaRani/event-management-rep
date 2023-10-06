// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoDTcsko--EwqNvAnKU0Z8_Oa9m-QPKh4",
  authDomain: "event-management-f35b3.firebaseapp.com",
  projectId: "event-management-f35b3",
  storageBucket: "event-management-f35b3.appspot.com",
  messagingSenderId: "128090770906",
  appId: "1:128090770906:web:74449e27d7fc101c4004e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;