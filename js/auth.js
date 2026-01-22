import { db } from "./db.js";
import { loadWorkerDashboard, loadEngineerDashboard } from "./app.js";

/* ================= WORKER SIGNUP ================= */
export async function workerSignup(name, email, password) {
  const existing = await db.users.where("email").equals(email).first();
  if (existing) {
    alert("User already exists");
    return;
  }

  await db.users.add({
    name,
    email,
    password,
    role: "worker"
  });

  alert("Signup successful. Please login.");
}

/* ================= WORKER LOGIN ================= */
export async function workerLogin(email, password) {
  const user = await db.users
    .where("email").equals(email)
    .and(u => u.password === password && u.role === "worker")
    .first();

  if (!user) {
    alert("Invalid worker credentials");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  localStorage.setItem("role", "worker");

  loadWorkerDashboard();
}

/* ================= ENGINEER LOGIN ================= */
export function engineerLogin(email, password) {
  if (email === "engineer@site.com" && password === "engineer123") {
    localStorage.setItem("role", "engineer");
    loadEngineerDashboard();
  } else {
    alert("Invalid engineer credentials");
  }
}
