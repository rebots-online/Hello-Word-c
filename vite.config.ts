import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import reactNativeWeb from 'vite-plugin-react-native-web';

export default defineConfig({
  plugins: [react(), viteCommonjs(), reactNativeWeb()],
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js']
  }
});
