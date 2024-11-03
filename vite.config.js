import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginRequire from "vite-plugin-require";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), vitePluginRequire], //allow to use require()
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        // port: 3000, //5173 default port
        host: true, //network host
        strictPort: true,
        open: true, //auto open browser
    },
    optimizeDeps: {
        exclude: ["js-big-decimal"], //fix cache issue in linux
    },
});
