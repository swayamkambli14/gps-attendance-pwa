function showWorkerUI() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("workerView").style.display = "block";
  startWorkerTracking();
}

function showEngineerUI() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("engineerView").style.display = "block";
  loadEngineerDashboard();
}

document.getElementById("workerLogin").addEventListener("click", function () {
  loginAsWorker();
});

document.getElementById("engineerLogin").addEventListener("click", function () {
  loginAsEngineer();
});
