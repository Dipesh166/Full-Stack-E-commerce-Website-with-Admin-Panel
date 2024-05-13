
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqhkyhDSzl0P2ggt_0gCSU3OGFrFjoblE",
  authDomain: "mern-ecommerce-f0f0b.firebaseapp.com",
  projectId: "mern-ecommerce-f0f0b",
  storageBucket: "mern-ecommerce-f0f0b.appspot.com",
  messagingSenderId: "991399660587",
  appId: "1:991399660587:web:c55c8ac9892a27a6716e6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)