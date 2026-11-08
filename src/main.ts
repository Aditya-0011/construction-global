import "./index.css";

const KNOWN_PROJECTS = new Map([
  ["console", "Console"],
  ["manager", "Manager"],
  ["wallet", "Wallet"],
  ["portfolio", "Portfolio"],
]);

const ref = new URLSearchParams(window.location.search).get("ref");
const project = ref ? KNOWN_PROJECTS.get(ref.trim().toLowerCase()) : undefined;

if (project) {
  document.getElementById("title")!.textContent =
    `${project} is under construction`;
  document.getElementById("description")!.textContent =
    `${project} is in development mode and it will be available soon.`;
}
