import { db } from "./db.js";
import { currentUser } from "./auth.js";
import { updateWorkerUI } from "./worker.js";
import { renderEngineerDashboard } from "./engineer.js";

const SITE_LAT = 28.6139;
const SITE_LNG = 77.2090;
const RADIUS = 2;

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export function startTracking() {
  navigator.geolocation.watchPosition(
    async (pos) => {
      if (!currentUser) return;

      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const distance = getDistance(lat, lng, SITE_LAT, SITE_LNG);

      if (distance <= RADIUS && currentUser.role === "worker") {
        await db.livePresence.put({
          uid: currentUser.uid,
          name: currentUser.name
        });
        updateWorkerUI(true);
      }

      if (distance > RADIUS && currentUser.role === "worker") {
        await db.livePresence.delete(currentUser.uid);
        updateWorkerUI(false);
      }

      renderEngineerDashboard();
    },
    err => console.error(err),
    { enableHighAccuracy: true }
  );
}
