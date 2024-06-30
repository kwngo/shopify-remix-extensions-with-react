import { defineConfig, type UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import shopify from 'vite-plugin-shopify'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // remix({
    //   ignoredRouteFiles: ["**/.*"],
    // }),
    tsconfigPaths(),
    shopify({
      themeRoot: 'extensions/example-extension',
    }),
    react(),
      ],
  build: {
    assetsInlineLimit: 0,
  },
}) satisfies UserConfig;
