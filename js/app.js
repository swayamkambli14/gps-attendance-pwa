import { workerSignup, workerLogin, engineerLogin } from "./auth.js";
import { startWorkerAttendance } from "./worker.js";
import { loadEngineerPanel } from "./engineer.js";

/* ===== DOM ELEMENTS ===== */
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

/* ===== SIGNUP ===== */
signupBtn.addEventListener("click", () => {
  const name = document.getElementById("suName").value.trim();
  const email = document.getElementById("suEmail").value.trim();
  const password = document.getElementById("suPassword").value.trim();

  if (!name || !email || !password) {
    alert("Fill all signup fields");
    return;
  }

  workerSignup(name, email, password);
});

/* ===== LOGIN ===== */
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("liEmail").value.trim();
  const password = document.getElementById("liPassword").value.trim();
  const role = document.getElementById("roleSelect").value;

  if (!email || !password) {
    alert("Enter email & password");
    return;
  }

  if (role === "worker") {
    workerLogin(email, password);
  } else {
    engineerLogin(email, password);
  }
});

/* ===== DASHBOARD LOADERS ===== */
export function loadWorkerDashboard() {
  document.getElementById("signupView").style.display = "none";
  document.getElementById("loginView").style.display = "none";
  document.getElementById("workerView").style.display = "block";
  document.getElementById("engineerView").style.display = "none";

  startWorkerAttendance();
}

export function loadEngineerDashboard() {
  document.getElementById("signupView").style.display = "none";
  document.getElementById("loginView").style.display = "none";
  document.getElementById("workerView").style.display = "none";
  document.getElementById("engineerView").style.display = "block";

  loadEngineerPanel();
}
