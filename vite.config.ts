import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {federation} from "@module-federation/vite";
import jsxTagger from "react-component-taggers";

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), "");
  const baseUrl = env.NEXT_PUBLIC_STORAGE_BASE_URL;
  const appID = env.NEXT_PUBLIC_APP_ID;
  const clientHint = env.NEXT_PUBLIC_CLIENT_HINT;
  const appVersion = env.NEXT_PUBLIC_APP_VERSION;
  const baseStorageUrl = `${baseUrl}/${clientHint}/${appID}/${appVersion}/Deployed`;

  const isProd = mode === "production";

  return {
    base: baseUrl === undefined ? "/" : baseStorageUrl,
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      allowedHosts: true,
      hmr: {
        clientPort: 443,
        protocol: "wss",
      },
    },
    plugins: [
      jsxTagger(),
      react(),
      ...(isProd
        ? [
            federation({
              name: "simplifyx-remote-app",
              filename: "remoteEntry.js",
              exposes: {
                "./app": "@/main.tsx",
              },
            }),
          ]
        : []),
    ],
    optimizeDeps: {
      include: ["react", "react-dom", "lucide-react", "lodash"],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "esnext",
    },
  };
});
