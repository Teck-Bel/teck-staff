import { db } from "/teck-staff/includes/firebase/config.js";
import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const employeeId = params.get("id");

const roleSelect = document.getElementById("role");
const statusEl = document.getElementById("status");

const docRef = doc(db, "employees", employeeId);

// 🔄 Data laden
const snap = await getDoc(docRef);
if (snap.exists()) {
  roleSelect.value = snap.data().role;
}

// 💾 Rol opslaan
document.getElementById("saveRole").addEventListener("click", async () => {
  try {
    await updateDoc(docRef, {
      role: roleSelect.value
    });
    statusEl.textContent = "Rol opgeslagen ✔";
  } catch (err) {
    statusEl.textContent = "Fout bij opslaan";
    console.error(err);
  }
});
