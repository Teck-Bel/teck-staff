import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD3cseAFVuHekCzRBltFrZYbD-nBUwAQqU",
  authDomain: "teck-2c7cc.firebaseapp.com",
  projectId: "teck-2c7cc",
  storageBucket: "teck-2c7cc.firebasestorage.app",
  messagingSenderId: "817998080512",
  appId: "1:817998080512:web:ac038ab80849dbbb21c6e5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
