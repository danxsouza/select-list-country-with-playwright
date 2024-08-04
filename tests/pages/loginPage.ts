import {expect, type Page, type Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('//input[@id="userEmail"]');
        this.passwordInput = page.locator('//input[@id="userPassword"]');
        this.submitButton = page.locator('text=Login');
    }

    async loginPage() {
        await this.userNameInput.fill('anshika@gmail.com');
        await this.passwordInput.fill('Iamking@000');
        await expect(this.submitButton).toBeVisible()
        await this.submitButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async loadPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/');
        //await this.page.goto(process.env.BASE_URL);
        // const url = process.env.BASE_URL;
        // if(!url) {
        //     throw new Error('BASE_URL environment variable is not set');
        // } else {
        //     await this.page.goto(url);
        // }
    }
}