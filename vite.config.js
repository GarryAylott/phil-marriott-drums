import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ command }) => {
    const isDev = command === "serve";
    const isBuild = command === "build";

    console.log("");
    console.log(
        isDev
            ? "⚙️  Vite Dev Server running — HMR + sourcemaps enabled."
            : "🚀  Production build starting — sourcemaps disabled, output to /dist."
    );
    console.log("");

    return {
        base: "./",
        plugins: [
            {
                name: "build-finished-message",
                closeBundle() {
                    console.log(
                        "\n✅ Build complete. Files are ready in /dist.\n"
                    );
                },
            },
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        css: {
            devSourcemap: isDev,
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/styles/_variables.scss" as *;`,
                },
            },
        },
        build: {
            outDir: "dist",
            assetsDir: "assets",
            minify: "terser",
            sourcemap: false,
            terserOptions: {
                format: {
                    comments: false,
                },
            },
        },
        server: {
            open: true,
            host: true,
            watch: {
                usePolling: true,
            },
        },
    };
});
