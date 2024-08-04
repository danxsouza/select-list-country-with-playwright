import { test } from '../fixtures/myfixtures';

test.describe('App', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loadPage();
        await loginPage.loginPage();
    });

    test('Test add to cart functionality', async ({ addToCartPage }) => {
        await addToCartPage.addToCart();
    })
})