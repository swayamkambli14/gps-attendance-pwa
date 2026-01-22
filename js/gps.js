const SITE_LAT = 28.6139;     // change to your site latitude
const SITE_LON = 77.209;    // change to your site longitude
const RADIUS = 5;          // meters

export function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Earth radius in meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export function checkGeofence(callback) {
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      const distance = getDistance(latitude, longitude, SITE_LAT, SITE_LON);
      callback(distance <= RADIUS);
    },
    () => alert("Location permission required"),
    { enableHighAccuracy: true }
  );
}
