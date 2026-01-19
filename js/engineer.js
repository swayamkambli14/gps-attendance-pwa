import { db } from "./db.js";
import { currentUser } from "./auth.js";

export async function renderEngineerDashboard() {
  if (!currentUser || currentUser.role !== "engineer") return;

  const list = document.getElementById("workersList");
  const workers = await db.livePresence.toArray();

  list.innerHTML = "";

  workers.forEach(worker => {
    const li = document.createElement("li");
    li.textContent = worker.name;
    list.appendChild(li);
  });
}
