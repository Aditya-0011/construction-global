import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { redact } from "@tanstack/redact/vite";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      redact({
        preset: "full",
        features: { viewTransitions: false },
      }),
    ],
  };
});
