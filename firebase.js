
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD0GvhWPCF4t3J5aDKky39D_kcc7hMpLWc",
    authDomain: "wamumbi-supermarket.firebaseapp.com",
    projectId: "wamumbi-supermarket",
    storageBucket: "wamumbi-supermarket.firebasestorage.app",
    messagingSenderId: "139514973658",
    appId: "1:139514973658:web:1aca5c20e89da5240284e3",
    measurementId: "G-CEBRJC1F78"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
