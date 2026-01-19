export let currentUser = null;

export function loginAsWorker() {
  currentUser = {
    uid: "worker_1",
    name: "Ramesh",
    role: "worker"
  };
}

export function loginAsEngineer() {
  currentUser = {
    uid: "engineer_1",
    name: "Site Engineer",
    role: "engineer"
  };
}
