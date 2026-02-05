import { db } from "/teck-staff/includes/firebase/config.js";
import { collection, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("addEmployeeForm");
const errorEl = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const employee = {
    email: email.value,
    voornaam: voornaam.value,
    achternaam: achternaam.value,
    role: role.value,
    actief: true,
    aangemaaktOp: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "employees"), employee);
    window.location.href = "/teck-staff/employees/index.html";
  } catch (err) {
    errorEl.textContent = "Fout bij toevoegen";
    console.error(err);
  }
});
