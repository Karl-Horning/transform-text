/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import {
    SITE_BASE,
    SITE_TITLE,
    SITE_SHORT_NAME,
    SITE_DESCRIPTION,
    SITE_URL,
    AUTHOR_NAME,
    THEME_COLOR,
    THEME_COLOR_LIGHT,
} from "./src/config";

// https://vite.dev/config/
export default defineConfig({
    base: SITE_BASE,
    plugins: [
        react(),
        tailwindcss(),
        {
            name: "html-meta",
            transformIndexHtml(html: string) {
                return html
                    .replace(/%SITE_TITLE%/g, SITE_TITLE)
                    .replace(/%SITE_SHORT_NAME%/g, SITE_SHORT_NAME)
                    .replace(/%SITE_DESCRIPTION%/g, SITE_DESCRIPTION)
                    .replace(/%SITE_URL%/g, SITE_URL)
                    .replace(/%AUTHOR_NAME%/g, AUTHOR_NAME)
                    .replace(/%THEME_COLOR%/g, THEME_COLOR)
                    .replace(/%THEME_COLOR_LIGHT%/g, THEME_COLOR_LIGHT);
            },
        },
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon/**", "preview-image.png"],
            manifest: {
                name: SITE_TITLE,
                short_name: SITE_SHORT_NAME,
                description: SITE_DESCRIPTION,
                theme_color: THEME_COLOR,
                background_color: THEME_COLOR,
                display: "standalone",
                start_url: SITE_BASE,
                scope: SITE_BASE,
                icons: [
                    {
                        src: "favicon/android-icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "favicon/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "favicon/icon-512x512-maskable.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
            },
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
            },
        }),
    ],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"],
    },
});
