// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqJLs-Slq5Dfup7nKSIfW61dCNAiSKmWU",
  authDomain: "winbdt-admin-1st.firebaseapp.com",
  projectId: "winbdt-admin-1st",
  storageBucket: "winbdt-admin-1st.appspot.com",
  messagingSenderId: "609406779980",
  appId: "1:609406779980:web:65ac5e5a3544877cc3aae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app)