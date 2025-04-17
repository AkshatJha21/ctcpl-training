import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: './tests',
    use: {
        headless: false,
        screenshot: 'only-on-failure',
        baseURL: 'https://the-internet.herokuapp.com'
    }
}); 