import { auth } from "/teck-staff/includes/firebase/config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (!loginBtn) return;

  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorEl = document.getElementById("error");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/teck-staff/dashboard.html";
    } catch (err) {
      errorEl.textContent = "Ongeldige inloggegevens";
      console.error(err.code);
    }
  });
});
