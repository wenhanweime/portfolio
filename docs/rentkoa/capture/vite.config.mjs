import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const source = process.env.RENTKOA_SOURCE;
if (!source) throw new Error('Set RENTKOA_SOURCE to the existing RentKoa source checkout.');
const root = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({ root, plugins: [react()], resolve: { alias: { '@rentkoa': source }, dedupe: ['react', 'react-dom'] }, server: { host:'127.0.0.1', port:5175, strictPort:true, fs:{allow:[root,source]} } });
