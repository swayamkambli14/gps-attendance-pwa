let currentUser = null;

async function loginAsWorker() {
  currentUser = {
    uid: "worker1",
    role: "worker",
    name: "Ramesh Kumar",
    contact: "9876543210",
    siteId: "site1"
  };

  await db.users.put(currentUser);
  showWorkerUI();
}

async function loginAsEngineer() {
  currentUser = {
    uid: "engineer1",
    role: "engineer",
    name: "Amit Sharma",
    siteId: "site1"
  };

  await db.users.put(currentUser);
  showEngineerUI();
}
