import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          framer: ["framer-motion"],
          chakra: [
            "@chakra-ui/react",
            "@chakra-ui/icons",
            "@emotion/react",
            "@emotion/styled",
            "framer-motion",
          ],
          icons: ["react-icons", "lucide-react"],
        },
      },
    },
  },
  plugins: [react()],
  server: {
    allowedHosts: ["frontend-shanmukh.kernn.xyz"],
  },
});
