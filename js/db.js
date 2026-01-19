import Dexie from "https://cdn.jsdelivr.net/npm/dexie@3.2.4/dist/dexie.mjs";

export const db = new Dexie("gpsAttendanceDB");

db.version(1).stores({
  livePresence: "uid"
});
