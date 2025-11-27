// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCXU18bUpCexGetTtJRRoNX-uQGGlfdJII",
//   authDomain: "details-8a3c7.firebaseapp.com",
//   projectId: "details-8a3c7",
//   storageBucket: "details-8a3c7.firebasestorage.app",
//   messagingSenderId: "665360613021",
//   appId: "1:665360613021:web:4c025cb2e2b5a4ff255e74"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);