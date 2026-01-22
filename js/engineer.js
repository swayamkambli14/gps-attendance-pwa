export function loadEngineerPanel() {
  const list = document.getElementById("workerList");

  function refreshList() {
    list.innerHTML = "";

    const workerName = localStorage.getItem("workerPresent");
    if (workerName) {
      const li = document.createElement("li");
      li.innerText = workerName;
      list.appendChild(li);
    }
  }

  // Initial load
  refreshList();

  // 🔁 Auto-refresh every 2 seconds
  setInterval(refreshList, 2000);
}
