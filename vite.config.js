import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()
  ],
  base: '/',
  define: {
    global: {},
  },
   "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "https://backend-headlight-shop.vercel.app/sitemap.xml"
    }
  ]
});
