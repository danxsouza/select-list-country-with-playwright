import { test } from '../fixtures/myfixtures';

test.describe('Login', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loadPage();
        await loginPage.loginPage();
    });

    test('Test login functionality', async ({ loginPage, page }) => {
        await loginPage.page.screenshot({path: './tests/screenshot/login.png', fullPage: true});
        await page.pause();
    })




})