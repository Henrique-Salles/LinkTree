import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvAjl32HY0mWtOlfOWCzZaDO0uMZQQfEQ",
  authDomain: "reactlinks-b26b8.firebaseapp.com",
  projectId: "reactlinks-b26b8",
  storageBucket: "reactlinks-b26b8.appspot.com",
  messagingSenderId: "818390091565",
  appId: "1:818390091565:web:f26d4ef9c2ed975835b5a4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
