import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

type MyFixtures = {
    loginAsValidUser: () => void;
};

export const test = base.extend<MyFixtures>({
    loginAsValidUser: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await use(() => {});
    }
});

export { expect };