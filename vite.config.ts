import path from 'path';
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig((mode) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    
    // 【✅ GitHub Pages 部署所需的路徑設定】
    base: '/Taiwan-Tax-AI-Assistant/', 
    
    plugins: [react()],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  }
});
