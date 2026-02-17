// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://thallium.app",
    integrations: [sitemap()],
    image: {
        service: passthroughImageService(),
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
