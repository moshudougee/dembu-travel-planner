// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,  getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvQ7nJz-3ue5jd4KBx1vW30qjraFUewGo",
  authDomain: "dembu-travel-planner.firebaseapp.com",
  projectId: "dembu-travel-planner",
  storageBucket: "dembu-travel-planner.appspot.com",
  messagingSenderId: "415177218762",
  appId: "1:415177218762:web:de1a99447c6e47a0747233",
  measurementId: "G-3MTZP2BL9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
export const db = getFirestore(app);
//const analytics = getAnalytics(app);