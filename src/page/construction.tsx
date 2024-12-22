export default function ConstructionPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const ref = queryParams.get("ref");

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 text-gray-100 p-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {ref
            ? `${ref} is under construction`
            : "Default page to show under construction"}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-sky-400">
          {ref
            ? `${ref} is in development mode and it will be available soon.`
            : "Default text to show under construction."}
        </p>
        <div className="flex space-x-4">
          <a
            href="https://adityapunmiya.com"
            className="bg-transparent hover:bg-neutral-800 text-gray-100 font-semibold py-2 px-4 border border-gray-100 rounded transition duration-300"
          >
            Back to adityapunmiya.com
          </a>
        </div>
      </div>
    </div>
  );
}
