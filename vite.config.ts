import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    base: "/transform-text/",
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["icons/icon-192.png", "icons/icon-512.png"],
            manifest: {
                name: "Transform Text",
                short_name: "Transform Text",
                description:
                    "A lightweight text transformation tool for developers, writers, and curious minds. Escape newlines, change case formats, and quickly copy results to your clipboard.",
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",

                // Relative so iOS anchors to the subfolder
                id: "./",
                start_url: "./",
                scope: "./",

                icons: [
                    {
                        src: "icons/icon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "icons/maskable-512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
            },
        }),
    ],
});
