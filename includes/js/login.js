import { auth } from "/teck-staff/includes/firebase/config.js";
import { signInWithEmailAndPassword } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const errorText = document.getElementById("error");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 💾 Opslaan in sessionStorage
    const teckUser = {
      uid: user.uid,
      email: user.email
    };

    sessionStorage.setItem("teckUser", JSON.stringify(teckUser));

    // ➡️ Doorsturen
    window.location.href = "dashboard.html";

  } catch (error) {
    console.error(error);
    errorText.textContent = "Login mislukt: " + error.message;
  }
});
