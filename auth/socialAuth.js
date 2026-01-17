import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9hIM7sdXTbn72kkuCTCE8v89zUkvRdis",
  authDomain: "codecatalystunivproject.firebaseapp.com",
  projectId: "codecatalystunivproject",
  storageBucket: "codecatalystunivproject.firebasestorage.app",
  messagingSenderId: "164849801735",
  appId: "1:164849801735:web:51a1645b4df434be5b68a2",
  measurementId: "G-C45V0090H6",
};

// Inisialisasi Firebase app & auth (modular SDK v9)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}
