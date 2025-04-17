import { test, expect } from "../fixtures/loginFixture";

test('should access secure area after login', async ({ page, loginAsValidUser }) => {
    await loginAsValidUser();
    await expect(page.locator('h2')).toHaveText('Secure Area');
});