import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';

export default defineConfig({
  plugins: [react(), reactNativeWeb()],
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js']
  }
});
