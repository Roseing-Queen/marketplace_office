import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "node:path";
import esbuild from "./build/esbuild.ts";
import {mock} from "./build/mock.ts";
import terserOptions from "./build/terserOptions.ts";
import config from "./config/config.json"
import CustomizeProxy from "./build/CustomizeProxy.ts";

// https://vitejs.dev/config/
export default defineConfig((mode):object => {
  const env: Record<string, string> = loadEnv(mode.mode, process.cwd());
  return {
    resolve:{
      alias:{
        "@":resolve(__dirname,'./src'),
      }
    },
    esbuild: esbuild(env.VITE_NODE),
    plugins: [react(),mock()],
    server: {
      port: config.port,
      proxy: CustomizeProxy(env.VITE_PUBLIC_URL)

    },
    build: {
      outDir: config.outDir,
      ...terserOptions(env.VITE_NODE)
    },
    css:{
      preprocessorOptions:{
        scss:{
          api: 'modern-compiler',
        }
      }
    }
  }
})
