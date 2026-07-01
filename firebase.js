import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0GvhWPCF4t3J5aDKky39D_kcc7hMpLWc",
  authDomain: "wamumbi-supermarket.firebaseapp.com",
  projectId: "wamumbi-supermarket",
  storageBucket: "wamumbi-supermarket.firebasestorage.app",
  messagingSenderId: "139514973658",
  appId: "1:139514973658:web:1aca5c20e89da5240284e3",
  measurementId: "G-CEBRJC1F78"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
