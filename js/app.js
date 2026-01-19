import { loginAsWorker, loginAsEngineer } from "./auth.js";
import { startTracking } from "./gps.js";

const loginView = document.getElementById("loginView");
const workerView = document.getElementById("workerView");
const engineerView = document.getElementById("engineerView");

document.getElementById("workerLogin").onclick = () => {
  loginAsWorker();
  loginView.style.display = "none";
  workerView.style.display = "block";
  startTracking();
};

document.getElementById("engineerLogin").onclick = () => {
  loginAsEngineer();
  loginView.style.display = "none";
  engineerView.style.display = "block";
  startTracking();
};
