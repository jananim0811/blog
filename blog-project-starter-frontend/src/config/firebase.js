import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDygmfOX1cgChsAK56taeVaOmMhDEn8pKU",
  authDomain: "blog-app-1aad2.firebaseapp.com",
  projectId: "blog-app-1aad2",
  storageBucket: "blog-app-1aad2.firebasestorage.app",
  messagingSenderId: "990579820351",
  appId: "1:990579820351:web:b7664e7aa9e7577bc7b58a",
  measurementId: "G-8PFX66MWRE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default auth