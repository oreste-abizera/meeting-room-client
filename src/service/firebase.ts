import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { toast } from "react-hot-toast";

export const firebaseConfig = {
  apiKey: "AIzaSyCx5SSBApPSkn6YpY_bC8jz_Fpy9wiDbGs",
  authDomain: "meeting-room-374216.firebaseapp.com",
  projectId: "meeting-room-374216",
  databaseUrl: "meeting-room-374216.firebaseapp.com",
  storageBucket: "meeting-room-374216.appspot.com",
  messagingSenderId: "950786123236",
  appId: "1:950786123236:web:6d844c753f31d590cf53f1",
  measurementId: "G-XL7ZPCVV9R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => {
    toast.error(error.message);
  });

export default firebase;
