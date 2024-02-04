/// <reference types="vitest" />
import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import {configDefaults} from "vitest/config";

// https://vitejs.dev/config/
export default({mode}) => {
  const env = loadEnv(mode, process.cwd());
  const folder: string = env.VITE_APP_FOLDER;
  return defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: `${folder}/setupTests.ts`,
    coverage: {
      provider: "v8",
      enabled: true,
      reporter: ['text', 'html', 'lcov'],
      include: [`${folder}/*`],
      exclude: [...configDefaults.exclude, `${folder}/main.tsx`, `${folder}/setupTests.ts`, "**/**.d.ts**"],
      extension: ["ts", "tsx"]
    },
    outputFile: 'reports/test-report.xml',
    includeSource:[`${folder}/*`],
    exclude: [...configDefaults.exclude, '**/build/**', "cours/*"],
  }
})}
