import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
                secure: false
            }
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL("./index.html", import.meta.url)),
                reservaciones: fileURLToPath(new URL("./reservaciones.html", import.meta.url)),
            },
        },
    },
});
