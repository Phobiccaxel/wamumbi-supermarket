import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

async function loadMessage() {
  try {
    const docRef = doc(db, "test", "welcome");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      alert(docSnap.data().message);
    } else {
      alert("Document not found!");
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to Firestore.");
  }
}

loadMessage();
