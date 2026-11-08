import { registerHooks } from "node:module";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "typescript" || specifier.startsWith("typescript/")) {
      return nextResolve(
        specifier.replace(/^typescript/, "@typescript/typescript6"),
        context,
      );
    }
    return nextResolve(specifier, context);
  },
});

const { default: js } = await import("@eslint/js");
const { default: tseslint } = await import("typescript-eslint");

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
