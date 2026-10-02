import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Mesma paleta da capa do Resolutions: fundo quase preto e laranja
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          300: { value: "#FDBA74" },
          400: { value: "#FB923C" },
          500: { value: "#F97316" },
          600: { value: "#EA580C" },
        },
        surface: {
          bg: { value: "#0C0D10" },
          card: { value: "#16161A" },
          border: { value: "#26262C" },
        },
        ink: {
          strong: { value: "#F5F2EE" },
          muted: { value: "#A89F97" },
        },
      },
      fonts: {
        heading: { value: "'Outfit', 'Segoe UI', system-ui, sans-serif" },
        body: { value: "'Inter', 'Segoe UI', system-ui, sans-serif" },
        mono: { value: "'JetBrains Mono', Consolas, monospace" },
      },
    },
  },
  globalCss: {
    html: { scrollBehavior: "smooth", scrollPaddingTop: "80px" },
    body: { bg: "surface.bg", color: "ink.strong" },
  },
});

export const system = createSystem(defaultConfig, config);
