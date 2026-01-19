export function updateWorkerUI(isInside) {
  const status = document.getElementById("workerStatus");

  if (isInside) {
    status.textContent = "Registered successfully ✅";
    status.style.color = "green";
  } else {
    status.textContent = "Beyond geofence ❌";
    status.style.color = "red";
  }
}
