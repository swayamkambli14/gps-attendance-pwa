function startWorkerTracking() {
  navigator.geolocation.watchPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      checkGeofence(lat, lng);
    },
    function (error) {
      console.log(error);
    },
    { enableHighAccuracy: true }
  );
}

async function checkGeofence(lat, lng) {
  const siteLat = 28.6139;
  const siteLng = 77.2090;
  const radius = 3;

  const distance = getDistance(lat, lng, siteLat, siteLng);

  if (distance <= radius) {
    await db.livePresence.put({
      workerId: currentUser.uid,
      siteId: currentUser.siteId
    });
  } else {
    await db.livePresence.delete(currentUser.uid);
  }
}
