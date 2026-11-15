import "./index.css";

const MAX_NAME_LENGTH = 30;

const root = document.documentElement;
const params = new URLSearchParams(window.location.search);

function readName(): string | undefined {
  const name = (params.get("ref") ?? "")
    .replace(/[^\p{L}\p{N} ._-]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!name || name.length > MAX_NAME_LENGTH) return undefined;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function setText(id: string, text: string) {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

try {
  const project = readName();
  const maintenance =
    params.get("maintenance")?.trim().toLowerCase() === "true";

  if (maintenance) {
    root.dataset.mode = "maintenance";
    const title = project
      ? `${project} is under maintenance`
      : "Under maintenance";
    document.title = title;
    setText("status", "Maintenance");
    setText("title", title);
    setText(
      "description",
      `${project ?? "This project"} is getting some upkeep and will be back shortly.`,
    );
  } else if (project) {
    const title = `${project} is under construction`;
    document.title = title;
    setText("title", title);
    setText(
      "description",
      `${project} is still being built and will be available soon.`,
    );
  }
} finally {
  requestAnimationFrame(() => {
    root.dataset.ready = "";
  });
}
