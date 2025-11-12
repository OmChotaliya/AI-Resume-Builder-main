import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA1WQw-Y6VffCgMIpGBSL7AMvpuEdljqg",
  authDomain: "om-chotaliya.firebaseapp.com",
  projectId: "om-chotaliya",
  storageBucket: "om-chotaliya.firebasestorage.app",
  messagingSenderId: "485032920649",
  appId: "1:485032920649:web:b8d6fe6630c227b6c6a198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
