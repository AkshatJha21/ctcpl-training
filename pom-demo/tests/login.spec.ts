import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe('Login tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    }); 

    test('login with valid credentials', async ({ page }) => {
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        const message = await loginPage.showFlashMessage('You logged into a secure area!');
        expect(message).toContain('You logged into a secure area!');
    });

    test('login failed due to invalid credentials', async ({ page }) => {
        await loginPage.login('invalid', 'wrong');
        const message = await loginPage.showFlashMessage('Your username is invalid!');
        expect(message).toContain('Your username is invalid!');
    });
});