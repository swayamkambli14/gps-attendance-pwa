async function loadEngineerDashboard() {
  const list = document.getElementById("workerList");
  list.innerHTML = "";

  const entries = await db.livePresence.toArray();

  for (let entry of entries) {
    const worker = await db.users.get(entry.workerId);

    const div = document.createElement("div");
    div.innerHTML = `
      ${worker.name} (${worker.contact})
      <button data-id="${worker.uid}">Verify</button>
    `;

    list.appendChild(div);
  }

  const buttons = document.querySelectorAll("#workerList button");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      verifyWorker(btn.getAttribute("data-id"));
    });
  });
}

async function verifyWorker(workerId) {
  await db.verifiedAttendance.add({
    workerId: workerId,
    engineerId: currentUser.uid,
    timestamp: new Date().toISOString()
  });

  await db.livePresence.delete(workerId);
  loadEngineerDashboard();
}
