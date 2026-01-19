const db = new Dexie("AttendanceDB");

db.version(1).stores({
  users: "uid, role, name, contact, siteId",
  livePresence: "workerId, siteId",
  verifiedAttendance: "++id, workerId, engineerId, timestamp"
});
