import { test, expect } from "@playwright/test";

test('check page title', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const title = await page.title();
    expect(title).toContain("Playwright");
});

test('search in Youtube website', async ({ page }) => {
    await page.goto("https://youtube.com");
    await page.keyboard.press('/');
    await page.getByPlaceholder('Search').fill('hamza');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
});

// playwright auto-waits for elements to become visible in dom
test('open docs on playwright', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByText('Docs').click(); // here playwrght waits for element
    await expect(page).toHaveURL(/.*docs/);
});

// debug notes:
// npx playwright test --debug : launches inspector ui, allows to go step wise
// page.pause() : opens inspector at this line

test('pause test', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByText('Docs').click();
    await page.pause();
    await expect(page).toHaveURL(/.*docs/);
});