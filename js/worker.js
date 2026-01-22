import { checkGeofence } from "./gps.js";

export function startWorkerAttendance() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return;

  const statusEl = document.getElementById("workerStatus");

  checkGeofence(isInside => {
    if (isInside) {
      statusEl.innerText = "Registered Successfully";

      // ✅ THIS is what engineer dashboard reads
      localStorage.setItem("workerPresent", user.name);
    } else {
      statusEl.innerText = "Beyond Geofence";
      localStorage.removeItem("workerPresent");
    }
  });
}
