import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '#': path.resolve(__dirname, './src/'),
            '#components': path.resolve(__dirname, './src/components/'),
            '#pages': path.resolve(__dirname, './src/pages/'),
            '#hooks': path.resolve(__dirname, './src/hooks/'),
            '#utils': path.resolve(__dirname, './src/utils/'),
        },
    },
});
