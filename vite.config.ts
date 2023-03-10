import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 关键代码
export default defineConfig({
  resolve: {
    alias: {
      /*
      路径别名
      若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径路径 
    */
      //'@': process.cwd()+'/src'
      //'@':path.resolve('src')
      //'@':path.resolve(__dirname, 'src')
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [vue()],
});
