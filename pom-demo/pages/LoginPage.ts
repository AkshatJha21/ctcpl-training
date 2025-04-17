import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly flashMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('button[type="submit"]');
        this.flashMessage = page.locator('#flash');
    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async showFlashMessage(message: string) {
        await this.flashMessage.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(500);
        return this.flashMessage.textContent();
    }
}