import { app } from "./firebase.js";

console.log("Firebase connected successfully!", app);

document.addEventListener("DOMContentLoaded", () => {
  alert("Firebase is connected!");
});
