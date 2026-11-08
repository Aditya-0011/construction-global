const KNOWN_PROJECTS: Record<string, string> = {
  console: "Console",
  manager: "Manager",
  wallet: "Wallet",
  portfolio: "Portfolio",
};

function projectFromQuery(): string | null {
  const ref = new URLSearchParams(window.location.search).get("ref");
  if (!ref) return null;
  return KNOWN_PROJECTS[ref.trim().toLowerCase()] ?? null;
}

const project = projectFromQuery();

export default function ConstructionPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 p-4 text-gray-100">
      <div className="w-full max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          {project ? `${project} is under construction` : "Under construction"}
        </h1>
        <p className="mb-8 text-xl text-sky-400 md:text-2xl">
          {project
            ? `${project} is in development mode and it will be available soon.`
            : "Project is in development mode and it will be available soon."}
        </p>
        <div className="flex space-x-4">
          <a
            href="https://adityapunmiya.com"
            className="rounded-sm border border-gray-100 bg-transparent px-4 py-2 font-semibold text-gray-100 transition duration-300 hover:bg-neutral-800"
          >
            Back to adityapunmiya.com
          </a>
        </div>
      </div>
    </main>
  );
}
