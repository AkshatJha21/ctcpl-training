import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  timeout: 30 * 1000,
  retries: 2,
  reporter: 'line'
});
